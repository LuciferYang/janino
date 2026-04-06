window.BENCHMARK_DATA = {
  "lastUpdate": 1775492083863,
  "repoUrl": "https://github.com/LuciferYang/janino",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "yangjie01@baidu.com",
            "name": "yangjie01",
            "username": "LuciferYang"
          },
          "committer": {
            "email": "yangjie01@baidu.com",
            "name": "yangjie01",
            "username": "LuciferYang"
          },
          "distinct": true,
          "id": "1a66924ed565db2eeea636bc492585a363de98db",
          "message": "fix: fix two benchmark compilation errors on JDK 17\n\n- CompilationUnitBenchmark: use raw List and explicit cast instead of\n  List<String> generics, which Janino doesn't fully support\n- ScriptCompileBenchmark: add missing setReturnType(int.class) for\n  compileSimpleScript so \"return 42\" is valid",
          "timestamp": "2026-04-06T23:47:57+08:00",
          "tree_id": "24012c628c93e0ad687109a80027f47bd4892eaa",
          "url": "https://github.com/LuciferYang/janino/commit/1a66924ed565db2eeea636bc492585a363de98db"
        },
        "date": 1775491872136,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileComplexClass",
            "value": 0.39755624356801966,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileSimpleClass",
            "value": 0.058349178741855044,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileComplexExpression",
            "value": 0.15655302257739445,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileSimpleArithmetic",
            "value": 0.11808291652660258,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.createFastEvaluator",
            "value": 0.15958744926451507,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.evaluatePreCompiled",
            "value": 0.000007067691304416056,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.13479378181826376,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 6.233965825859784,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.000007505941421437144,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 0.000010362676183182748,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileLoopScript",
            "value": 0.14843384210836313,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileSimpleScript",
            "value": 0.11270398448904176,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.executePreCompiled",
            "value": 0.00002477958792973236,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileParserClass",
            "value": 75.3789313,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileScannerClass",
            "value": 19.76595975,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yangjie01@baidu.com",
            "name": "yangjie01",
            "username": "LuciferYang"
          },
          "committer": {
            "email": "yangjie01@baidu.com",
            "name": "yangjie01",
            "username": "LuciferYang"
          },
          "distinct": true,
          "id": "d14b7ce792e72e2a48403fe54f353beb177cb927",
          "message": "fix: add ServicesResourceTransformer to shade plugin to fix SPI warnings\n\nMultiple JARs (janino, commons-compiler-jdk) contain\nMETA-INF/services/org.codehaus.commons.compiler.ICompilerFactory.\nWithout ServicesResourceTransformer, shade plugin warns about overlapping\nresources and only keeps one entry, potentially breaking ServiceLoader.",
          "timestamp": "2026-04-06T23:55:00+08:00",
          "tree_id": "cf806250acaf2f67d4f2db86f26f3a7ddc2607a5",
          "url": "https://github.com/LuciferYang/janino/commit/d14b7ce792e72e2a48403fe54f353beb177cb927"
        },
        "date": 1775492082980,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileComplexClass",
            "value": 0.420463752084231,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileSimpleClass",
            "value": 0.06042599013659512,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileComplexExpression",
            "value": 0.15728758074550275,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileSimpleArithmetic",
            "value": 0.12227889462865701,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.createFastEvaluator",
            "value": 0.1646735828060486,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.evaluatePreCompiled",
            "value": 0.000007093876849207764,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.13862777821950517,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 6.377150166779988,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.000007505281185270795,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 0.000010339643643092438,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileLoopScript",
            "value": 0.15117284092005664,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileSimpleScript",
            "value": 0.11704804300453807,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.executePreCompiled",
            "value": 0.000024760725425680057,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileParserClass",
            "value": 67.65676224999999,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileScannerClass",
            "value": 20.89941765,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          }
        ]
      }
    ]
  }
}