const db = require("../config/bd");

async function getAttributionsJZ(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT Z.idZone, Z.nom as nomZone, Z.nbBenevoles, J.idJour, J.nom as nomJour, J.ouverture, J.fermeture\
                    FROM AffectationJourZone as A, JourFestival as J, Zone as Z \
                    where A.idZone = Z.idZone AND A.idJour = J.idJour"
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

async function selectAttributionsByZone(idZone){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.idZone, Z.nom as nomZone, Z.nbBenevoles, J.idJour, J.nom as nomJour, J.ouverture, J.fermeture\
                    FROM AffectationJourZone as A, JourFestival as J, Zone as Z \
                    where A.idZone = Z.idZone AND A.idJour = J.idJour\
                    AND A.idZone = ${db.escape(idZone)}`
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
        const sql = `SELECT Z.idZone, Z.nom as nomZone, Z.nbBenevoles, J.idJour, J.nom as nomJour, J.ouverture, J.fermeture\
                    FROM AffectationJourFestival as A, JourFestival as J, Zone as Z \
                    where A.idZone = Z.idZone AND A.idJour = J.idJour\
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

async function deleteAttributionJZ(idJour,idZone){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AffectationJourZone WHERE idZone = ${db.escape(idZone)} AND idJour = ${db.escape(idJour)}`
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

async function createAttributionJZ(idJour,idZone){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AffectationJourZone VALUES (${db.escape(idZone)},${db.escape(idJour)})`
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
    getAttributionsJZ,
    selectAttributionsByZone,
    selectAttributionsByJour,
    deleteAttributionJZ,
    createAttributionJZ,

}