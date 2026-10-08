/* 
Function named lowerCaseWords -> takes a mixed array as input 
- Return a promise that is resolved or rejected 
- filter the non-strings and lower case the remaining words  
*/


function lowerCaseWords(){
    let promise_words = new Promise((resolve, reject) => {
            const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]
            
           const result = mixedArray
           .filter(item => typeof item === "string")
           .map(str => str.toLowerCase());


           resolve(result)

        
    })

    return promise_words

}
lowerCaseWords()
    .then((result) => {
        console.log(result)
    })