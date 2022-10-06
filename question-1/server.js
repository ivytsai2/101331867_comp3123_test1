//Question 1: ES6 Features

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            //filter out non-strings and convert to lower case words
            const filterLowerArray = mixedArray.filter(value => typeof(value) === "string")
                                               .map(value => value.toLowerCase())
            if (filterLowerArray.length > 0){
                resolve(filterLowerArray)
            }else {
                resolve("Array has no string values.")
            }
        } catch(e) {
            reject(e)
        }
    })
}

const array = ['PIZZA', 10, true, 25, false, 'Wings']
const array2 = [10, true, 25, false]
lowerCaseWords(array).then(success => console.log(success)).catch(fail => console.log(fail))
lowerCaseWords(array2).then(success => console.log(success)).catch(fail => console.log(fail))