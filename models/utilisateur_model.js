const db = require("../config/bd");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require("dotenv").config()

async function getUtilisateurs(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Utilisateur"
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function getUtilisateur(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE idUtilisateur = ${db.escape(id)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function deleteUtilisateur(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Utilisateur WHERE idUtilisateur = ${db.escape(id)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        })
    })
}

async function createUtilisateur(nom,prenom,email,mdp,isAdmin){
    return new Promise((resolve, reject) => {
        //cryptage mdp
        bcrypt.genSalt(10, function (err , salt) {
            if(err) reject(err)
            bcrypt.hash(mdp, salt, function (err, hash) {
                if (err) {
                    console.error('Impossible de crypter le mot de passe')
                    reject(err)
                }
                const sql = `INSERT INTO Utilisateur VALUES (NULL, ${db.escape(nom)},${db.escape(prenom)},${db.escape(email)},${db.escape(hash)},${db.escape(isAdmin)})`
                db.query(sql, [], (err, result) => {
                    if (err){
                        console.error(err.message);
                        reject(err)
                    }
                    else{
                        resolve(result);
                    }
                })
            })
        })
    })
}

async function updateUtilisateur(nom,prenom,email,mdp,isAdmin,id){
    return new Promise((resolve, reject) => {
        let sql = ""
        if(mdp == undefined || mdp == null){
            sql = `UPDATE Utilisateur SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, email = ${db.escape(email)}, isAdmin = ${db.escape(isAdmin)} WHERE idUtilisateur= ${db.escape(id)}`
            db.query(sql, [], (err, result) => {
                if (err){
                    console.error(err.message);
                    reject(err)
                }
                else{
                    resolve(result);
                }
            });
        }else{
            bcrypt.genSalt(10, function (err , salt) {
                if(err) reject(err)
                bcrypt.hash(mdp, salt, function (err, hash) {
                    if (err) {
                        console.error('Impossible de crypter le mot de passe')
                        reject(err);
                    }
                    sql = `UPDATE Utilisateur SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, email = ${db.escape(email)}, mdp = ${db.escape(hash)}, isAdmin = ${db.escape(isAdmin)} WHERE idUtilisateur= ${db.escape(id)}`
                    db.query(sql, [], (err, result) => {
                        if (err){
                            console.error(err.message);
                            reject(err)
                        }
                        else{
                            resolve(result);
                        }
                    });
                })
            })
        }
    });
}

async function connexionUtilisateur(email,mdp){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE email = ${db.escape(email)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else if (!result.length) {
                console.error("Utilisateur non trouvé !");
                reject(new Error("Identifiant incorrect !"))
            }
            else{
                // verification du mdp hashé avec compare
                bcrypt.compare(mdp,result[0].mdp,(bErr, bResult) => {
                    if (bErr) {
                        console.error("Erreur lors du cryptage du mot de passe !");
                        reject(bErr)
                    }
                    if (bResult) {
                        //creation token 
                        try{
                            const token = jwt.sign({ idUtilisateur: result[0]['idUtilisateur'], isAdmin: result[0]['isAdmin']}, process.env.SECRET_KEY, {expiresIn: '2 days'})
                            resolve(token);
                        }catch(err){
                            console.error("Erreur lors de la connexion avec le token !");
                            reject(err)
                        }   
                    }else{
                        console.error("Mot de passe incorrect !");
                        reject(new Error('Mot de passe incorrect !'))
                    }
                })
            }
        });
    });
}

module.exports ={
    getUtilisateurs,
    getUtilisateur,
    deleteUtilisateur,
    createUtilisateur,
    updateUtilisateur,
    connexionUtilisateur
}