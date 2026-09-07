# Data & Contract Standards

## Core Rule
Data persistence schemas and communication contracts are durable system promises. Keep storage models atomic, schemas safely versioned, and boundaries strictly typed across all applications.

---

## 1. Data Persistence & Storage Integrity
- **Atomic Modifications**: Perform state, file, and database updates atomically. Ensure multi-step changes either commit completely or roll back cleanly without leaving corrupted or partial states.
- **Controlled Schema Evolution**: Never introduce breaking changes to persistent data structures or storage formats without explicit versioning or migration mechanisms.
- **Optimized Access**: Ensure indexes and query paths support expected access patterns and performance constraints.
- **Model Decoupling**: Keep storage models and raw persistence layers decoupled from business logic and presentation state.

---

## 2. Communication & Contract Boundaries
- **Typed Deserialization**: Parse incoming external data into strongly-typed models or data transfer structures at system boundaries. Avoid passing untyped raw dictionaries or maps through internal logic.
- **Predictable Envelopes**: When exposing services or structured interfaces, return consistent data structures that clearly separate payload, error details, and metadata.
- **Explicit Outcome Statuses**: Use unambiguous, standard status indicators or codes that accurately reflect operational success or failure. Never mask errors behind successful response codes.
- **Resilient Boundary Handling**: Handle unexpected disconnects, timeouts, and state invalidations defensively. Apply bounded retries with backoff only to idempotent operations.
