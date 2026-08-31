# SOLID Design Principles

## Core Rule
Write modular, extensible, and maintainable software adhering to the five **SOLID** engineering principles.

---

## 1. Single Responsibility Principle (SRP)
- **Rule**: A class, module, or function should have one, and only one, reason to change.
- **Practice**: Separate database access, business rules, input validation, and presentation into distinct layers. Avoid "God objects" or giant controllers doing everything.

---

## 2. Open-Closed Principle (OCP)
- **Rule**: Software entities should be open for extension, but closed for modification.
- **Practice**: Add new features by extending interfaces or implementing new strategy classes/plugins, rather than modifying existing tested code.

---

## 3. Liskov Substitution Principle (LSP)
- **Rule**: Subtypes must be substitutable for their base types without altering system correctness.
- **Practice**: Do not override methods to do nothing or throw unexpected exceptions. Subclasses must uphold the contracts and expectations of their parent classes or interfaces.

---

## 4. Interface Segregation Principle (ISP)
- **Rule**: Clients should not be forced to depend upon interfaces they do not use.
- **Practice**: Keep interfaces small, focused, and cohesive. Prefer several small, role-specific interfaces over one large general-purpose interface.

---

## 5. Dependency Inversion Principle (DIP)
- **Rule**: High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.
- **Practice**: Inject dependencies (via constructors or dependency injection containers) rather than instantiating concrete classes directly. Depend on interfaces/abstract classes.
