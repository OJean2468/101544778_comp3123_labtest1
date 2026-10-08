const fs = require("fs")
const path = require("path")

/*Thought process
Basically what I did is I created two functions which was CreateLogFile and RemoveLogFile
I had first made sure there was no other log files and I have deleted it first 
Then I created the log files and as soon as it was created I had used another function that deleted them. 
I called both functions in order to provided the sequential output. 
*/


//Building the path 
const logsDir = path.join(process.cwd(), 'Logs');


//Delete all the files from the log directory if it exists. (INITIAL STEP)
 if(fs.existsSync(logsDir)){
        
        fs.rmSync(logsDir, { recursive: true, force: true })

}




//Create File Function 

function CreateLogFile(){

    if(!fs.existsSync(logsDir)){
        fs.mkdirSync(logsDir);
    }

    //Changing the current process to the new Logs directory 
    process.chdir(logsDir)

    for(let i = 0; i< 10; i++){


        const fileName = `logs${i}.txt`
        const fileContent = `Hello this is my output for file number ${i}`


        fs.writeFileSync(fileName, fileContent);

        console.log(fileName);

    }

};


function RemoveLogFile(){

   if (fs.existsSync(logsDir)){
    const files = fs.readdirSync(logsDir);

    files.forEach(file => {
        console.log(`delete files...${file}`)
        fs.unlinkSync(path.join(logsDir, file))
    });

    process.chdir(__dirname)

      //Remove the empty Directory
      fs.rmdirSync(logsDir)



   }

}


CreateLogFile()
RemoveLogFile()