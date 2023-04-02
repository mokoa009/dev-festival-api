const attribution_model = require("../models/attributionZone_model")

function beauRendu (item){
    return {
        zone : {
            id : item.idZone,
            nom : item.nomZone
        },
        benevole : {
            id : item.idUtilisateur, 
            nom : item.nom, 
            prenom : item.prenom
        },
        creneau : {
            id: item.idCreneau,
            heureDebut : item.heureDebut, 
            heureFin : item.heureFin
        }
    }
}

function selectAttributionsZone(req, res) {

    promise = attribution_model.getAttributionsZone()
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
        res.status(500).send({msg: "Problème sélection des attributions Zone"})
        console.error(error.message)
    })
}

function selectAttributionZoneById(req, res) {

    const idZone = req.params.idZone
    const idUtilisateur = req.params.idUtilisateur
    const idCreneau = req.params.idCreneau
    promise = attribution_model.getAttributionZone(idZone,idUtilisateur,idCreneau)
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
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par ids"})
        console.error(error.message)
    })
}

function selectAttributionsByBenevole(req, res) {

    const idUtilisateur = req.params.idUtilisateur
    promise = attribution_model.getAttributionZoneByBenevole(idUtilisateur)
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
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par Benevole"})
        console.error(error.message)
    })
}

function selectAttributionsByZone(req, res) {

    const idZone = req.params.idZone
    promise = attribution_model.getAttributionZoneByZone(idZone)
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
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par Zone"})
        console.error(error.message)
    })
}
function selectAttributionsByCreneau(req, res) {

    const idCreneau = req.params.idCreneau
    promise = attribution_model.getAttributionZone(idCreneau)
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
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par Creneau"})
        console.error(error.message)
    })
}
function selectAttributionsByZoneAndCreneau(req, res) {

    const idZone = req.params.idZone
    const idCreneau = req.params.idCreneau
    const idJour = req.params.idJour

    promise = attribution_model.getAttributionsByZoneAndCreneau(idZone,idCreneau,idJour)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par creneau"})
        console.error(error.message)
    })
}
function selectAttributionsByAll(req, res) {

    const idCreneau = req.body.idCreneau
    const idUtilisateur = req.body.idUtilisateur
    const idZone = req.body.idZone

    promise = attribution_model.getAttributionZoneByAll(idCreneau,idUtilisateur,idZone)
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
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par tout"})
        console.error(error.message)
    })
}

function selectCreneauNonSelectByZoneAndBenevole(req, res) {

    const idUtilisateur = req.params.idBene
    const idZone = req.params.idZone

    promise = attribution_model.getCreneauNonSelectByZoneAndBenevole(idUtilisateur,idZone)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par Benevole et Zone"})
        console.error(error.message)
    })
}
function selectBenevoleNonSelectByZoneAndCreneau(req, res) {

    const idCreneau = req.params.idCreneau
    const idZone = req.params.idZone
    const idJour = req.params.idJour

    promise = attribution_model.getBenevoleNonSelectByZoneAndCreneau(idCreneau,idZone,idJour)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection d'une attribution Zone par Benevole et Zone"})
        console.error(error.message)
    })
}

function deleteAttributionZoneFromCreneau(req, res) {

    promise = attribution_model.deleteAttributionZone(req.body.idCreneau,req.body.idZone,req.body.idJour)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une attribution Zone"})
        console.error(error.message)
    })
}

function deleteAttributionZone(req, res) {

    promise = attribution_model.deleteAttributionZone(req.body.idUtilisateur,req.body.idZone,req.body.idCreneau,req.body.idJour)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression d'une attribution Zone"})
        console.error(error.message)
    })
}

function createAttributionZone(req, res) {

    promise = attribution_model.createAttributionZone(req.body.idUtilisateur,req.body.idZone,req.body.idCreneau,req.body.idJour)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création d'une attribution Zone"})
        console.error(error.message)
    })
}


module.exports = {
    selectAttributionsZone,
    selectAttributionZoneById,
    selectAttributionsByBenevole,
    selectAttributionsByZone,
    selectAttributionsByCreneau,
    selectAttributionsByAll,
    selectCreneauNonSelectByZoneAndBenevole,
    deleteAttributionZone,
    createAttributionZone,
    selectAttributionsByZoneAndCreneau,
    selectBenevoleNonSelectByZoneAndCreneau,
    deleteAttributionZoneFromCreneau
}