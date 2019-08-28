import request from 'superagent'

const apiURL = '/api/sleep/'

export function getSleepApi(id) {
    return request
        .get(apiURL + id)
        .then(res => res.body)
        .catch((err) => {throw err})
}

// export function updateRoadtripApi(hash, data) {
//     return request
//         .patch(apiURL + hash)
//         .send(data)
//         .then(res => res.body)
//         .catch((err) => {throw err})
// }

// export function addRoadtripApi(roadtrip) {
//     return request
//         .post(apiURL + 'newroadtrip/')
//         .send(roadtrip)
//         .then(res => res.body)
//         .catch((err) => {throw err})
// }


// export function updateDestinationApi(hash, data) {
//     return request
//         .patch(apiURL + 'dests/' + hash)
//         .send(data)
//         .then(res => res.body)
//         .catch((err) => {throw err})
// }