package org.codehaus.janino.benchmarks;

import org.codehaus.commons.compiler.CompilerFactoryFactory;
import org.codehaus.commons.compiler.ICompilerFactory;
import org.codehaus.commons.compiler.IExpressionEvaluator;
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

/**
 * Compares Janino vs JDK compiler (commons-compiler-jdk) performance.
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

    @Benchmark
    public Object janino() throws Exception {
        ICompilerFactory cf = CompilerFactoryFactory.getCompilerFactory("org.codehaus.janino");
        IExpressionEvaluator ee = cf.newExpressionEvaluator();
        ee.setParameters(new String[] { "a", "b" }, new Class[] { int.class, int.class });
        ee.setExpressionType(int.class);
        ee.cook(EXPRESSION);
        return ee.evaluate(new Object[] { 10, 20 });
    }

    @Benchmark
    public Object jdk() throws Exception {
        ICompilerFactory cf = CompilerFactoryFactory.getCompilerFactory("org.codehaus.commons.compiler.jdk");
        IExpressionEvaluator ee = cf.newExpressionEvaluator();
        ee.setParameters(new String[] { "a", "b" }, new Class[] { int.class, int.class });
        ee.setExpressionType(int.class);
        ee.cook(EXPRESSION);
        return ee.evaluate(new Object[] { 10, 20 });
    }
}
