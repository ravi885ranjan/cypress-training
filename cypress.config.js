const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3544gw",
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    specPattern: 'cypress/e2e/*.js'
  },
  env: {
    url: "https://rahulshettyacademy.com/"
  },
  retries: {
    runMode: 1
  }
});
