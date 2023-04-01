const db = require("../config/bd");

async function getFestivals(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Festival"
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
async function getFestival(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Festival WHERE idFestival = ${db.escape(id)}`
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
async function deleteFestival(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Festival WHERE idFestival = ${db.escape(id)}`
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

async function createFestival(nom,annee, nbJours){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Festival VALUES (NULL, ${db.escape(nom)}, ${db.escape(annee)}, ${db.escape(nbJours)}, 0)`
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

async function updateFestival(nom,annee, nbJours,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Festival SET nom = ${db.escape(nom)} AND annee = ${db.escape(annee)} AND nbJours = ${db.escape(nbJours)} WHERE idFestival = ${db.escape(id)}`
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

async function closeFestival(id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Festival SET cloture = 1 WHERE idFestival = ${db.escape(id)}`
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
    getFestivals,
    getFestival,
    deleteFestival,
    createFestival,
    updateFestival,
    closeFestival,
}