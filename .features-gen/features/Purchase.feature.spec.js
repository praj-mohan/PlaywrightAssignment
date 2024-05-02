/** Generated from: features/Purchase.feature */
import { test } from "../../steps/fixtures.ts";

test.describe("Purchase", () => {

  test("Navigating Website", async ({ Given, page }) => {
    await Given("I am on Swag Labs homepage", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features/Purchase.feature"),
});

const testMetaMap = {
  "Navigating Website": {"pickleLocation":"2:5"},
};