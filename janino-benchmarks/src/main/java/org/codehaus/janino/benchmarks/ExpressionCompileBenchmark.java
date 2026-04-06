package org.codehaus.janino.benchmarks;

import org.codehaus.commons.compiler.IExpressionEvaluator;
import org.codehaus.janino.ExpressionEvaluator;
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

/**
 * Benchmarks for expression compilation and evaluation.
 *
 * <p>Separates compile-only and evaluate-only measurements to avoid mixing
 * compilation overhead with runtime evaluation cost.</p>
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

    private ExpressionEvaluator preCompiledEE;

    @Setup(Level.Trial)
    public void setUp() throws Exception {
        preCompiledEE = new ExpressionEvaluator();
        preCompiledEE.setParameters(new String[] { "a", "b" }, new Class[] { int.class, int.class });
        preCompiledEE.setExpressionType(int.class);
        preCompiledEE.cook("a + b * 2");
    }

    /** Measures compilation time for a simple arithmetic expression. */
    @Benchmark
    public IExpressionEvaluator compileSimpleArithmetic() throws Exception {
        ExpressionEvaluator ee = new ExpressionEvaluator();
        ee.setParameters(new String[] { "a", "b" }, new Class[] { int.class, int.class });
        ee.setExpressionType(int.class);
        ee.cook("a + b * 2");
        return ee;
    }

    /** Measures compilation time for an expression with typed parameters and Math calls. */
    @Benchmark
    public IExpressionEvaluator compileComplexExpression() throws Exception {
        ExpressionEvaluator ee = new ExpressionEvaluator();
        ee.setParameters(new String[] { "x", "y", "z" }, new Class[] { double.class, double.class, double.class });
        ee.setExpressionType(double.class);
        ee.cook("Math.sqrt(x * x + y * y + z * z)");
        return ee;
    }

    /** Measures pure evaluation time of a pre-compiled expression (no compilation overhead). */
    @Benchmark
    public Object evaluatePreCompiled() throws Exception {
        return preCompiledEE.evaluate(new Object[] { 3, 7 });
    }

    /**
     * Measures the {@code createFastEvaluator} API which generates a direct interface implementation,
     * bypassing reflection for evaluation. This benchmarks the fast-path compilation cost.
     */
    @Benchmark
    public Object createFastEvaluator() throws Exception {
        ExpressionEvaluator ee = new ExpressionEvaluator();
        return ee.createFastEvaluator("a + b * 2", IntBinaryOp.class, "a", "b");
    }

    /** Functional interface for fast expression evaluation benchmark. */
    public interface IntBinaryOp {
        int evaluate(int a, int b);
    }
}
