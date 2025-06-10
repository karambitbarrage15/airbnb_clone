const express=require('express');
const path=require('path');
const rootDir=require('./utils/pathUtil');

const hostRouter=express.Router();
hostRouter.get('/add-home',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','addHome.html'));
});
hostRouter.post('/add-home',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','homeadded.html'));
});
module.exports=hostRouter;