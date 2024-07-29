const express=require("express");
const booksctrl=require("./../Controller/booksctrl");
const router=express.Router();

router.get("/",booksctrl.showAll);
router.get("/:no",booksctrl.showSelectedone);
router.post("/",booksctrl.create);
router.put("/:no",booksctrl.update);
router.patch("/:no",booksctrl.patch);
router.delete("/:no",booksctrl.remove);

module.exports=router;
