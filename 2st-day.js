import fs from 'fs'
let input = [1,2,4,5];
let objectInput = {
    0:1,
    1:2,
    2:4,
    3:5
}
function getMissingNumber(array){
    let type = typeof array
    if(Array.isArray(array) && type === 'object'){
    console.log('It is Array.')
    return;
    }
    fs.writeFile('last-type.txt',`It is ${type.charAt(0).toUpperCase() + type.slice(1)}`,{},()=>{
        console.log('done')
    })
}
(getMissingNumber(1))
