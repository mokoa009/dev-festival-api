const db = require("../config/bd");

async function getAttributionsZone(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT Z.idZone,Z.nom as nomZone, U.idUtilisateur, U.nom, U.prenom, C.idCreneau, C.dateDebut, C.dateFin \
                    FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
                    where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau"
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
async function getAttributionZone(idZone,idUtilisateur,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.dateDebut, C.dateFin \
        FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND Z.idZone = ${db.escape(idZone)} AND U.idUtilisateur = ${db.escape(idUtilisateur)} AND C.idCreneau = ${db.escape(idCreneau)}`
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
async function getAttributionZoneByZone(idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.idZone, Z.nom as nomZone, U.idUtilisateur, U.nom, U.prenom, C.idCreneau, C.dateDebut, C.dateFin \
        FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND Z.idZone = ${db.escape(idZone)}`
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
async function getAttributionZoneByCreneau(idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.dateDebut, C.dateFin \
        FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND C.idCreneau = ${db.escape(idCreneau)}`
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
async function getAttributionZoneByBenevole(idUtilisateur){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.dateDebut, C.dateFin \
        FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND U.idUtilisateur = ${db.escape(idUtilisateur)}`
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
async function getAttributionZoneByAll(idCreneau,idUtilisateur,idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.dateDebut, C.dateFin \
        FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND U.idUtilisateur = ${db.escape(idUtilisateur)} AND C.idCreneau = ${db.escape(idCreneau)} AND Z.idZone = ${db.escape(idZone)}`
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

async function getCreneauNonSelectByZoneAndBenevole(idUtilisateur,idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * From Creneau WHERE idCreneau NOT IN \
        (SELECT C.idCreneau\
        FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND U.idUtilisateur = ${db.escape(idUtilisateur)} AND Z.idZone = ${db.escape(idZone)})`
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



async function deleteAttributionZone(idZone,idUtilisateur,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM attributionZone WHERE idZone = ${db.escape(idZone)} AND idUtilisateur = ${db.escape(idUtilisateur)} AND idCreneau = ${db.escape(idCreneau)}`
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
async function createAttributionZone(idZone,idUtilisateur,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO attributionZone VALUES (${db.escape(idZone)},${db.escape(idUtilisateur)},${db.escape(idCreneau)})`
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

module.exports ={
    getAttributionsZone,
    getAttributionZone,
    getAttributionZoneByZone,
    getAttributionZoneByCreneau,
    getAttributionZoneByBenevole,
    getAttributionZoneByAll,
    getCreneauNonSelectByZoneAndBenevole,
    deleteAttributionZone,
    createAttributionZone,
}