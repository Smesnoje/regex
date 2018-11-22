window.onload = function(){
   document.getElementById('add').addEventListener('click',add);












}
function add(){
    var a = document.getElementById('select').selectedIndex;
    var b = document.getElementById('select')[a].value;
    document.getElementById('insert').appendChild(b);

}