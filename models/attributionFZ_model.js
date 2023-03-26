const db = require("../config/bd");

async function getAttributionsFZ(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT F.idFestival, F.nom as nomFestival, F.cloture, Z.idZone, Z.nom as nomZone\
                    FROM AffectationFestivalZones as A, Zone as Z, Festival as F \
                    where A.idFestival = F.idFestival AND A.idZone = Z.idZone"
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
    return new Promise((resolve, reject) => {
        const sql = `SELECT F.idFestival, F.nom as nomFestival, F.cloture, Z.idZone, Z.nom as nomZone, Z.nbBenevoles\
                    FROM AffectationFestivalZones as A, Zone as Z, Festival as F \
                    where A.idFestival = F.idFestival AND A.idZone = Z.idZone\
                    AND F.idFestival = ${db.escape(idFestival)}`
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
        const sql = `SELECT F.idFestival, F.nom as nomFestival, F.cloture, Z.idZone, Z.nom as nomZone\
                    FROM AffectationFestivalZones as A, Zone as Z, Festival as F \
                    where A.idFestival = F.idFestival AND A.idZone = Z.idZone\
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

async function getAttributionsByAll(idZone,idFestival){
    return new Promise((resolve, reject) => {
        const sql = `SELECT F.idFestival, F.nom as nomFestival, F.cloture, Z.idZone, Z.nom as nomZone\
                    FROM AffectationFestivalZones as A, Zone as Z, Festival as F \
                    where A.idFestival = F.idFestival AND A.idZone = Z.idZone\
                    AND F.idFestival = ${db.escape(idFestival)} AND Z.idZone = ${db.escape(idZone)}`
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


async function deleteAttributionFZ(idZone,idFestival){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AffectationFestivalZones WHERE idFestival = ${db.escape(idFestival)} AND idZone = ${db.escape(idZone)}`
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

async function createAttributionFZ(idZone,idFestival){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AffectationFestivalZones VALUES (${db.escape(idFestival)},${db.escape(idZone)})`
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
    selectAttributionsByZone,
    getAttributionsByAll,
    deleteAttributionFZ,
    createAttributionFZ,

}