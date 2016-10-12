/**
 * Created by Administrator on 2016/9/4 0004.
 */

var show1_1=function(){
    var l1_1=document.getElementById("li1_1");
    var l1_2=document.getElementById("li1_2");
    l1_1.style.display="block";
    l1_2.style.display="block";
}
var show1_2=function(){
    var l1_1=document.getElementById("li1_1");
    var l1_2=document.getElementById("li1_2");
    l1_1.style.display="block";
    l1_2.style.display="none";
}
var show2_1=function(){
    var l2_1=document.getElementById("li2_1");
    var l2_2=document.getElementById("li2_2");
    l2_1.style.display="block";
    l2_2.style.display="block";
}
var show2_2=function(){
    var l2_1=document.getElementById("li2_1");
    var l2_2=document.getElementById("li2_2");
    l2_1.style.display="block";
    l2_2.style.display="none";
}
var show3_1=function(){
    var l3_1=document.getElementById("li3_1");
    var l3_2=document.getElementById("li3_2");
    l3_1.style.display="block";
    l3_2.style.display="block";
}
var show3_2=function(){
    var l3_1=document.getElementById("li3_1");
    var l3_2=document.getElementById("li3_2");
    l3_1.style.display="block";
    l3_2.style.display="none";
}
var show4_1=function(){
    var l4_1=document.getElementById("li4_1");
    var l4_2=document.getElementById("li4_2");
    l4_1.style.display="block";
    l4_2.style.display="block";
}
var show4_2=function(){
    var l4_1=document.getElementById("li4_1");
    var l4_2=document.getElementById("li4_2");
    l4_1.style.display="block";
    l4_2.style.display="none";
}
var show5_1=function(){
    var l5_1=document.getElementById("li5_1");
    var l5_2=document.getElementById("li5_2");
    l5_1.style.display="block";
    l5_2.style.display="block";
}
var show5_2=function(){
    var l5_1=document.getElementById("li5_1");
    var l5_2=document.getElementById("li5_2");
    l5_1.style.display="block";
    l5_2.style.display="none";
}
var show6_1=function(){
    var l6_1=document.getElementById("li6_1");
    var l6_2=document.getElementById("li6_2");
    l6_1.style.display="block";
    l6_2.style.display="block";
}
var show6_2=function(){
    var l6_1=document.getElementById("li6_1");
    var l6_2=document.getElementById("li6_2");
    l6_1.style.display="block";
    l6_2.style.display="none";
}
var show7_1=function(){
    var l7_1=document.getElementById("li7_1");
    var l7_2=document.getElementById("li7_2");
    l7_1.style.display="block";
    l7_2.style.display="block";
}
var show7_2=function(){
    var l7_1=document.getElementById("li7_1");
    var l7_2=document.getElementById("li7_2");
    l7_1.style.display="block";
    l7_2.style.display="none";
}


var nowFrame = 0;
var lis = document.getElementsByClassName('lii');

for(var i=0;i<lis.length;i++){
    if(i==nowFrame){	//nowFrame
        lis[i].style.display='block';
    }else{
        lis[i].style.display='none';
    }
}
setInterval(function(){
    nowFrame++;
    if(nowFrame>=lis.length){
        nowFrame=0;
    }
    for(var i=0;i<lis.length;i++){
        if(i==nowFrame){
            lis[i].style.display='block';
        }else{
            lis[i].style.display='none';
        }
    }
},2000);


