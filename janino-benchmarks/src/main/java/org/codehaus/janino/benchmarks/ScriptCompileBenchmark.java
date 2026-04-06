package org.codehaus.janino.benchmarks;

import org.codehaus.commons.compiler.IScriptEvaluator;
import org.codehaus.janino.ScriptEvaluator;
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

/**
 * Benchmarks for script compilation and execution.
 *
 * <p>Separates compile-only and execute-only measurements to avoid mixing
 * compilation overhead with runtime execution cost.</p>
 *
 * <p>Run with: {@code java -jar target/benchmarks.jar ScriptCompileBenchmark}</p>
 */
@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Thread)
@Warmup(iterations = 5, time = 1)
@Measurement(iterations = 10, time = 1)
@Fork(2)
public class ScriptCompileBenchmark {

    private ScriptEvaluator preCompiledSE;

    @Setup(Level.Trial)
    public void setUp() throws Exception {
        preCompiledSE = new ScriptEvaluator();
        preCompiledSE.setReturnType(int.class);
        preCompiledSE.cook(
            "int sum = 0;\n"
            + "for (int i = 0; i < 100; i++) {\n"
            + "    sum += i;\n"
            + "}\n"
            + "return sum;\n"
        );
    }

    /** Measures compilation time for a trivial one-line script. */
    @Benchmark
    public IScriptEvaluator compileSimpleScript() throws Exception {
        ScriptEvaluator se = new ScriptEvaluator();
        se.cook("return 42;");
        return se;
    }

    /** Measures compilation time for a script containing a loop. */
    @Benchmark
    public IScriptEvaluator compileLoopScript() throws Exception {
        ScriptEvaluator se = new ScriptEvaluator();
        se.setReturnType(int.class);
        se.cook(
            "int sum = 0;\n"
            + "for (int i = 0; i < 100; i++) {\n"
            + "    sum += i;\n"
            + "}\n"
            + "return sum;\n"
        );
        return se;
    }

    /** Measures pure execution time of a pre-compiled loop script (no compilation overhead). */
    @Benchmark
    public Object executePreCompiled() throws Exception {
        return preCompiledSE.evaluate(null);
    }
}
