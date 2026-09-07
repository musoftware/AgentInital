# Security & Secrets Standards

## Core Rule
Never compromise security for speed. All code must be secure by default across every stack, platform, and language.

---

## 1. Secrets Management
- **Zero Hardcoded Credentials**: Never hardcode API keys, private tokens, passwords, or certificates in source code.
- **Externalized Configuration**: Inject secrets exclusively through runtime environment mechanisms, secure key vaults, or platform-native configuration systems. Never commit secret files to version control.
- **No Client-Side Secrets**: Never embed private master keys or sensitive backend credentials into client-distributed applications. Store sensitive local user credentials only in platform-provided encrypted vaults.

---

## 2. Input Sanitization & Injection Defense
- **Boundary Validation**: Validate and sanitize all external data at system boundaries before processing.
- **Safe Query Execution**: Always use parameterized queries, prepared statements, or safe abstraction layers for data access. Never construct queries or shell commands via raw string concatenation with untrusted input.

---

## 3. Presentation & Output Safety
- **Context-Aware Encoding**: Properly encode and escape dynamic content before rendering into user interfaces, templates, or documents.
- **Safe Execution Sinks**: Avoid unsafe execution mechanisms that evaluate untrusted strings as executable code or markup.

---

## 4. Authorization & Access Control
- **Explicit Ownership Checks**: Verify user, tenant, and permission boundaries on the host or server before retrieving or mutating data. Never trust client-supplied identifiers alone.
- **Principle of Least Privilege**: Restrict network permissions, filesystem access, database roles, and third-party scopes strictly to what the component requires.

---

## 5. Cryptography & Data Protection
- **Modern Cryptography**: Use current, adaptive hashing algorithms for credentials and standard authenticated encryption for sensitive data at rest and in transit.
- **Zero Sensitive Data in Logs**: Never write passwords, tokens, decryption keys, or Personally Identifiable Information (PII) to logs, diagnostic streams, or telemetry.
