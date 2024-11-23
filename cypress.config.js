const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const browserify = require("@cypress/browserify-preprocessor");

async function setupNodeEvents(on,config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  projectId: "3544gw",
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //setupNodeEvents(on, config) {
      // implement node event listeners here
    //  require('cypress-mochawesome-reporter/plugin')(on)
    //},
    setupNodeEvents,
    //specPattern: 'cypress/e2e/BDD/*.feature'
    specPattern: 'cypress/e2e/*.js'
  },
  env: {
    url: "https://rahulshettyacademy.com/"
  },
  retries: {
    runMode: 1
  }
});
