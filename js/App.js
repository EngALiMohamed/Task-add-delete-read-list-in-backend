const User = require("./User");

const yargs = require("yargs");

/////////////// Add Items ///////////////

yargs.command({
    command:"add",
    describe:"to add an item",
    builder:{
        fname:{
            describe:"this is first name",
            demandOption:true,
            type:"string"            
        },
        lname:{
            describe:"this is last name",
            demandOption:true,
            type:"string"            
        },
    },
    handler:(data)=>{
       User.addUser(data.id,data.fname,data.lname,data.age,data.city)

    }
})

///////////// Delete Items //////////////
yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(data)=>{
        User.deleteUser(data.id)
     }

})
///////////// Read Items //////////////

yargs.command({
    command:"read",
    describe:"to read an item",
    id:{
        describe:"this is id",
        demandOption:true,
        type:"string"            
    },
    handler:(data)=>{
        User.readUser(data.id)
     } 
})
///////////// list Items //////////////

yargs.command({
    command:"list",
    describe:"to list an item",
    handler:()=>{
        User.listUser()
     } 
})
yargs.parse()