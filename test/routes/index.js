const express = require("express");//express호출
const router = express.Router();//경로 설정해주기.
const mongoose = require("mongoose");//db호출
const User = require("../models/user");//user스키마를 호출



router.get('/', (req, res) => res.render('index'));
router.get("/login", (req, res) => res.render("login", {page: "login"}));
router.get("/signup", (req, res) => res.render("signup", {page: "signup"}));

router.post("/signup", (req, res) => {
  console.log(req.body.userid)});
   // const user = new User({
   //              _id: new mongoose.Types.ObjectId(),
   //              userid: req.body.userid,
   //              password: req.body.password
   //          });
   //  user.save()
   //      .then(result => {
   //            console.log(result);
   //            res.redirect("/");
   //            })
   //      .catch(err => {
   //            console.log(err);
   //            });
   //        });

module.exports = router;
