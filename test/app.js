const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;
//mongoosedb연결
const mongoose = require('mongoose');
//post값 읽기 위하여
const bodyParser = require('body-parser');
// index.js 경로 설정
const indexRoute = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRoute);

let url =  "mongodb://localhost:27017/testDB";
mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology:true},(err,db) => {
if(err){
console.log("DBerr");
return;
}
console.log("DBCon");
});

// 뷰엔진 설정,__dirname 폴더 경로 __filename 파일 경로
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

//listen,터미널에서 확인
app.listen(PORT, function () {
    console.log('Connect Port',PORT);
});
