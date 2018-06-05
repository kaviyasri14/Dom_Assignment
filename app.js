function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
console.log(document.getElementsByClassName('class1'));
}

function byTag() {
    console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    document.getElementById("block1").style.backgroundColor = "blue";   
}

function increaseFont() {
    document.getElementById("block2").style.fontSize="25px";
}

function changeFontColor() {
document.getElementById("block3").style.color="green";
}

function revertColor() {
    document.getElementById("block3").style.color="black";
}

function hide() {
document.getElementById("block4").style.visibility="hidden";
}   

function changeBackColor(x,y) {
    var n=document.getElementsByClassName(y);
    for(var i=0;i<3;i++)
    {
        n[i].style.backgroundColor=x;
    }

}
function numbersOnly(evt)
{
    var iKeyCode =(evt.which)?evt.which : evt.keyCode;
    if(iKeyCode!=46&&iKeyCode>31&&(iKeyCode<48||iKeyCode>57))
    {
        return false;
    }
    return true;
    
}

function addAdjacent() {
    document.getElementById("para2").innerHTML+="<p>I got generated on the fly...</p>"
}

function removePara() {
    var p = document.getElementById("para3").parentElement;
    var c = document.getElementById("para4");
    p.removeChild(c);
    
}

function animatePara() {
myMove();
}
function myMove()
{
  document.getElementById('box5').style.position="relative";
  document.getElementById('box5').style.animationName="anim";
  document.getElementById('box5').style.animationDuration="2s";

}
function changeToUpper()
{
    document.getElementById("inputBox2").value=document.getElementById("inputBox1").value.toUpperCase();
}
function changeToCamelCase()
{
    var s=document.getElementById("inputBox3").value;
    var x=s.split(" ");
    s=x[0];
    for(var i=1;i<x.length;i++)
    {
        x[i]=x[i].charAt(0).toUpperCase()+x[i].substr(1);
        s+=x[i];
    }
document.getElementById("inputBox3").value=s;
}
function displayname()
{
    console.log(document.getElementById("browsers").value);
}
function changebg()
{
    document.getElementById("box8").style.backgroundColor="blue";
}


