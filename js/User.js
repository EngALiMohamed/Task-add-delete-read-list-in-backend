
const fs=require("fs")
const allData =require('./allData')
//////////////// Add Items///////////////////
const addUser =(id,fname,lname,age,city)=>{
    const allData = loadData()
    const duplicatedId =allData.filter((obj)=>{
        return obj.id ===id
    })
    if(duplicatedId.length==0){
        allData.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    })    
    saveAllData(allData)
    }else{
        console.log("Erorr Duplicated This Id !")
    }


}
const loadData=()=>{
    try{
        const DataJson =fs.readFileSync('addUser.json').toString()
        return JSON.parse(DataJson)
    }
    catch{
        return[]
    }
}
const saveAllData=(allData)=>{
    const allDataJson =JSON.stringify(allData)
    fs.writeFileSync("addUser.json",allDataJson)     
}

////////////////////////////////////////////////////////////////

////////// Delete Items /////////////////////
const deleteUser =(id)=>{
    const allData=loadData()
    const dataToKeep=allData.filter((obj)=>{
        return obj.id !==id
    })
    saveAllData(dataToKeep)
}
///////////// Read Items ////////////////////

const readUser=(id)=>{
    const allData=loadData()
    const itemNeeded =allData.find((obj)=>{
        return obj.id ==id
    })
    if(itemNeeded){
        console.log(itemNeeded.fname,itemNeeded.lname)
    }else{
        console.log("id needed not found")
    }
}
///////////// List Items ///////////////
const listUser=()=>{
    const allData=loadData()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.age,obj.city)
    });

}
module.exports={
    addUser,
    deleteUser,
    readUser,
    listUser
}
  

 
