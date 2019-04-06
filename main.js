 
 function boldtext(){
    document.getElementById("divmodify").style.fontWeight = 'bold' ; 
}
 
function italictext(){
    document.getElementById("divmodify").style.fontStyle = 'italic' ; 
}
 
function underlinetext(){
    document.getElementById("divmodify").style.textDecoration = 'underline' ; 
}

function MyFunction(listfont) {
    document.getElementById("divmodify").style.fontFamily = listfont.value;
}

function MyFadda(listtaille) {
    document.getElementById("divmodify").style.fontSize = listtaille.value;
}