const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    retries: {
      openMode: 2
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
