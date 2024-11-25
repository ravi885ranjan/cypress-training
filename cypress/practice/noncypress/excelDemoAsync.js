const ExcelJs = require('exceljs')
async function excelTest() {
    const workBook = new ExcelJs.Workbook()
    //process.argv[0]: node.exe path, 
    //process.argv[1] js file path getting executed, 
    //process.argv[2] first command line argument
    //process.argv[3] second command line argument and so on
    await workBook.xlsx.readFile(process.argv[2])
    const workSheet = workBook.getWorksheet(process.argv[3])
    let output = {row:-1,col:-1}
    let rowN;
    let colN;
    workSheet.eachRow((row,rowNumber)=>
        {
            row.eachCell((cell,colNumber)=>{
                if(cell.value === "Apple"){
                    output.row = rowNumber
                    output.col = colNumber
                }
            })
        })
        const cell = workSheet.getCell(output.row,output.col)
        cell.value = "Iphone"
        await workBook.xlsx.writeFile(process.argv[2])
}

excelTest()