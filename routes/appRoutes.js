var express = require('express');
var router = express.Router();
var Country = require('../models/dataSchema');


router.post('/create',(req,res,next) => {
    var newCountry = new Country({
        discount: req.body.discount,
        finalTotal: req.body.finalTotal,
        selectt:req.body.selectt
    });

    newCountry.save((err,country)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg: country});
    });

});

router.get('/read',(req,res,next) => {
    Country.find({},(err,countries)=>{
        if(err)
        res.status(500).json({errmsg:err});
    res.status(200).json({msg: countries});
    });
});



module.exports = router;