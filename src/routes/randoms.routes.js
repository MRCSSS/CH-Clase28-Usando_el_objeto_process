/* ============================ MODULOS ============================= */
import express from 'express';

/* ====================== INSTANCIA DE ROUTER ======================= */
const randoms = express.Router();

/* ============================== RUTAS ============================= */
randoms.get('/randoms', (req, res) => {
    const qty = req.query.cant !== null && req.query.cant !== '' && req.query.cant ==! undefined ? req.query.cant : 100000000 ;
    
    res.render('partials/randoms', {layout: 'random', cant: qty});
});

randoms.get('*', async (request, response) => {
    response.status(404).send('404 - Page not found!!');
});

/* ====================== MODULOS EXPORTADOS ======================== */
export default randoms;