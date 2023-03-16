const jwt = require('jsonwebtoken');

module.exports = {
 
  //verification du format du mdp & pseudo
  verifLogin: (req, res, next) => { 
    // pseudo > 3 caractères
    if (!req.body.email || req.body.email.length < 3) {
      return res.status(400).send({msg: 'Entrez un pseudo avec au moins 3 caractères'})
    }
    /*
    // mdp > 6 caractères
    if (!req.body.mdp || req.body.mdp.length < 6) {
      return res.status(400).send({msg: 'Entrez un mot de passe avec au moins 6 caractères'})
    }*/
    /*
    // mdp = mdp de vérification
    if (!req.body.mdpC || req.body.mdp != req.body.mdpC) {
      return res.status(400).send({msg: 'Les mots de passe ne correspondent pas'})
    }*/
    next()
  },
  //verification utilisateur connecté
  verifConnecte: (req, res, next) => {
    try {
      const token = req.headers.autorization.split(' ')[1]
      if (!token && token[0] == 'Bearer') {
        return res.status(400).send({msg: 'Token invalide !'})
      }
      const decoded = jwt.verify(token,process.env.SECRET_KEY)
      req.token = decoded
      next()
    } catch (err) {
      return res.status(400).send({msg: 'Session invalide !'})
    }
  },
  //verification idUtilisateur connecté = idUtilisateur de la requête
  verifMemeId: (req, res, next) => {
    try {
      const token = req.headers.autorization.split(' ')[1]

      if (!token && token[0] == 'Bearer') {
        return res.status(400).send({msg: 'Token invalide !'})
      }
      const decoded = jwt.verify(token,process.env.SECRET_KEY)
      req.token = decoded

      //configuration idSelectionne en fonction d'un GET ou POST
      let idSelectionne = 0
      if(req.params.id == null){
        idSelectionne = req.body.idUtilisateur
      }
      else{
        idSelectionne = req.params.id
      }

      if(req.token.isAdmin == 1 || req.token.idUtilisateur == idSelectionne){
        next()
      }else{
        console.log("Vous n'avez pas les droits pour modifier cet utilisateur !")
        return res.status(403).send({msg: 'Vous n\'avez pas les droits pour modifier cet utilisateur !'})
      }
    } catch (err) {
      return res.status(400).send({msg: 'Session invalide !'})
    }
  },
  // verification utilisateur admin 
  verifAdmin: (req, res, next) => {
    try {
      const token = req.headers.autorization.split(' ')[1]
      if (!token && token[0] == 'Bearer') {
        return res.status(400).send({msg: 'Token invalide !'})
      }
      const decoded = jwt.verify(token,process.env.SECRET_KEY)
      req.token = decoded
      if(req.token.isAdmin == 1){
        next()
      }else{
        console.log("Vous n'avez pas les droits administrateurs !")
        return res.status(403).send({msg: 'Vous n\'avez pas les droits administrateurs !'})
      }
    } catch (err) {
      console.error(err)
      return res.status(400).send({msg: 'Session invalide !'})
    }
  }
}