var arrpoint = [0,0,0,0,0,0,0,0,0,0];
var point = 0;
var arr = ['36','72','12222','14','24','42','9','10','11','10'];
function control(qn,ans){
  // alert(qn + ". soruya cevap verildi");
  var par_id = document.getElementById("qp"+qn);
  if(arr[qn-1] == ans){
    par_id.style.backgroundColor = "#5fca95";
    if(arrpoint[qn-1]==0){
      point += 10;
    }
    arrpoint[qn-1] = 1;

  }
  else{
    par_id.style.backgroundColor = "#FF0000";
    if(arrpoint[qn-1] == 1){
      point -= 10;
    }
    arrpoint[qn-1] = 0;
  }
  document.getElementById('point').innerHTML = "puan:"+point;
}
var time_id = document.getElementById('time');
var secounds = 300;
t_int = setInterval(timer,1000);
function timer(){
  if(secounds <=0){
    time.id.innerHTML == "sure: --:--";
  }
  else {
    var m = Math.floor(secounds/60);
    var s = secounds%60;
    if(m<10){
      m = "0" + m;
    }
    if(s<10){
      s = '0'+s;
    }
    time_id.innerHTML = "sure: " + m + ":" + s;
    secounds --;
  }
}
