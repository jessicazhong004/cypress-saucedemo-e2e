# Cypress SauceDemo E2E

![Cypress E2E](https://github.com/jessicazhong004/cypress-saucedemo-e2e/actions/workflows/cypress.yml/badge.svg)

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

* Login smoke test
  * visits `/`
  * logs in with `standard_user`
  * asserts redirect to `/inventory.html`
  * asserts page title contains `Products`

* Locked-out user negative test
  * logs in with `locked_out_user`
  * asserts error banner is visible
  * verifies error message contains the user is `locked out`

* End-to-end purchase flow
  * standard_user logs in
  * adds multiple items to cart using `data-test` selectors
  * verifies cart contents and cart badge count
  * completes checkout form
  * asserts thank-you page text: `Thank you for your order!`