# SpotBugs Findings

> Generated from `mvn -Pquality verify` with SpotBugs 4.8.6.6 (effort=Max, threshold=Medium).
> Last updated: 2026-04-07

## Overview

| Priority | Count | Status |
|----------|-------|--------|
| 1 (High) | 17 | Triaged below |
| 2 (Medium) | 361 | Mostly false positives for a compiler project (see [Priority 2 Notes](#priority-2-notes)) |
| **Total** | **378** | |

---

## Priority 1 — Triaged

### DM_DEFAULT_ENCODING (14 instances)

Code relies on the JVM's platform-default charset instead of specifying one explicitly.
This can cause inconsistent behavior across different OS locales.

**Core API (9 — higher priority):**

| File | Line | Pattern | Risk |
|------|------|---------|------|
| `Cookable.java` | 64 | `new InputStreamReader(InputStream)` | Medium |
| `Cookable.java` | 70 | `new InputStreamReader(InputStream)` | Medium |
| `Cookable.java` | 98 | `new InputStreamReader(InputStream)` | Medium |
| `MultiCookable.java` | 69 | `new InputStreamReader(InputStream)` | Medium |
| `Scanner.java` | 131 | `new InputStreamReader(InputStream)` | Medium |
| `Scanner.java` | 153 | `new InputStreamReader(InputStream)` | Medium |
| `Scanner.java` | 216 | `new FileWriter(File)` | Medium |
| `MapResourceFinder.java` | 81 | `String.getBytes()` | Low |
| `StringResource.java` | 42 | `String.getBytes()` | Low |

**Samples & tools (5 — lower priority):**

| File | Line | Pattern | Risk |
|------|------|---------|------|
| `ClassBodyDemo.java` | 100 | `new FileReader(String)` | Low |
| `Unparser.java` | 1283 | `new OutputStreamWriter(OutputStream)` | Low |
| `Unparser.java` | 1287 | `new FileReader(String)` | Low |
| `DeclarationCounter.java` | 50 | `new FileReader(String)` | Low |
| `HprofScrubber.java` | 83 | `new FileReader(String)` | Low |

**Suggested fix:**
- Core API: default to `StandardCharsets.UTF_8`, add overloaded methods with `Charset` parameter
- Samples/tools: simply add `StandardCharsets.UTF_8`
- Project targets Java 8, so `new FileReader(file, charset)` (Java 11) is unavailable — use `new InputStreamReader(new FileInputStream(file), charset)`
- Changing default encoding for `Cookable.cook(InputStream)` and `Scanner(InputStream)` is a **behavioral change** — consider deprecating old signatures

### INT_BAD_COMPARISON_WITH_NONNEGATIVE_VALUE (2 instances) — False positive

| File | Line | Description |
|------|------|-------------|
| `UnitCompiler.java` | 11555 | `char` value compared with `Byte.MIN_VALUE` (-128) |
| `UnitCompiler.java` | 11567 | `char` value compared with `Short.MIN_VALUE` (-32768) |

**Analysis:** `char` is unsigned (0-65535), so `x >= MIN_VALUE` is always true.
However, the comparisons are intentional — they keep the code symmetric with `Short`/`Integer` branches in `constantAssignmentConversion()`. Removing them would break the pattern without any functional benefit.

**Action:** Suppress — no fix needed.

### RCN_REDUNDANT_NULLCHECK_OF_NONNULL_VALUE (1 instance) — False positive

| File | Line | Description |
|------|------|-------------|
| `UnitCompiler.java` | 6582 | `assert l != null` after `if (l == null) break` |

**Analysis:** The `assert` is dead code after the null-check break. It was likely written as a semantic safeguard for a different invariant ("trailing triple-quote missing"). Harmless.

**Action:** Suppress — no fix needed.

---

## Priority 2 Notes

361 medium-priority findings, mostly expected patterns for a compiler project:

| Type | Count | Notes |
|------|-------|-------|
| `ES_COMPARING_STRINGS_WITH_EQ` | 94 | Intentional — compiler uses interned strings for performance |
| `EI_EXPOSE_REP` / `EI_EXPOSE_REP2` | 99 | Intentional — AST nodes expose arrays for performance; defensive copies would hurt hot paths |
| `CT_CONSTRUCTOR_THROW` | 53 | Inherent to evaluator/compiler constructors that parse on init |
| `PA_PUBLIC_PRIMITIVE_ATTRIBUTE` | 52 | Intentional — AST node fields are public by design |
| `NP_METHOD_PARAMETER_TIGHTENS_ANNOTATION` | 27 | Annotation mismatch with parent interface |
| Others | 36 | Miscellaneous style/performance suggestions |

These are not planned for remediation. Most would require fundamental API redesign with no practical benefit.
