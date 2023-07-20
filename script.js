let inputElement=document.getElementById("inputValue");
let buttonElement=document.querySelectorAll("button")

let string="";
let arr=Array.from(buttonElement);
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string)   ///eval is inBuild function in js
            inputElement.value=string;
        }

        else if(e.target.innerHTML=="AC"){
            string="";
            inputElement.value=string;
        }

        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            inputElement.value=string
        }
        else{
        string+=e.target.innerHTML;
        inputElement.value=string
        }
    })
})