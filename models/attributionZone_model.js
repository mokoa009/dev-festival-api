const db = require("../config/bd");

async function getAttributionsZone(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT Z.idZone,Z.nom as nomZone, U.idUtilisateur, U.nom, U.prenom, C.idCreneau, C.heureDebut, C.heureFin \
                    FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
                    where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau"
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getAttributionZone(idZone,idUtilisateur,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.heureDebut, C.heureFin \
        FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND Z.idZone = ${db.escape(idZone)} AND U.idUtilisateur = ${db.escape(idUtilisateur)} AND C.idCreneau = ${db.escape(idCreneau)}`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getAttributionZoneByZone(idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.idZone, Z.nom as nomZone, U.idUtilisateur, U.nom, U.prenom, C.idCreneau, C.heureDebut, C.heureFin \
        FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND Z.idZone = ${db.escape(idZone)}`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getAttributionsByZoneAndCreneau(idZone,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `SELECT A.idUtilisateur, U.nom as nomUtilisateur, U.prenom, U.email, Z.nom as nomZone, C.heureDebut, C.heureFin \
        FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND Z.idZone = ${db.escape(idZone)} AND C.idCreneau = ${db.escape(idCreneau)}`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getAttributionZoneByCreneau(idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.heureDebut, C.heureFin \
        FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND C.idCreneau = ${db.escape(idCreneau)}`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getAttributionZoneByBenevole(idUtilisateur){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.heureDebut, C.heureFin \
        FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND U.idUtilisateur = ${db.escape(idUtilisateur)}`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getAttributionZoneByAll(idCreneau,idUtilisateur,idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.heureDebut, C.heureFin \
        FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND U.idUtilisateur = ${db.escape(idUtilisateur)} AND C.idCreneau = ${db.escape(idCreneau)} AND Z.idZone = ${db.escape(idZone)}`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}

async function getCreneauNonSelectByZoneAndBenevole(idUtilisateur,idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * From Creneau WHERE idCreneau NOT IN \
        (SELECT C.idCreneau\
        FROM AffectationBenevoleCreneau as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND U.idUtilisateur = ${db.escape(idUtilisateur)} AND Z.idZone = ${db.escape(idZone)})`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}

async function getBenevoleNonSelectByZoneAndCreneau(idCreneau,idZone,idJour){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE idUtilisateur NOT IN (SELECT idUtilisateur FROM AffectationBenevoleCreneau where idCreneau = ${db.escape(idCreneau)} AND idZone = ${db.escape(idZone)} AND idJour = ${db.escape(idJour)});`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}




async function deleteAttributionZone(idZone,idUtilisateur,idCreneau,idJour){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AffectationBenevoleCreneau WHERE idZone = ${db.escape(idZone)}  AND idUtilisateur = ${db.escape(idUtilisateur)} AND idCreneau = ${db.escape(idCreneau)}, AND idJour = ${db.escape(idJour)};`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function createAttributionZone(idUtilisateur,idZone,idCreneau,idJour){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AffectationBenevoleCreneau VALUES (${db.escape(idUtilisateur)},${db.escape(idZone)},${db.escape(idCreneau)},${db.escape(idJour)});`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
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
    getAttributionsByZoneAndCreneau,
    getBenevoleNonSelectByZoneAndCreneau
}