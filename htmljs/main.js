let  hello= document.getElementById('content');
 
hello.onclick = function(){
    hello.classList.add('name');
}
hello.oncontextmenu = function(){
    hello.classList.remove('name');
}