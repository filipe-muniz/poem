const express = require("express");
const router = express.Router();
const db = require("../db/db.js");


router.get("/poems", async(req, res, next)=>{
    try{
        const poems = await db("poems");
        res.json(poems);
    } catch(err){
        next(err);
    }
});

router.get("/poets/:name", async(req, res, next)=>{
    try{
        const poetName = req.params.name;
        const poems = await db("poems").innerJoin("poets", "poems.poet_id", "poets.id").where("poets.name",`${poetName}`);
        res.json(poems);
    }
    catch(err){
        next(err);
    }
});

router.get("/poems/:query", async(req, res, next) =>{
    try{
        const query = req.params.query;
        const poems = await db("poems").where("poem", "like", `%${query}%`);
        res.json(poems)
    } catch(err){
        next(err);
    }
});



module.exports = router;