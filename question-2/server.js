//Question 2: Promises

function resolvedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            resolve(success)
        }, 500)
    })
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('delayed exception!'))
        }, 500)
    })
}

const promises = [resolvedPromise, rejectedPromise]
async function asyncCall(promises) {
    for (let promise of promises) {
        try {
            let result = await promise()
            console.log(result)
        } catch(e) {
            console.log({error: e.message})
        }
    }
}
asyncCall(promises)