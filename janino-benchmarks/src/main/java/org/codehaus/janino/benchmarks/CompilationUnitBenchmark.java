package org.codehaus.janino.benchmarks;

import org.codehaus.janino.SimpleCompiler;
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

/**
 * Benchmarks for full compilation unit (class) compilation.
 *
 * <p>Run with: {@code java -jar target/benchmarks.jar CompilationUnitBenchmark}</p>
 */
@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Thread)
@Warmup(iterations = 5, time = 1)
@Measurement(iterations = 10, time = 1)
@Fork(2)
public class CompilationUnitBenchmark {

    private static final String SIMPLE_CLASS =
        "public class Foo {\n"
        + "    public int bar(int x) {\n"
        + "        return x * 2;\n"
        + "    }\n"
        + "}\n";

    private static final String COMPLEX_CLASS =
        "import java.util.ArrayList;\n"
        + "import java.util.List;\n"
        + "\n"
        + "public class ComplexFoo {\n"
        + "    private final List items = new ArrayList();\n"
        + "\n"
        + "    public void addItem(String item) {\n"
        + "        if (item != null && !item.isEmpty()) {\n"
        + "            items.add(item.trim());\n"
        + "        }\n"
        + "    }\n"
        + "\n"
        + "    public int size() { return items.size(); }\n"
        + "\n"
        + "    public String get(int index) {\n"
        + "        if (index < 0 || index >= items.size()) {\n"
        + "            throw new IndexOutOfBoundsException(\"Index: \" + index);\n"
        + "        }\n"
        + "        return (String) items.get(index);\n"
        + "    }\n"
        + "\n"
        + "    @Override\n"
        + "    public String toString() {\n"
        + "        StringBuilder sb = new StringBuilder(\"ComplexFoo[\");\n"
        + "        for (int i = 0; i < items.size(); i++) {\n"
        + "            if (i > 0) sb.append(\", \");\n"
        + "            sb.append(items.get(i));\n"
        + "        }\n"
        + "        sb.append(\"]\");\n"
        + "        return sb.toString();\n"
        + "    }\n"
        + "}\n";

    @Benchmark
    public ClassLoader compileSimpleClass() throws Exception {
        SimpleCompiler sc = new SimpleCompiler();
        sc.cook(SIMPLE_CLASS);
        return sc.getClassLoader();
    }

    @Benchmark
    public ClassLoader compileComplexClass() throws Exception {
        SimpleCompiler sc = new SimpleCompiler();
        sc.cook(COMPLEX_CLASS);
        return sc.getClassLoader();
    }
}
