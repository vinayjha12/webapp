let myHeader = document.querySelector('h1');
let myButton =document.querySelector('button');
let myImage = document.querySelector('img');
myImage.onclick = function()
{
    let Atr = myImage.getAttribute('src');
    if(Atr === 'images/download.png')
    {
        myImage.setAttribute('src','images/download1.png');
    } 
    else
    {
        myImage.setAttribute('src','images/download.png');
    }
}
function setUserName(){
    let myName = prompt('please enter your name');
    if(!myName)
    setUserName();
    else{
        localStorage.setItem('name',myName);
        myHeader.innerHTML = 'Google is cool' + ' ' +myName;
    }
}
myButton.onclick=function(){
    setUserName();
}