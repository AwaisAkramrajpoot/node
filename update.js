const dbconnect=require('./mongodb');

const updateData=async()=>{
    let data=await dbconnect();
    let result=await data.updateOne(
        
            {name:'product 1'},{
                $set:{name:'max pro 8',price:4343}
            }
        
    );
    console.warn(result)
}
updateData();