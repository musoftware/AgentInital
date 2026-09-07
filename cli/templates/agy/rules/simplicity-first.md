# Simplicity First & Functional Core

## Core Rule
Simple, boring code is superior to clever, complex code. Prefer clear functions over classes unless stateful encapsulation provides undeniable architectural value.

---

## 1. Functional Clarity Over Heavy OOP
- Not every concept requires an object hierarchy or stateful wrapper.
- Prefer pure functions: identical inputs produce identical outputs with zero hidden side effects.

---

## 2. Flat Execution Over Deep Trees
- Actively avoid nested conditional branching and nested exception-handling blocks.
- Leverage early guard returns, single-purpose helpers, and declarative pattern matching.

---

## 3. Composition Over Inheritance
- Construct complex behavior by composing small, focused functions and interfaces rather than building deep inheritance hierarchies.

---

## 4. Strict Isolation of Side Effects
- Keep file system I/O, database interactions, and network operations isolated at system boundaries.
- Keep core business logic purely functional and isolated from external dependencies for effortless testing and reliability.

---

## 5. Readability Over Premature Optimization
- Write straightforward, obvious code that reads like structured prose.
- Optimize only after benchmarking and profiling identify genuine bottlenecks, never by compromising code readability upfront.
