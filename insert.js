const dbconnect= require('./mongodb');

const insert=async ()=>{
    const db=await dbconnect();
    const result=await db.insertMany([
        {name:'juni',brand:'vi',price:4343},
        {name:'juna',brand:'vi',price:4343},
        {name:'juno',brand:'vi',price:4343}
    ]
    ) ;
    if(result.acknowledged){
    console.log("Data inserted")
    } 
}
insert();
//Awais
//Awais
