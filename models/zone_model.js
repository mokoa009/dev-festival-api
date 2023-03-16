const db = require("../config/bd");

async function getZones(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Zone"
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
async function getZone(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Zone WHERE idZone = ${db.escape(id)}`
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
async function deleteZone(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Zone WHERE idZone = ${db.escape(id)}`
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

async function createZone(nom){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Zone VALUES (NULL, ${db.escape(nom)})`
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

async function updateZone(nom,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Zone SET nom = ${db.escape(nom)} WHERE idZone = ${db.escape(id)}`
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
    getZones,
    getZone,
    deleteZone,
    createZone,
    updateZone,
}