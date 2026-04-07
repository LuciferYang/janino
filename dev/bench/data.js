window.BENCHMARK_DATA = {
  "lastUpdate": 1775523020985,
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
          "id": "47b562e607368a725f36c726837c84676dc9a2c5",
          "message": "feat: integrate Checkstyle into Maven build and CI\n\nAdd maven-checkstyle-plugin to the quality profile, running during\nthe verify phase with failOnViolation=false so it reports without\nbreaking the build.\n\nCheckstyle rule tuning:\n- Disable JavadocMethodCheck and JavadocVariableCheck (1171 violations,\n  low value for compiler internals; re-enable when touching code)\n- Disable ConstantNameCheck (3 violations, intentional camelCase for\n  system property names)\n- Relax LineLength from 120 to 150 (reduces violations from 410 to 69)\n- Suppress LineLengthCheck for DeepCopier.java and AbstractTraverser.java\n  (269 violations from visitor-pattern long signatures)\n\nAlso:\n- Upload checkstyle-result.xml as CI artifact in quality workflow\n- Remove Eclipse .checkstyle files (Maven Checkstyle takes over)\n- Add **/.checkstyle to .gitignore",
          "timestamp": "2026-04-07T01:52:54+08:00",
          "tree_id": "77a16f5807ef2c331a6bba9891cc58f5c976c301",
          "url": "https://github.com/LuciferYang/janino/commit/47b562e607368a725f36c726837c84676dc9a2c5"
        },
        "date": 1775498835348,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileComplexClass",
            "value": 0.3902393869065145,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileSimpleClass",
            "value": 0.05238966493762031,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileComplexExpression",
            "value": 0.13564870093396653,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileSimpleArithmetic",
            "value": 0.10875820065401294,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.createFastEvaluator",
            "value": 0.14436302798203102,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.evaluatePreCompiled",
            "value": 0.000008241777137584119,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.11979855200184852,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 6.274252784749033,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.000008788878493066159,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 0.000011053045154143061,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileLoopScript",
            "value": 0.12822650755663437,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileSimpleScript",
            "value": 0.10017646292987042,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.executePreCompiled",
            "value": 0.00002145622275509504,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileParserClass",
            "value": 63.10455095,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileScannerClass",
            "value": 17.457173,
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
          "id": "cca6efa616690eb2ffc0da1adc22dbdf2ec3e405",
          "message": "docs: add SpotBugs findings triage document\n\nTriage all 378 SpotBugs findings (17 Priority-1, 361 Priority-2).\nPriority-1 findings: 14 DM_DEFAULT_ENCODING (tracked for fix),\n2 INT_BAD_COMPARISON (false positive), 1 RCN_REDUNDANT_NULLCHECK\n(false positive). Priority-2 findings are mostly expected patterns\nfor a compiler project (interned string comparison, public AST fields,\nexposed internal arrays for performance).",
          "timestamp": "2026-04-07T08:36:11+08:00",
          "tree_id": "07046457057f7d2fe3a6c43456c8b8c18af48c45",
          "url": "https://github.com/LuciferYang/janino/commit/cca6efa616690eb2ffc0da1adc22dbdf2ec3e405"
        },
        "date": 1775523020659,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileComplexClass",
            "value": 0.39869649293174964,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.CompilationUnitBenchmark.compileSimpleClass",
            "value": 0.06056455304492251,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileComplexExpression",
            "value": 0.16079941126332406,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.compileSimpleArithmetic",
            "value": 0.12345412057931061,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.createFastEvaluator",
            "value": 0.16110763455174867,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ExpressionCompileBenchmark.evaluatePreCompiled",
            "value": 0.0000070849849754577,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.13620968658491758,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.compileExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 5.434064377434073,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.janino.CompilerFactory\"} )",
            "value": 0.000007739019583269293,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.JaninoVsJdkBenchmark.evaluateExpression ( {\"compilerFactoryClassName\":\"org.codehaus.commons.compiler.jdk.CompilerFactory\"} )",
            "value": 0.000010413900016190615,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileLoopScript",
            "value": 0.14644737072248798,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.compileSimpleScript",
            "value": 0.11195633290062665,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.ScriptCompileBenchmark.executePreCompiled",
            "value": 0.000024772099944945856,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileParserClass",
            "value": 57.84573372499999,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.codehaus.janino.benchmarks.SelfCompileBenchmark.compileScannerClass",
            "value": 20.973396074999993,
            "unit": "ms/op",
            "extra": "iterations: 20\nforks: 2\nthreads: 1"
          }
        ]
      }
    ]
  }
}