const ExcelJs = require('exceljs')
let output = {row:-1,col:-1}
async function excelTest() {
    const workBook = new ExcelJs.Workbook()
    //process.argv[0]: node.exe path, 
    //process.argv[1] js file path getting executed, 
    //process.argv[2] first command line argument (filepath)
    //process.argv[3] second command line argument and so on (worksheet name)
    //process.argv[4] second command line argument and so on (worksheet name)
    //process.argv[5] second command line argument and so on (worksheet name)
    await workBook.xlsx.readFile(process.argv[2])
    const workSheet = workBook.getWorksheet(process.argv[3])
    await readExcel(workSheet,process.argv[4])
        const cell = workSheet.getCell(output.row,output.col)
        cell.value = process.argv[5]
        await workBook.xlsx.writeFile(process.argv[2])
}

async function readExcel(workSheet,searchText) {
    workSheet.eachRow((row,rowNumber)=>
        {
            row.eachCell((cell,colNumber)=>{
                if(cell.value === searchText){
                    output.row = rowNumber
                    output.col = colNumber
                }
            })
        })
}

excelTest()