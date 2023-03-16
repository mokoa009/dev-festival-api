const attributionJeu_model = require("../models/attributionJeu_model")

function selectAttributions(req, res) {

    promise = attributionJeu_model.getAttributionsJeux()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectJeuByZone(req, res) {
    
    const id = req.params.id
    promise = attributionJeu_model.getJeuByIdZone(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectJeuNonSelectByZone(req, res) {
    
    const id = req.params.id
    promise = attributionJeu_model.getJeuNonSelectByIdZone(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectAttributionByZoneJeu(req, res) {

    promise = attributionJeu_model.getAttributionByZoneJeu(req.body.idZone,req.body.idJeu)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}

function selectZoneByJeu(req, res) {

    const id = req.params.id
    promise = attributionJeu_model.getZoneByIdJeu(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function deleteAttribution(req, res) {

    promise = attributionJeu_model.deleteAttributionJeu(req.body.idZone,req.body.idJeu)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function createAttribution(req, res) {

    promise = attributionJeu_model.createAttributionJeu(req.body.idZone,req.body.idJeu)
    promise.then(
        (values) => {
            res.status(201).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectAllInformations(req, res) {

    promise = attributionJeu_model.createAttributionJeu(req.body.idJeu)
    promise.then(
        (values) => {
            res.status(201).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}

module.exports = {
    selectAttributions,
    selectJeuByZone,
    selectZoneByJeu,
    selectAttributionByZoneJeu,
    selectJeuNonSelectByZone,
    deleteAttribution,
    createAttribution,
    selectAllInformations
}