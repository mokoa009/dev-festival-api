const db = require("../config/bd");

async function getAttributionsFZ(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT F.idFestival, F.nom as nomFestival, F.cloture, J.idJour, J.nom as nomJour, J.ouverture, J.fermeture\
                    FROM AffectationJourFestival as A, JourFestival as J, Festival as F \
                    where A.idFestival = F.idFestival AND A.idJour = J.idJour"
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

async function selectAttributionsByFestival(idFestival){
    console.log("idFestival",idFestival)
    return new Promise((resolve, reject) => {
        const sql = `SELECT F.idFestival, F.nom as nomFestival, F.cloture, J.idJour, J.nom as nomJour, J.ouverture, J.fermeture\
                    FROM AffectationJourFestival as A, JourFestival as J, Festival as F \
                    where A.idFestival = F.idFestival AND A.idJour = J.idJour\
                    AND F.idFestival = ${db.escape(idFestival)}`
        try { 
            db.query(sql, [], (err, result) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    console.log("result",result)
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
        const sql = `SELECT F.idFestival, F.nom as nomFestival, F.cloture, J.idJour, J.nom as nomJour, J.ouverture, J.fermeture\
                    FROM AffectationJourFestival as A, JourFestival as J, Festival as F \
                    where A.idFestival = F.idFestival AND A.idJour = J.idJour\
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

async function getAttributionsByAll(idJour,idFestival){
    return new Promise((resolve, reject) => {
        const sql = `SELECT F.idFestival, F.nom as nomFestival, F.cloture, J.idJour, J.nom as nomJour, J.ouverture, J.fermeture\
                    FROM AffectationJourFestival as A, JourFestival as J, Festival as F \
                    where A.idFestival = F.idFestival AND A.idJour = J.idJour\
                    AND F.idFestival = ${db.escape(idFestival)} AND J.idJour = ${db.escape(idJour)}`
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


async function deleteAttributionFZ(idJour,idFestival){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AffectationJourFestival WHERE idFestival = ${db.escape(idFestival)} AND idJour = ${db.escape(idJour)}`
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

async function createAttributionFZ(idJour,idFestival){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AffectationJourFestival VALUES (${db.escape(idFestival)},${db.escape(idJour)})`
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
    getAttributionsFZ,
    selectAttributionsByFestival,
    selectAttributionsByJour,
    getAttributionsByAll,
    deleteAttributionFZ,
    createAttributionFZ,

}