/**
 * Created by chengshenshen on 17-5-14.
 */
var fortuneCookies =[
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know",
    "You will have a pleasant surprise",
    "Whenever possible,keep it simple"
];

//想让一个东西在模块外可见，必须把它添加到exports上
exports.getFortune = function () {
    var idx = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx]
};