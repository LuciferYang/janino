# Janino

Janino is a super-small, super-fast Java compiler. It compiles Java source code into bytecode at runtime, without requiring the JDK's `tools.jar`.

Janino is used by [Apache Spark](https://spark.apache.org/), [Logback](https://logback.qos.ch/), [Groovy](https://groovy-lang.org/), and many other projects.

## Quick Start

### Expression Evaluator

```java
import org.codehaus.janino.ExpressionEvaluator;

ExpressionEvaluator ee = new ExpressionEvaluator();
ee.setParameters(new String[] { "a", "b" }, new Class[] { int.class, int.class });
ee.setExpressionType(int.class);
ee.cook("a + b");
int result = (Integer) ee.evaluate(new Object[] { 19, 23 });
System.out.println(result); // 42
```

### Script Evaluator

```java
import org.codehaus.janino.ScriptEvaluator;

ScriptEvaluator se = new ScriptEvaluator();
se.setReturnType(String.class);
se.cook(
    "StringBuilder sb = new StringBuilder();\n"
    + "for (int i = 0; i < 5; i++) sb.append(i);\n"
    + "return sb.toString();\n"
);
String result = (String) se.evaluate(null);
System.out.println(result); // "01234"
```

### ClassBody Evaluator

```java
import org.codehaus.janino.ClassBodyEvaluator;

ClassBodyEvaluator cbe = new ClassBodyEvaluator();
cbe.setImplementedInterfaces(new Class[] { Runnable.class });
cbe.cook("public void run() { System.out.println(\"Hello from Janino!\"); }");
((Runnable) cbe.getClazz().newInstance()).run();
```

## Maven Coordinates

```xml
<dependency>
    <groupId>org.codehaus.janino</groupId>
    <artifactId>janino</artifactId>
    <version>3.1.12</version>
</dependency>
```

For the compiler-neutral API only:

```xml
<dependency>
    <groupId>org.codehaus.janino</groupId>
    <artifactId>commons-compiler</artifactId>
    <version>3.1.12</version>
</dependency>
```

## Module Structure

| Module | Description |
|--------|-------------|
| `commons-compiler` | Compiler-neutral API (`IExpressionEvaluator`, `IScriptEvaluator`, `IClassBodyEvaluator`, `ISimpleCompiler`) |
| `commons-compiler-jdk` | Implementation backed by the JDK's built-in Java compiler |
| `janino` | The Janino implementation: super-small, super-fast, independent from `tools.jar` |
| `commons-compiler-tests` | Shared test suite applicable to all `commons-compiler` implementations |
| `janino-benchmarks` | JMH performance benchmarks (optional, not part of default build) |

## Building from Source

```bash
cd janino-parent
./mvnw clean install
```

To run with quality checks (JaCoCo + SpotBugs):

```bash
./mvnw clean verify -Pquality
```

To build benchmarks:

```bash
./mvnw clean package -Pbenchmarks
java -jar ../janino-benchmarks/target/benchmarks.jar
```

## Supported Java Language Features

Janino supports a large subset of Java, including:

- Primitive types, arrays, strings
- Classes, interfaces, enums, annotations
- Generics (type erasure)
- Lambda expressions and method references (Java 8)
- `try`-with-resources
- Multi-catch
- Diamond operator
- Enhanced `for` loops
- Varargs
- Static imports

See the [project homepage](http://janino-compiler.github.io/janino/) for the full feature matrix.

## License

[BSD 3-Clause](https://spdx.org/licenses/BSD-3-Clause.html)

## Links

- [Project Homepage](http://janino-compiler.github.io/janino/)
- [API Documentation](http://janino-compiler.github.io/janino/apidocs/)
- [GitHub Repository](https://github.com/janino-compiler/janino)
