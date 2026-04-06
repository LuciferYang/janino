package org.codehaus.janino.benchmarks;

import org.codehaus.commons.compiler.IScriptEvaluator;
import org.codehaus.janino.ScriptEvaluator;
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

/**
 * Benchmarks for script compilation and execution.
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

    @Benchmark
    public IScriptEvaluator compileSimpleScript() throws Exception {
        ScriptEvaluator se = new ScriptEvaluator();
        se.cook("return 42;");
        return se;
    }

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

    @Benchmark
    public Object executeLoopScript() throws Exception {
        ScriptEvaluator se = new ScriptEvaluator();
        se.setReturnType(int.class);
        se.cook(
            "int sum = 0;\n"
            + "for (int i = 0; i < 100; i++) {\n"
            + "    sum += i;\n"
            + "}\n"
            + "return sum;\n"
        );
        return se.evaluate(null);
    }
}
