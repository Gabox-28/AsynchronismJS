const promise = new Promise(function (resolve, reject){
    resolve('Hey!')
})

const cows = 12

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10){
        resolve(`We have ${cows} cows at the farm`)
    }else{
        reject('There are not cows at the farm')
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('Finally')
})