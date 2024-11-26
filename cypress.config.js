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
const ExcelJs = require('exceljs')

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
  on('task',{
    //multiple arguments in task should be sent as an array
    async writeExcelTest({searchText,replaceText,change,filepath,sheetName}) {
      const workBook = new ExcelJs.Workbook()
      await workBook.xlsx.readFile(filepath)
      const workSheet = workBook.getWorksheet(sheetName)
      let output = await readExcel(workSheet,searchText)
          const cell = workSheet.getCell(output.row,output.col+change.colChange)
          cell.value = replaceText
          return workBook.xlsx.writeFile(filepath).then(()=>{
            return true
        }).catch((error)=>{
            return false
        })
  }
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

async function readExcel(workSheet,searchText) {
    let output = {row:-1,col:-1}
    workSheet.eachRow((row,rowNumber)=>
        {
            row.eachCell((cell,colNumber)=>{
                if(cell.value === searchText){
                    output.row = rowNumber
                    output.col = colNumber
                }
            })
        })
        return output
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
    //events for OS Node JS engine like fs, db etc
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
