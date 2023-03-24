const attribution_model = require("../models/attributionFZ_model.js")

function beauRendu (item){
    return {
        zone : {
            id : item.idZone,
            nom : item.nomZone
        },
        festival : {
            id : item.idFestival,
            nom : item.nomFestival,
            cloture : item.cloture
        }
    }
}

function selectAttributionsFZ(req, res) {

    promise = attribution_model.getAttributionsFZ()
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des attributions FZ"})
        console.error(error.message)
    })
}

function selectAttributionsByFestival(req, res) {

    const idFestival = req.params.idFestival
    promise = attribution_model.selectAttributionsByFestival(idFestival)
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione FZ par Festival"})
        console.error(error.message)
    })
}
function selectAttributionsByZone(req, res) {

    const idZone = req.params.idZone
    promise = attribution_model.selectAttributionsByZone(idZone)
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione FZ par Zone"})
        console.error(error.message)
    })
}

function selectAttributionsByAll(req, res) {

    const idZone = req.body.idZone
    const idFestival = req.body.idFestival

    promise = attribution_model.getAttributionsByAll(idZone,idFestival)
    promise.then(
        (values) => {
            const result =  values.map(beauRendu)
            res.status(200).send(result)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attributione FZ par tout"})
        console.error(error.message)
    })
}

function deleteAttributionFZ(req, res) {

    const idZone = req.body.idZone
    const idFestival = req.body.idFestival

    promise = attribution_model.deleteAttributionFZ(idZone,idFestival)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une attributione FZ"})
        console.error(error.message)
    })
}

function createAttributionFZ(req, res) {

    const idZone = req.body.idZone
    const idFestival = req.body.idFestival

    promise = attribution_model.createAttributionFZ(idZone,idFestival)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une attributione FZ"})
        console.error(error.message)
    })
}


module.exports = {
    selectAttributionsFZ,
    selectAttributionsByFestival,
    selectAttributionsByZone,
    selectAttributionsByAll,
    deleteAttributionFZ,
    createAttributionFZ,
}