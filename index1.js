const express =require("express");
const homerouter=require("./Routers/homeroutes");
const booksroutes=require("./Routers/booksroutes");

const app=express();
const port =3000;

app.use(express.json());
app.use("/api/v1",homerouter);
app.use("/api/v1/books",booksroutes);

app.listen(port,()=>console.log("server is running on the port 3000"));