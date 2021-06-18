let express = require('express');
let mongoose = require('mongoose');
let app = express();
let Event = require('./models/events').Event;
let Perf = require('./models/performers').Performer;
let Query = require('./models/queries').Query;
let Note = require('./models/notices').note;
let multer = require('multer');
let path = require('path');
let uniqid = require('uniqid');
app.use(express.static('public'));
mongoose.connect('mongodb+srv://Monii:mongodbclusture@myclusture.tnt5d.mongodb.net/schools?retryWrites=true&w=majority', { useUnifiedTopology: true });
/*let event1 = new Event({
    id: 2,
    title: 'Img Academy',
    date: new Date(),
    description: 'will be held on 22 june 2021 last date for registration 18 june 2021',
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtx6wUltT2zdNd4XZH1_q8zAi8w_ZsrYpKw&usqp=CAU'
});
event1.save();*/
let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
}) 
app.use(multer({storage: imageStorage}).single('imageFile'));
app.use(express.json());

//eventssssssss
app.get('/events', async (req, resp) => {
    let events = await Event.find();
    resp.send(events);

})
app.get('/events/:id', async (req, resp) => {
    let id = req.params.id;
    let event = await Event.findOne({id: id});
    resp.send(event);

})
app.put('/events/:id', async (req, resp) => {
    let id = req.params.id;
    await Event.updateOne({id: id}, req.body);
    resp.send("updated!!");
})
app.post('/events', async (req, resp) => {
    let reqBody = req.body;
    let imgPath;
    if(reqBody.imageURL){
        imgPath = reqBody.imageURL;
    }
    else{
        imgPath = req.file.path.substring(req.file.path.indexOf(path.sep), req.file.path.length);
    }
    let newEvent = new Event({
        id: uniqid(),
        title: reqBody.title,
        date: new Date(),
        description: reqBody.description,
        imageURL: imgPath
    })
    await newEvent.save();
    resp.send("created!");
})
app.delete('/events/:id',async (req, resp) =>{
    let id = req.params.id;
    await Event.deleteOne({id: id});
    resp.send("deleted!!");
})

//queriesssssssssss
app.get('/queries', async (req, resp) => {
    let q = await Query.find();
    resp.send(q);
})

app.post('/queries', async (req, resp) => {
    let reqBody = req.body;
    let newQuery = new Query({
        id: uniqid(),
        name: reqBody.name,
        email: reqBody.email,
        date: new Date(),
        msg: reqBody.msg

    })
    await newQuery.save();
    resp.send("Query Added!");
})
app.delete('/queries/:id', async (req, resp) => {
    let id = req.params.id;
    await Query.deleteOne({id: id});
    resp.send("deleted!");
})

// performersssssssssss
app.post('/performers', async (req, resp) => {
    let reqBody = req.body;
    await Perf.deleteMany({});
    let newP = new Perf({
    id1: uniqid(),
    name1: reqBody.name1,
    id2: uniqid(),
    name2: reqBody.name2,
    id3: uniqid(),
    name3: reqBody.name3
    })
    
    await newP.save();
    resp.send("P!");

})
app.get('/performers', async (req, resp) => {
    let p = await Perf.find();
    resp.send(p);
})
// noticesssssssss
app.post('/notices', async (req, resp) => {
    let reqBody = req.body;
    let newN = new Note({
        id: uniqid(),
        note: reqBody.note,
        date: new Date()
    })
    await newN.save();
    resp.send("notice added!");
})
app.get('/notices', async (req, resp) => {
    let N  = await Note.find();
    resp.send(N);
})
app.delete('/notices/:id', async (req, resp) => {
    let id = req.params.id;
    await Note.deleteOne({id: id});
    resp.send("deleted!");
})
app.listen(3000,() => console.log("listening 3000..."));



//some points to remeber for deploying
//1. github -  git init> git add . > git commit -am "<commit name>" > sigin to github > create repository > follow all steps given in github> commit new file in github > upside code link is produced automatically
//2. mongo atlas - to transfer database from local to cloud -  mongod (in cli) > open mongo compass > select a collevtion(users,emails..) up collection then export collecton then export full collection it ------- now import this into clusture(atlas) login there> connect > add ip address > create monodb user > create pass > connect your application> copy code generated > paste in app.js mongoose.connect() and replace some info init username, pass, database(travels)> collection > crerate db and collecton >now import data> from command line tools follw inst for importing... and make some changes accordingly(username,db name, passw) if a collection is empty we can connect manualy> now any changes in website like adding post will make changes in clusture too
//3. heroku - to transer all relevant files and folders to cloud --> register on heroku if not and install now follow instructions heroku login.. > click i have insatalled h cli > click i have my own cloned app > now folow ins for deploying> heroku logs --tail to identify error if any> make a procfile > and change address whereever localhost.. is written we replace it by / assign a variable = process.env.PORT || 3000  toget port> in mongodb atlas > network access > add ipdadress accesible to everyone
// to import in mongodb clusture ---> mongoimport --jsonArray --uri mongodb+srv://Monii:mongodbclusture@myclusture.tnt5d.mongodb.net/schools --collection events --type json --file C:/Users/moni/Desktop/events.json