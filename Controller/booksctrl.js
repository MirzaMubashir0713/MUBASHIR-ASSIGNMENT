const books=
[
    {
        no:1,
        name:"you can win",
        publishyear:1998,
        language:"english",
        author:"shiv khera",
        price:600,
        customerreview:4.5
    },
    {
        no:2,
        name:"the five am club",
        publishyear:2018,
        language:"english",
        author:"robin sharma",
        price:300,
        customerreview:4
    },
    {
        no:3,
        name:"the Secret",
        publishyear:2006,
        language:"english",
        author:"rhonda Byrne",
        price:100,
        customerreview:3.8
    },
];
function showAll(req,res){
    res.status(200);
    res.send(books);
};
function showSelectedone(req,res){
    const no=+req.params.no;
    let book;
    for(let i=0;i<books.length;i++){
        if(books[i].no===no){
            book=books[i];
        };
    };
    if(book){
        res.status(200);
        res.json(book);
    }else{
        res.status(404);
        res.send("not found");
    }

};
// validation
function isvalid(payload){
    return payload.no&&payload.name&&payload.publishyear&&payload.language&&payload.price&&payload.customerreview;
}
// CRUD OPERATIONS
function create(req,res){
    const payload=req.body;
    if(isvalid(payload))
    {
    books.push(payload);
    res.status(201)//created
    res.send("successfully created");
    }
    else{
    res.status(400);
    res.send("invalid input");
    }
}
function update(req,res){
    const no=+req.params.no;
    const payload=req.body;
    if(!isvalid(payload)){
        res.status(404);
        res.send("invalid input");
    }else{
        for(let i=0;i<books.length;i++){
            if(books[i].no===no){
                books[i].name=payload.name;
                books[i].publishyear=payload.publishyear;
                books[i].language=payload.language;
                books[i].price=payload.price;
                books[i].customerreview=payload.customerreview;
            };
        }
        res.status(200);
        res.send();
    }   
}
function patch(req,res){
    const no=+req.params.no;
    const payload=req.body;
    const book=books.find(elem=>elem.no===no);
    if(!book){
        res.status(404);
        res.send("not found");
    }else{
    for(let key in payload){
        book[key]=payload[key];
    }
    res.status(204);
    res.send();
    }
}
function remove(req,res){
    const no=+req.params.no;
    for(let i=0;i<books.length;i++){
        if(books[i].no===no){
            books.splice(i,1);
            break;
        }
    }
    res.status(204);
    res.send();
}
    module.exports={
    showAll,
    showSelectedone,
    create,
    update,
    patch,
    remove
};