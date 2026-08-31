# Pragmatic Real Testing & Anti-Over-Mocking

## Core Rule
Prioritize tests against **real implementations**, actual database engines (e.g. SQLite / Testcontainers / local services), real network contracts, and true integration flows. Eliminate fragile, excessive mocking.

---

## Why Avoid Heavy Mocking?
- **Mocks test implementation details, not actual behavior**: When internal code is refactored, mock tests often break even though the feature works perfectly.
- **False confidence**: Mocks can easily pass when third-party APIs or database drivers have changed or failed in production.
- **Maintenance burden**: Writing and maintaining hundreds of lines of fake mock setup code wastes time and adds zero safety.

---

## Testing Guidelines

1. **Test Real Behavior**
   - Write tests from the user's or client's perspective (black-box or integration testing).
   - Test inputs, outputs, database mutations, and HTTP responses directly.

2. **Use In-Memory or Ephemeral Real Resources**
   - Use in-memory SQLite / test databases / isolated test schemas instead of mocking ORM calls.
   - Use real HTTP servers spinning up on random ports for API tests.

3. **When Mocking Is Strictly Permitted**
   - Only mock external 3rd-party services with monetary costs or rate limits (e.g. Stripe charges, SMS sending, 3rd-party OAuth, external LLM API calls).
   - Use fake servers or recorded fixtures (like MSW, wiremock, or VCR) rather than mocking deep internal code functions.

4. **Verify The Contract**
   - If a mock or fake must be used for an external provider, validate the fake's schema against the provider's real OpenAPI / JSON Schema definition.
