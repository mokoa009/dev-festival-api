const db = require("../config/bd");

async function getJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Jeu"
        db.query(sql, [], (err, result) => {
            if (err){
                //console.log("EROROOROO")
               // console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function getJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Jeu WHERE idJeu = ${db.escape(id)}`
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
async function deleteJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Jeu WHERE idJeu = ${db.escape(id)}`
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

async function createJeu(idType,nom){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Jeu VALUES (NULL, ${db.escape(idType)},${db.escape(nom)})`
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

async function updateJeu(idType,nom,id){
    return new Promise((resolve, reject) => {
        sql = `UPDATE Jeu SET idType = ${db.escape(idType)}, nom = ${db.escape(nom)} WHERE idJeu = ${db.escape(id)}`
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
async function getAllInformationsJeu(id){
    return new Promise((resolve, reject) => {
        sql = `SELECT Jeu.idJeu, Jeu.idType, Jeu.nom AS nomJeu, AttributionJeu.idZone, TypeJeu.nom AS nomType FROM awi_festival.Jeu INNER JOIN awi_festival.AttributionJeu ON Jeu.idJeu = AttributionJeu.idJeu INNER JOIN awi_festival.TypeJeu ON TypeJeu.idType = Jeu.idType WHERE Jeu.idJeu = ${db.escape(id)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
                console.log("RESULT")
                console.log(result)
            }
        })
     
    })
}

module.exports ={
    getJeux,
    getJeu,
    deleteJeu,
    createJeu,
    updateJeu,
    getAllInformationsJeu
}