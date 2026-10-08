const resolvePromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        resolve(success)
    }, 500)
});

resolvePromise()
    .then((result) => {
        console.log(result)
    })


const rejectedPromise = () => new Promise((resolve, reject) => {

    setTimeout(() => {
        reject({'error': 'delayed exception!'})
    }, 500);

});

rejectedPromise()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.error(error)
    })
  

