package org.codehaus.janino.benchmarks;

import org.codehaus.commons.compiler.IExpressionEvaluator;
import org.codehaus.janino.ExpressionEvaluator;
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

/**
 * Benchmarks for expression compilation and evaluation.
 *
 * <p>Run with: {@code java -jar target/benchmarks.jar ExpressionCompileBenchmark}</p>
 */
@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Thread)
@Warmup(iterations = 5, time = 1)
@Measurement(iterations = 10, time = 1)
@Fork(2)
public class ExpressionCompileBenchmark {

    @Benchmark
    public IExpressionEvaluator compileSimpleArithmetic() throws Exception {
        ExpressionEvaluator ee = new ExpressionEvaluator();
        ee.cook("a + b * 2");
        return ee;
    }

    @Benchmark
    public IExpressionEvaluator compileComplexExpression() throws Exception {
        ExpressionEvaluator ee = new ExpressionEvaluator();
        ee.setParameters(new String[] { "x", "y", "z" }, new Class[] { double.class, double.class, double.class });
        ee.setExpressionType(double.class);
        ee.cook("Math.sqrt(x * x + y * y + z * z)");
        return ee;
    }

    @Benchmark
    public Object evaluateSimple() throws Exception {
        ExpressionEvaluator ee = new ExpressionEvaluator();
        ee.setParameters(new String[] { "a", "b" }, new Class[] { int.class, int.class });
        ee.setExpressionType(int.class);
        ee.cook("a + b * 2");
        return ee.evaluate(new Object[] { 3, 7 });
    }
}
