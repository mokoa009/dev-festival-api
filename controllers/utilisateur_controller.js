const utilisateur_model = require("../models/utilisateur_model")

function selectUtilisateurs(req, res) {

    promise = utilisateur_model.getUtilisateurs()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectUtilisateurById(req, res) {
    const id = req.params.id
    promise = utilisateur_model.getUtilisateur(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function deleteUtilisateur(req, res) {

    promise = utilisateur_model.deleteUtilisateur(req.body.idUtilisateur)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function createUtilisateur(req, res) {

    promise = utilisateur_model.createUtilisateur(req.body.nom,req.body.prenom,req.body.email,req.body.mdp,req.body.isAdmin)
    promise.then(
        (values) => {
            res.status(201).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function updateUtilisateurById(req, res) {
    
    promise = utilisateur_model.updateUtilisateur(req.body.nom,req.body.prenom,req.body.email,req.body.mdp,req.body.isAdmin,req.body.idUtilisateur)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })   
}
function connexionUtilisateur(req, res) {

    promise = utilisateur_model.connexionUtilisateur(req.body.email,req.body.mdp)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}

function count(req, res) {

    promise = utilisateur_model.count()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
            console.error(error.message)
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}

module.exports = {
    selectUtilisateurs,
    selectUtilisateurById,
    deleteUtilisateur,
    createUtilisateur,
    updateUtilisateurById,
    connexionUtilisateur,
    count,
}