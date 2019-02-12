function solve(array) {
    let obj = {};

    Array.from(array).forEach((el, index) => {
        if(index%2===0){
            if(obj[el]!==undefined){
                obj[el]+=parseFloat(array[+index+1])
            }else{
                obj[el]=parseFloat(array[+index+1])
            }
        }
    })

    console.log(JSON.stringify(obj))
}