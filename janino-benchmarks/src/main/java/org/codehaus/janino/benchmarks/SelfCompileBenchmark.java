package org.codehaus.janino.benchmarks;

import org.codehaus.janino.SimpleCompiler;
import org.openjdk.jmh.annotations.*;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeUnit;

/**
 * Real-world benchmark: compiles Janino's own source files.
 *
 * <p>Uses {@link org.openjdk.jmh.annotations.Mode#SingleShotTime} because compiling large
 * compilation units is a latency-oriented workload, not a throughput one.</p>
 *
 * <p>Source files are read from the classpath (the janino module's source directory is added
 * as a resource via the POM), or from the standard project layout relative path.</p>
 *
 * <p>Run with: {@code java -jar target/benchmarks.jar SelfCompileBenchmark}</p>
 */
@BenchmarkMode(Mode.SingleShotTime)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Thread)
@Warmup(iterations = 3)
@Measurement(iterations = 5)
@Fork(2)
public class SelfCompileBenchmark {

    private String scannerSource;
    private String parserSource;

    @Setup(Level.Trial)
    public void setUp() throws Exception {
        scannerSource = readSource("org/codehaus/janino/Scanner.java");
        parserSource  = readSource("org/codehaus/janino/Parser.java");
    }

    /**
     * Compiles Janino's Scanner.java (~900 lines).
     * A medium-sized compilation unit with string processing and tokenization logic.
     */
    @Benchmark
    public Class<?> compileScannerClass() throws Exception {
        SimpleCompiler sc = new SimpleCompiler();
        sc.cook(scannerSource);
        return sc.getClassLoader().loadClass("org.codehaus.janino.Scanner");
    }

    /**
     * Compiles Janino's Parser.java (~4200 lines).
     * A large compilation unit exercising the full compilation pipeline.
     */
    @Benchmark
    public Class<?> compileParserClass() throws Exception {
        SimpleCompiler sc = new SimpleCompiler();
        sc.cook(parserSource);
        return sc.getClassLoader().loadClass("org.codehaus.janino.Parser");
    }

    /**
     * Reads a Java source file from the classpath or the project layout.
     * Tries classpath first (for shaded JAR execution), then falls back to
     * file system relative path (for IDE/mvn execution).
     */
    private static String readSource(String resourcePath) throws IOException {
        // Try classpath first (works when janino sources are on the classpath as resources)
        InputStream is = SelfCompileBenchmark.class.getClassLoader().getResourceAsStream(resourcePath);
        if (is == null) {
            // Fall back to file system: try standard project layout
            File file = new File("../janino/src/main/java/" + resourcePath);
            if (!file.exists()) {
                // Also try from janino-parent (mvnw runs from there)
                file = new File("janino/src/main/java/" + resourcePath);
            }
            if (!file.exists()) {
                throw new FileNotFoundException(
                    "Cannot find source file: " + resourcePath
                    + " (tried classpath and file system paths)"
                );
            }
            is = new FileInputStream(file);
        }
        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            char[] buf = new char[8192];
            int n;
            while ((n = reader.read(buf)) != -1) {
                sb.append(buf, 0, n);
            }
            return sb.toString();
        } finally {
            is.close();
        }
    }
}
