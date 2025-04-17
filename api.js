const express = require('express');
const mongodb=require('mongodb')
const dbconnect = require('./mongodb');
const { bold } = require('colors');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await dbconnect();
    data = await data.find().toArray();
    resp.send(data)
});

app.post('/', async (req, resp) => {
    let data = await dbconnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
});

app.put("/:name", async (req, resp) => {
    let data = await dbconnect();
    let result = await data.updateOne({
        name: req.params.name
    },
        { $set: req.body }
    )
    resp.send({ result: "updated" })
});

app.delete("/:id",async(req,resp)=>{ 
    const data=await dbconnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)
    })
    resp.send("done")
})
app.listen(3000)
