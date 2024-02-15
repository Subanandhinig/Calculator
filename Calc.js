var val=document.getElementById("output-screen");
function clear(){
    val.value="";
    }
function display(v){
val.value+=v;
}
function del(){
    val.value=val.value.substr(0,val.value.length-1);
    }
function calculate(){
val.value=eval(val.value);
}
