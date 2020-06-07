var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
// var con = require("../db_connection");
var request = require("request");

const appid = process.env.APPID;
 
/* 正則 */
var NameReg = new RegExp("^[\u4E00-\u9FA5]{2,4}$"); //姓名
var IdReg =new RegExp("^[0-9]{10}");    //ID

function showup(word,IP){
    console.log('---------------news---------------');
    console.log('Call API : '+word);
    if(IP!=''){
        console.log('Client IP : '+IP);
    }
    console.log('---------------------------------');
}


exports.productList = function(req,res){
    console.log(appid);
    let result=[    //測試資料
        {
            "productId":"10001",
            "productName": "物件導向程式設計 － 結合生活與遊戲的 JAVA 語言, 2/e (附範例光碟)",
            "productImg": "././img/10001.jpg",
            "sale": "396"
        },
        {
            "productId":"10002",
            "productName": "Python 程式設計：從入門到進階應用, 3/e (附範例光碟)",
            "productImg": "././img/10002.jpg",
            "sale": "405"
        },
        {
            "productId":"10003",
            "productName": "Python 資料科學學習手冊 (Python Data Science Handbook: Essential Tools for Working with Data)",
            "productImg": "././img/10003.jpg",
            "sale": "616"
        },
        {
            "productId":"10004",
            "productName": "TensorFlow + Keras 深度學習人工智慧實務應用",
            "productImg": "././img/10004.jpg",
            "sale": "466"
        }];

    if(result){
       showup('productList',req.connection.remoteAddress);
            res.status(200)
            .json(result);
        
    }else {
        let error = 'productsNotFound';
        let message = '商品列表不存在';
        res.status(404)
            .json({error:error,message:message});
    }
}



