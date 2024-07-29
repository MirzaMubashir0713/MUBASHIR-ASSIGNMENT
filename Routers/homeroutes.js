const express=require("express");
const routesctrl=require("./../Controller/routesctrl");
const router=express.Router();

router.get("/",routesctrl.rout);
router.get("/health",routesctrl.health);

module.exports=router;