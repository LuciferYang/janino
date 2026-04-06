package org.codehaus.janino.benchmarks;

import org.codehaus.commons.compiler.CompilerFactoryFactory;
import org.codehaus.commons.compiler.ICompilerFactory;
import org.codehaus.commons.compiler.IExpressionEvaluator;
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

/**
 * Compares Janino vs JDK compiler (commons-compiler-jdk) performance.
 *
 * <p>Uses {@code @Param} to let JMH automatically iterate over both compiler implementations,
 * and separates compilation from evaluation to measure each independently.</p>
 *
 * <p>Run with: {@code java -jar target/benchmarks.jar JaninoVsJdkBenchmark}</p>
 */
@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Thread)
@Warmup(iterations = 5, time = 1)
@Measurement(iterations = 10, time = 1)
@Fork(2)
public class JaninoVsJdkBenchmark {

    private static final String EXPRESSION = "a + b * 2 - (a > b ? a : b)";

    private static final String[] PARAM_NAMES = { "a", "b" };
    private static final Class<?>[] PARAM_TYPES = { int.class, int.class };

    @Param({ "org.codehaus.janino.CompilerFactory", "org.codehaus.commons.compiler.jdk.CompilerFactory" })
    private String compilerFactoryClassName;

    private ICompilerFactory compilerFactory;
    private IExpressionEvaluator preCompiledEE;

    @Setup(Level.Trial)
    public void setUp() throws Exception {
        compilerFactory = CompilerFactoryFactory.getCompilerFactory(compilerFactoryClassName);

        // Pre-compile for the evaluate-only benchmark
        preCompiledEE = compilerFactory.newExpressionEvaluator();
        preCompiledEE.setParameters(PARAM_NAMES, PARAM_TYPES);
        preCompiledEE.setExpressionType(int.class);
        preCompiledEE.cook(EXPRESSION);
    }

    /** Measures compilation time only (no evaluation). */
    @Benchmark
    public IExpressionEvaluator compileExpression() throws Exception {
        IExpressionEvaluator ee = compilerFactory.newExpressionEvaluator();
        ee.setParameters(PARAM_NAMES, PARAM_TYPES);
        ee.setExpressionType(int.class);
        ee.cook(EXPRESSION);
        return ee;
    }

    /** Measures pure evaluation time of a pre-compiled expression (no compilation overhead). */
    @Benchmark
    public Object evaluateExpression() throws Exception {
        return preCompiledEE.evaluate(new Object[] { 10, 20 });
    }
}
