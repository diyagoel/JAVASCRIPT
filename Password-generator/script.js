let ipSlider=document.getElementById("ipSlider")
let valSlider=document.getElementById("valSlider")
let passBox=document.getElementById("passBox")
let lower=document.getElementById("lower")
let upper=document.getElementById("upper")
let number=document.getElementById("number")
let special=document.getElementById("special")
let getbtn = document.getElementById("genbtn")
let copyIcon = document.getElementById("copyIcon")

valSlider.textContent=ipSlider.value
ipSlider.addEventListener('input',()=>{
    valSlider.textContent=ipSlider.value; 
});

let upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChar="abcdefghijklmnopqrstuvwxyz"
let numbers="0123456789";
let specials="@$&";

getbtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
})

function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars+=lower.checked?lowerChar:"";
    allChars+=upper.checked?upperChar:"";
    allChars+=number.checked?numbers:"";
    allChars+=special.checked?specials:"";

    if(allChars==""||allChars.length==0) return genPassword;

    for(let i=0;i<ipSlider.value;i++){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    }
    
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length>=1) 
    {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password Copied";;
        setTimeout(()=>{
            copyIcon.innerHTML="content_copy";
            copyIcon.title=""
        },3000)
    }
})

