//Question 3: File Module

const fs = require("fs")
const path = require("path")
const process = require("process")
const logPath = path.join(__dirname + "/Logs")

try {
    //check if Logs folder exist
    if (fs.existsSync(logPath)) {
        try {
            //get all the files under Logs directory
            const files = fs.readdirSync(logPath)
            files.map(file => console.log(`delete files...${file}`))
            try {
                //delete Logs folder including all the files under the directory
                fs.rmdirSync(logPath, { recursive: true })
            } catch(e) {
                console.log(`Error while deleting ${logPath}`)
            }
        } catch(e) {
            console.log(e.message)
        }
    } else {
        //create Logs folder
        fs.mkdirSync(logPath)
        try {
            //change current process directory to Logs
            process.chdir(logPath)
            //create 10 files with some content under Logs directory
            for (let i = 0; i < 10; i++) {
                fs.appendFile(`log${i}.txt`, `log${i}.txt created`, (e) => {
                    if (e) {
                      console.log(e.message)
                    }}
                )
                console.log(`log${i}.txt`)
            }
        } catch(e) {
            console.log(e.message)
        }
    }
} catch(e) {
    console.log(e.message)
}