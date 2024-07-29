function rout(req,res){
    res.status(200);
    res.send("my fisrt API");
}

function health(req,res){
    res.status(200);
    res.json({start:"up"});
}

module.exports={
    rout,
    health
}