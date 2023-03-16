module.exports = (app) =>{
    const zoneRouter = require('./zone_route');
    const utilisateurRouter = require('./utilisateur_route');
    const attributionZoneRouter = require('./attributionZone_route');

    app.use('/zones', zoneRouter);
    app.use('/utilisateurs', utilisateurRouter);
    app.use('/attributionsZone', attributionZoneRouter);
}