const dbconnect=require('./mongodb');

const deleteData=async ()=>{

    let data=await dbconnect();
    let result=await data.deleteMany({
        name:'jun'
    })
    console.warn(result);

 }

deleteData();