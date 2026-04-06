# Contributing to Janino

Thank you for your interest in contributing to Janino!

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/my-feature`
4. Make your changes
5. Build and test: `cd janino-parent && ./mvnw clean verify`
6. Commit your changes with a descriptive message
7. Push to your fork and submit a pull request

## Building

```bash
cd janino-parent
./mvnw clean install
```

## Running Tests

```bash
cd janino-parent
./mvnw clean verify
```

## Code Style

- Follow existing code conventions in the project
- Use 4-space indentation
- No tabs in Java files
- Maximum line length: 120 characters

## Reporting Bugs

Please use the [bug report template](https://github.com/janino-compiler/janino/issues/new?template=bug_report.md) and include:

- A minimal code example that reproduces the issue
- Janino version, JDK version, and OS
- Expected vs actual behavior
- Full stack trace (if applicable)

## License

By contributing, you agree that your contributions will be licensed under the [BSD 3-Clause License](https://spdx.org/licenses/BSD-3-Clause.html).
