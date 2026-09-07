# Observability & Diagnostic Standards

## Core Rule
System behavior, operational state, and failures must be verifiable through clear diagnostic output appropriate to the execution environment.

---

## 1. Diagnostic Logging
- **Structured Diagnostics**: Use structured or platform-standard logging facilities rather than arbitrary unformatted print statements.
- **Contextual Metadata**: Attach meaningful context (such as operation identifiers, correlation IDs, timestamps, and error codes) to diagnostic events.
- **Log Level Discipline**: Consistently differentiate between severity levels:
  - Critical failures and unhandled exceptions (`error`).
  - Recoverable issues, retries, and deprecations (`warn`).
  - High-level lifecycle milestones (`info`).
  - Detailed diagnostic traces for development (`debug`).

---

## 2. Failure Transparency & Monitoring
- **No Silent Failures**: Never allow asynchronous tasks, background routines, or critical processes to fail silently without recording the failure and its cause.
- **Health & State Inspection**: Expose clear inspection points (such as health probes, status checks, or diagnostic interfaces) to verify component availability and responsiveness.
- **Clean Output Streams**: In tools with standard text streams, separate regular program output from error diagnostics, and always terminate with meaningful exit codes.
