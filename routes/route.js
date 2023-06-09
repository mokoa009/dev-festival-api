module.exports = (app) =>{
    const zoneRouter = require('./zone_route');
    const utilisateurRouter = require('./utilisateur_route');
    const festivalRouter = require('./festival_route');
    const jourRouter = require('./jour_route');
    const creneauRouter = require('./creneau_route');
    const affectationBenevoleCreneauRouter = require('./attributionZone_route');
    const affectationCreneauJourRouter = require('./attributionCJ_route.js');
    const affectationFestivalZoneRouter = require('./attributionFZ_route.js');
    const affectationJourFestivalRouter = require('./attributionJF_route.js');
    const affectationJourZoneRouter = require('./attributionJZ_route.js');
    const affectationZoneCreneauRouter = require('./attributionZC_route.js');



    app.use('/zones', zoneRouter);
    app.use('/utilisateurs', utilisateurRouter);
    app.use('/festivals', festivalRouter);
    app.use('/jours', jourRouter);
    app.use('/creneaux', creneauRouter);
    app.use('/affectationBC', affectationBenevoleCreneauRouter);
    app.use('/affectationCJ', affectationCreneauJourRouter);
    app.use('/affectationJF', affectationJourFestivalRouter);
    app.use('/affectationFZ', affectationFestivalZoneRouter);
    app.use('/affectationJZ', affectationJourZoneRouter);
    app.use('/affectationZC', affectationZoneCreneauRouter);


    
}