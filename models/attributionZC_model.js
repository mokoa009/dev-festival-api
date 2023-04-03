const db = require("../config/bd");

async function selectAttributionsByZone(idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT C.idCreneau, C.heureDebut, C.heureFin, Z.idZone, Z.nom as nomZone, Z.nbBenevoles\
                    FROM AffectationZoneCreneaux as A, Zone as Z, Creneau as C \
                    where A.idCreneau = C.idCreneau AND A.idZone = Z.idZone\
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


async function deleteAttributionZC(idZone,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AffectationZoneCreneaux WHERE idCreneau = ${db.escape(idCreneau)} AND idZone = ${db.escape(idZone)}`
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

async function createAttributionZC(idZone,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AffectationZoneCreneaux VALUES (${db.escape(idCreneau)},${db.escape(idZone)})`
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

async function getCountBenevoles(idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `Select T.nbBenevoles from \
                        (SELECT C.idCreneau, Z.nbBenevoles \
                        FROM AffectationZoneCreneaux as A, Zone as Z, Creneau as C \
                        where A.idCreneau = C.idCreneau AND A.idZone = Z.idZone \
                        Group by C.idCreneau, Z.nbBenevoles) as T \
                    WHERE T.idCreneau = ${db.escape(idCreneau)};`
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
    selectAttributionsByZone,
    deleteAttributionZC,
    createAttributionZC,
    getCountBenevoles
}