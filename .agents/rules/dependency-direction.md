# Dependency Direction & Testability

## Core Rule
High-level domain logic must never depend directly on low-level infrastructure details. Direct dependencies outward toward abstractions, not inward toward concrete drivers.

---

## 1. Explicit Dependency Injection
- Never instantiate concrete database clients, external HTTP callers, or hardware services directly inside core domain logic.
- Inject dependencies through constructors or initialization parameters as interfaces, protocols, or abstract boundaries.
- Decoupling infrastructure allows testing with clean in-memory fakes and test drivers without brittle mock frameworks.

---

## 2. Law of Demeter (Single Dot Principle)
- Avoid chaining property and method traversals across deep object hierarchies.
- Each component should communicate only with its immediate collaborators, not with the internal sub-components of its collaborators.

---

## 3. Ports and Adapters (Hexagonal Boundaries)
- The core business model must only depend on abstract domain interfaces (Ports).
- External technologies (databases, message queues, payment providers, third-party APIs) serve as external implementations (Adapters) that plug into those ports.
- Swapping an underlying database engine or external vendor must require zero changes to core business rules.
