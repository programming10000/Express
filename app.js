const { response } = require('express');
const express=require('express');
const { request } = require('https');
const app=express();
const path=require('path'); // use to access the project outside of the
                                // the project directory 



// app.use(express.static(path.join(__dirname + '/public')))

  /* node Express/app on terminal to run
the file found in this directory is served if the folder is found inside
 the working dir or outsite if the path and the folder name is correct */

// app.use((req,res) => {
//     res.status(404);
//     res.send('<h1>Error 404</h1>')
// })



// like this we can serve the static front end project by putting 
// inside the public folder




// //  we can also serve api request by localhost:3000/api
//  app.get('/api',(req,res) =>{
//     res.json('http get request recieved json file');
//  })


/* add sttic or public folder accesing static files on express
 server if express is dirictlly installed in the project directiory  */
app.use(express.static('public'));



app.listen(3000,() =>{
    console.log('app listen on port 3000')
})