var s1=function(){
    var img1_1=document.getElementById("img1_1");
    var img1_2=document.getElementById("img1_2");
    img1_1.style.display="none";
    img1_2.style.display="block";
}
var s11=function(){
    var img1_1=document.getElementById("img1_1");
    var img1_2=document.getElementById("img1_2");
    img1_1.style.display="block";
    img1_2.style.display="none";
}
var s2=function(){
    var img2_1=document.getElementById("img2_1");
    var img2_2=document.getElementById("img2_2");
    img2_1.style.display="none";
    img2_2.style.display="block";
}
var s22=function(){
    var img2_1=document.getElementById("img2_1");
    var img2_2=document.getElementById("img2_2");
    img2_1.style.display="block";
    img2_2.style.display="none";
}
var s3=function(){
    var img3_1=document.getElementById("img3_1");
    var img3_2=document.getElementById("img3_2");
    img3_1.style.display="none";
    img3_2.style.display="block";
}
var s33=function(){
    var img3_1=document.getElementById("img3_1");
    var img3_2=document.getElementById("img3_2");
    img3_1.style.display="block";
    img3_2.style.display="none";
}
var s4=function(){
    var img4_1=document.getElementById("img4_1");
    var img4_2=document.getElementById("img4_2");
    img4_1.style.display="none";
    img4_2.style.display="block";
}
var s44=function(){
    var img4_1=document.getElementById("img4_1");
    var img4_2=document.getElementById("img4_2");
    img4_1.style.display="block";
    img4_2.style.display="none";
}
var s5=function(){
    var img5_1=document.getElementById("img5_1");
    var img5_2=document.getElementById("img5_2");
    img5_1.style.display="none";
    img5_2.style.display="block";
}
var s55=function(){
    var img5_1=document.getElementById("img5_1");
    var img5_2=document.getElementById("img5_2");
    img5_1.style.display="block";
    img5_2.style.display="none";
}

var m1=function(){
    var m1_1=document.getElementById("m1_1");
    var m1_2=document.getElementById("m1_2");
    m1_1.style.display="none";
    m1_2.style.display="block";
}
var m11=function(){
    var m1_1=document.getElementById("m1_1");
    var m1_2=document.getElementById("m1_2");
    m1_1.style.display="block";
    m1_2.style.display="none";
}
var m2=function(){
    var m2_1=document.getElementById("m2_1");
    var m2_2=document.getElementById("m2_2");
    m2_1.style.display="none";
    m2_2.style.display="block";
}
var m22=function(){
    var m2_1=document.getElementById("m2_1");
    var m2_2=document.getElementById("m2_2");
    m2_1.style.display="block";
    m2_2.style.display="none";
}
var m3=function(){
    var m3_1=document.getElementById("m3_1");
    var m3_2=document.getElementById("m3_2");
    m3_1.style.display="none";
    m3_2.style.display="block";
}
var m33=function(){
    var m3_1=document.getElementById("m3_1");
    var m3_2=document.getElementById("m3_2");
    m3_1.style.display="block";
    m3_2.style.display="none";
}
var m4=function(){
    var m4_1=document.getElementById("m4_1");
    var m4_2=document.getElementById("m4_2");
    m4_1.style.display="none";
    m4_2.style.display="block";
}
var m44=function(){
    var m4_1=document.getElementById("m4_1");
    var m4_2=document.getElementById("m4_2");
    m4_1.style.display="block";
    m4_2.style.display="none";
}
var m5=function(){
    var m5_1=document.getElementById("m5_1");
    var m5_2=document.getElementById("m5_2");
    m5_1.style.display="none";
    m5_2.style.display="block";
}
var m55=function(){
    var m5_1=document.getElementById("m5_1");
    var m5_2=document.getElementById("m5_2");
    m5_1.style.display="block";
    m5_2.style.display="none";
}
var q2=function(){
    var aa1=document.getElementById("aa1");
    var aa2=document.getElementById("aa2");
    aa1.style.display="none";
    aa2.style.display="block";
}
var q22=function(){
    var aa1=document.getElementById("aa1");
    var aa2=document.getElementById("aa2");
    aa1.style.display="block";
    aa2.style.display="none";
}
var q3=function(){
    var aa3=document.getElementById("aa3");
    var aa4=document.getElementById("aa4");
    aa3.style.display="none";
    aa4.style.display="block";
}
var q33=function(){
    var aa3=document.getElementById("aa3");
    var aa4=document.getElementById("aa4");
    aa3.style.display="block";
    aa4.style.display="none";
}
var q4=function(){
    var aa5=document.getElementById("aa5");
    var aa6=document.getElementById("aa6");
    aa5.style.display="none";
    aa6.style.display="block";
}
var q44=function(){
    var aa5=document.getElementById("aa5");
    var aa6=document.getElementById("aa6");
    aa5.style.display="block";
    aa6.style.display="none";
}


var f_1= function () {
    var f1=document.getElementById("f1");
    var f11=document.getElementById("f11");
    f1.style.display="none";
    f11.style.display="block";
}
var f_2= function () {
    var f1=document.getElementById("f1");
    var f11=document.getElementById("f11");
    f1.style.display="block";
    f11.style.display="none";
}