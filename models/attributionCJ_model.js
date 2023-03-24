const db = require("../config/bd");

async function getAttributionsCJ(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT J.idJour, J.nom, J.ouverture, J.fermeture, C.idCreneau, C.heureDebut, C.heureFin \
                    FROM AffectationCreneauJour as A, Creneau as C, JourFestival as J \
                    where A.idJour = J.idJour AND A.idCreneau = C.idCreneau"
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

async function selectAttributionsByJour(idJour){
    return new Promise((resolve, reject) => {
        const sql = `SELECT J.idJour, J.nom, J.ouverture, J.fermeture, C.idCreneau, C.heureDebut, C.heureFin \
                    FROM AffectationCreneauJour as A, Creneau as C, JourFestival as J \
                    where A.idJour = J.idJour AND A.idCreneau = C.idCreneau\
                    AND J.idJour = ${db.escape(idJour)}`
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
async function selectAttributionsByCreneau(idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `SELECT J.idJour, J.nom, J.ouverture, J.fermeture, C.idCreneau, C.heureDebut, C.heureFin \
                    FROM AffectationCreneauJour as A, Creneau as C, JourFestival as J \
                    where A.idJour = J.idJour AND A.idCreneau = C.idCreneau\
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

async function getAttributionsByAll(idCreneau,idJour){
    return new Promise((resolve, reject) => {
        const sql = `SELECT J.idJour, J.nom, J.ouverture, J.fermeture, C.idCreneau, C.heureDebut, C.heureFin \
                    FROM AffectationCreneauJour as A, Creneau as C, JourFestival as J \
                    where A.idJour = J.idJour AND A.idCreneau = C.idCreneau\
                    AND J.idJour = ${db.escape(idJour)} AND C.idCreneau = ${db.escape(idCreneau)}`
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


async function deleteAttributionCJ(idCreneau,idJour){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AffectationCreneauJour WHERE idJour = ${db.escape(idJour)} AND idCreneau = ${db.escape(idCreneau)}`
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

async function createAttributionCJ(idCreneau,idJour){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AffectationCreneauJour VALUES (${db.escape(idJour)},${db.escape(idCreneau)})`
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
    getAttributionsCJ,
    selectAttributionsByJour,
    selectAttributionsByCreneau,
    getAttributionsByAll,
    deleteAttributionCJ,
    createAttributionCJ,

}