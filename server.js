
const { faker } = require('@faker-js/faker');
const User = require('./User');
const Company = require('./Company');
//console.log(faker.datatype.uuid());

// express
const express = require("express");
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});



const users=[
  {id:1,name:"Noor",age:24},
  {id:2,name:"Amal",age:25},
  {id:3,name:"Ali",age:28},
  {id:4,name:"Asma",age:26}
]
app.get("/api/users/:id",(req,res)=>{
 res.json( users[req.params.id] );

});

//Create an api route "/api/users/new" that returns a new user
app.get("/api/user/new", (req, res) => {
  res.json(new User());
});


//Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
});


//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
  const newUser= new User();
  const newCompany= new Company();

  res.json({newUser,newCompany});
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
