const express = require('express')
const router = express.Router()
const db = require('../db/sleep')

router.get('/:id', (req, res) => {
    db.getSleep(req.params.id)
        .then(sleep => {
            console.log('return sleep')
            res.json(sleep)
        })
    .catch(err => {
        console.error(err)
        res.status(500).json({message: 'Error!'})
    })
})

router.post('/new', (req, res) => {
    const sleep = req.body
    console.log(sleep.sleep)
    console.log(sleep.wake)
    db.addSleep(sleep)
        .then(sleep => {
            return res.json(sleep)
        })
    .catch(err => {
        console.error(err)
        res.status(500).json({message: 'Error!'})
    })    
})

// router.patch('/:id', (req, res) => {
//     const hash = req.params.hash
//     const roadtrip = req.body

//     db.updateRoadtrip(hash, roadtrip)
//         .then(() => {
//             res.json(roadtrip)
//         })

//     .catch(err => {
//         console.error(err)
//         res.status(500).json({message: 'Error!'})
//     })    
// })

// router.delete('/:id', (req, res) => {
//     const id = req.params.id
//     const roadtrip = req.body

//     db.deleteRoadtrip(id, roadtrip)
//         .then(() => {
//             return res.json(roadtrip)
//         })

//     .catch(err => {
//         console.error(err)
//         res.status(500).json({message: 'Error!'})
//     })    
// })

module.exports = router