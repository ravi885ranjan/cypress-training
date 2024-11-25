const ExcelJs = require('exceljs')
const workBook = new ExcelJs.Workbook()
workBook.xlsx.readFile("C:\\Users\\ravi8\\cypress-training\\cypress\\downloads\\download.xlsx").then(function(){
    const workSheet = workBook.getWorksheet("Sheet1")
    workSheet.eachRow((row,rowNumber)=>
        {
            row.eachCell((cell,colNumber)=>{
                console.log(cell.value);
            })
        })
        })