$(document).ready(function(){
    TweenMax.to(".card2", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 
 TweenMax.to(".card3", 0, {
    
     x: 1000,
  
   ease: Linear.easeNone
  });
  TweenMax.to(".card4", 0, {
    
     x: 1000,
  
   ease: Linear.easeNone
  });
  TweenMax.to(".card5", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 TweenMax.to(".card6", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 TweenMax.to(".card7", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
 TweenMax.to(".card8", 0, {
    
    x: 1000,
 
  ease: Linear.easeNone
 });
  TweenMax.to(".progress-bar", 0, {
    
     width:125,
  
   ease: Linear.easeNone
  });
  $('#btn-send').click(function(event) {
    save();
});
$('#btn-answer').click(function(event) {
    read();
});
 });
 $('.card1 .btn-next').click(function(event) {
    turnNext(1);
});
$('.card2 .btn-next').click(function(event) {
    turnNext(2);
});
$('.card3 .btn-next').click(function(event) {
    turnNext(3);
});
$('.card4 .btn-next').click(function(event) {
   turnNext(4);
});
$('.card5 .btn-next').click(function(event) {
   turnNext(5);
});
$('.card6 .btn-next').click(function(event) {
   turnNext(6);
});
$('.card7 .btn-next').click(function(event) {
   turnNext(7);
});

  $('.card1 .answer-item ').click(function(event) {
     turnNext(1);
 });
 $('.card2 .an').click(function(event) {
     turnNext(2);
 });
 $('.card3 .answer-item').click(function(event) {
     turnNext(3);
 });
 $('.card4 .answer-item').click(function(event) {
    turnNext(4);
});
$('.card5 .answer-item').click(function(event) {
    turnNext(5);
});
$('.card6 .answer-item-2').click(function(event) {
    turnNext(6);
});
$('.card7 .answer-item').click(function(event) {
    turnNext(7);
});
$('.card8 .answer-item').click(function(event) {
   onclick="save()"});
$('.card8 .btn-prev').click(function(event) {
    turnPrev(8);
});
$('.card7 .btn-prev').click(function(event) {
    turnPrev(7);
});
$('.card6 .btn-prev').click(function(event) {
    turnPrev(6);
});
$('.card5 .btn-prev').click(function(event) {
    turnPrev(5);
});
 
 $('.card4 .btn-prev').click(function(event) {
     turnPrev(4);
 });
 $('.card3 .btn-prev').click(function(event) {
     turnPrev(3);
 });
 $('.card2 .btn-prev').click(function(event) {
     turnPrev(2);
 });
 
 function turnNext(n){
     TweenMax.to(".progress-bar",0, {
         width: (1000/8)*(n+1)
     });
     TweenMax.to(".card"+n,0.5, {
         x: -1000
     });
     TweenMax.to(".card"+(n+1),0.5, {
         x: 0
     });
 }
 function turnPrev(n){
     TweenMax.to(".progress-bar",0, {
         width: (1000/8)*(n-1)
     });
     TweenMax.to(".card"+n,0.5,{
        x: 1000
     });
     TweenMax.to(".card"+(n-1),0.5,{
         x: 0
     });
 
 }
 
function save() {
    let flag=1;
    let parameter = new Object();
    let postURL = "https://script.google.com/macros/s/AKfycbys-giNH71HxfqRaWZzILw15yPTbMiI0nPMvzu21CThOT3EVnux/exec";
    parameter.method = "write";
    parameter.q1 = $("input[name='a1']:checked").val();
    parameter.q2 = $("input[name='a2']:checked").val();
    parameter.q3 = $("input[name='a3']:checked").val();
    parameter.q4 = $("input[name='a4']:checked").val();
    parameter.q5 = $("input[name='a5']:checked").val();
    parameter.q6 = $("input[name='a6']:checked").val();
    parameter.q7 = $("input[name='a7']:checked").val();
    parameter.q8 = $("input[name='a8']:checked").val();

    parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1in204Fjf816g0n77qEGrLTim8FChg4pNYyfAk1z7SIQ/edit#gid=0";
    parameter.sheetTag = "工作表1";
    console.log(parameter);
    if (parameter.q1 == undefined || parameter.q2 == undefined|| parameter.q3 == undefined|| parameter.q4 == undefined|| parameter.q5 ==undefined|| parameter.q6 == undefined|| parameter.q7 == undefined|| parameter.q8 == undefined) {
        flag = 0;
        alert("請填完所有題目");
    } 
    if(flag){
    $.post(postURL, parameter, function(data) {
    
          
        if(data.result == "success"){
            alert("寫入成功");
            window.location.assign("answer.html");
        }else{
            alert(data.msg);
        }
    });}
}
function read() {
    let parameter = new Object();
    let postURL = "https://script.google.com/macros/s/AKfycbys-giNH71HxfqRaWZzILw15yPTbMiI0nPMvzu21CThOT3EVnux/exec";
    parameter.method = "read";
    parameter.sheetUrl = "https://docs.google.com/spreadsheets/d/1in204Fjf816g0n77qEGrLTim8FChg4pNYyfAk1z7SIQ/edit#gid=0";
    parameter.sheetTag = "工作表1";
    $.get(postURL, parameter, function(data) {
        if(data.score>=18){
            window.location.assign("a1.html");
        }else if(data.score>=10){
            window.location.assign("a2.html");
        }
        else{
            window.location.assign("a3.html");

        }
        
    });
}