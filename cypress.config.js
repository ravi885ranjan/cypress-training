const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const browserify = require("@cypress/browserify-preprocessor");

const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on,config) {
  config.db = {
    userName: "rsa",
    password: "Demo@123",
    server: "trainingdbserver1.database.windows.net",
    options: {
      database: "trainingsql",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
}
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  on('task',{
    excelToJsonTask(filepath){
      const result = excelToJson({
        source: fs.readFileSync(filepath) // fs.readFileSync return a Buffer
    });
    return result
    }
  })

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
