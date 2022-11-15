/* ============================ MODULOS ============================= */
import express from 'express';
import { fork } from 'child_process';

/* ====================== INSTANCIA DE ROUTER ======================= */
const randoms = express.Router();
/* ============================== RUTAS ============================= */
randoms.get('/randoms', (req, res) => {
    const forkedProcess = fork('./src/random-numbers.js');
    const qty = req.query.cant !== null && req.query.cant !== '' && req.query.cant !== undefined ? req.query.cant : '100000000' ;

    forkedProcess.send(qty);
    forkedProcess.on('message', msg => {
        res.render('partials/randoms', {layout: 'random', cant: qty, randomNumbers: msg});
    });

    // res.render('partials/randoms', {layout: 'random', cant: qty});
});

randoms.get('*', async (request, response) => {
    response.status(404).send('404 - Page not found!!');
});

/* ====================== MODULOS EXPORTADOS ======================== */
export default randoms;