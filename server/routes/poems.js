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
router.post("/poems", async (req, res, next) => {
    try {
        const { title, poem, poet } = req.body; 
        let poetId;
        const existingPoet = await db("poets").where("name", poet).first();
        if (existingPoet) {
            poetId = existingPoet.id;
        } else {
           
            const [newPoetId] = await db("poets").insert({ name: poet });
            poetId = newPoetId;
        }

        const [newPoemId] = await db("poems").insert({ title, poem, poet_id: poetId });

        res.status(201).json({ id: newPoemId, message: "Poem created successfully." });
    } catch (err) {
        next(err);
    }
});



module.exports = router;