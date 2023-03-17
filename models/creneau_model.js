const db = require("../config/bd");

async function getCreneaux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Creneau"
        try { 
            db.query(sql, [], (err, result,connection) => {
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
async function getCreneau(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Creneau WHERE idCreneau = ${db.escape(id)}`
        try { 
            db.query(sql, [], (err, result,connection) => {
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
async function deleteCreneau(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Creneau WHERE idCreneau = ${db.escape(id)}`
        try { 
            db.query(sql, [], (err, result,connection) => {
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

async function createCreneau(heureDebut, heureFin){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Creneau VALUES (NULL, ${db.escape(heureDebut)}, ${db.escape(heureFin)})`
        try { 
            db.query(sql, [], (err, result,connection) => {
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

async function updateCreneau(heureDebut,heureFin,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Creneau SET heureDebut = ${db.escape(heureDebut)} AND heureFin = ${db.escape(heureFin)} WHERE idCreneau = ${db.escape(id)}`
        try { 
            db.query(sql, [], (err, result,connection) => {
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
    getCreneaux,
    getCreneau,
    deleteCreneau,
    createCreneau,
    updateCreneau,
}