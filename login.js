function getm(){
function get(a,b,callback){
  var a;
  var b;
    if (a=="admin"&&b=="12345") {
        c="success";
        
    }
    else{
        c="failure";
        
    }
    callback(c);
}
var a=document.getElementById("t1").value;
var b=document.getElementById("t2").value;
get(a,b,(d)=>{

    if(d=="success"){
window.location.href='l1.html'}
if(d=="failure"){
    alert("not matching");
}
})
}