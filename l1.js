$(document).ready(function(){
    var c=0;
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        success:function(data){
var out="<table class='table'><thead><tr><th>ID</th><th>TITLE</th></tr></thead>"
for(var i in data){
out+="<tr><td>"+data[i].id+"</td>"
out+="<td>"+data[i].title+"</td>"
var s=data[i].completed;
if(s==true){
    out+="<td><input type='checkbox' checked disabled></td></tr>"


}else{
    out+="<td><input type='checkbox'></td></tr>"

}


}
out+="</table>";
$("#result").html(out);
$('input[type="checkbox"]').click(function(){
    if($(this).prop('checked')===true){
        c++;
    }
    else{
        c--;
    }
    var m=new Promise((resolve,reject)=>{
        if (c>=5) {
            resolve();
                        }
                        else{
                            reject();
                        }
                    });
                    m.then(()=>{
                        alert("Congrats.5 tasks have been successfully completed");
                    }).catch(()=>{
        
                });
  
    });
}
    });
});

