const db = require("../config/bd");

async function getJours(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM JourFestival"
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
async function getJour(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM JourFestival WHERE idJour = ${db.escape(id)}`
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
async function deleteJour(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM JourFestival WHERE idJour = ${db.escape(id)}`
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

async function createJour(nom,ouverture,fermerture){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO JourFestival VALUES (NULL, ${db.escape(nom)}, ${db.escape(ouverture)}, ${db.escape(fermerture)}) RETURNING JourFestival.idJour`
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

async function updateJour(nom,ouverture,fermerture,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE JourFestival SET nom = ${db.escape(nom)} AND ouverture = ${db.escape(ouverture)} AND fermerture = ${db.escape(fermerture)} WHERE idJour = ${db.escape(id)}`
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
    getJours,
    getJour,
    deleteJour,
    createJour,
    updateJour,
}