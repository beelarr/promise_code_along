let greetingPromise = () => {
    new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('World')
        }, 3000);
    })
        .then((resolve) => {
        console.log(resolve)
        })
};

greetingPromise();
console.log('Hello');


let colorPromise = Legos.loadLegos()
    .then((resolve) => {

        },
        (reject) =>{
            console.error(reject)
        })