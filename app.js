
const express=require('express');
const path=require('path');
const userRouter=require('./routes/userRouter');
const hostRouter=require('./routes/hostRouter');
const app=express();
const rootDir=require('./utils/pathUtil');
const PORT=3001;
app.use((req,res,next)=>{
  console.log(req.method,req.url); 
  next();
});

app.use(userRouter);
app.use(express.urlencoded({extended:true}));
app.use('/host',hostRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});
app.listen(PORT,()=>{
console.log(`Server running on address http://localhost:${PORT}`);
});
