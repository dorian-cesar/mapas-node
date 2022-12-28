
const router= require('express').Router();

// rutas

router.get('/',(req,res)=>{

    //res.send('Hola Mundo');
    res.render('index.ejs');
});
module.exports =router;
