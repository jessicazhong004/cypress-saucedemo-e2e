# Cypress SauceDemo E2E

Minimal Cypress E2E demo against SauceDemo.

## Tech
- Cypress (E2E)
- Uses stable selectors via `data-test`
- Runs headless for CI-style execution

## Run locally
```bash
npm install
npm test
```
**What it covers**
* Login smoke test:

  * visits /

  * logs in with standard_user

  * asserts redirect to /inventory.html

  * asserts page title contains Products
