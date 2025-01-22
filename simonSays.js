let gameseq=[];
let userseq=[];

let btns=["red","purple","green","yellow"]
let started =false;
let level=0;
document.addEventListener("keypress",function(){
     if(started == false){
        console.log("game started");
     started=true;
     levelup();
     }
});
h4=document.querySelector("h4");

function gameflash(btn){
   btn.classList.add("flash")
   setTimeout(function(){
   btn.classList.remove("flash")
   },250);
}
function userflash(btn){
  btn.classList.add("userflash")
  setTimeout(function(){
  btn.classList.remove("userflash")

  },250);
}

 function levelup(){
   userseq=[];
    level++;
    h4.innerText=`level ${level}`;
    let randix=Math.floor(Math.random()*3);
    let randcolor=btns[randix];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
 }

function checkAns(idx){
  
   if(userseq[idx]=== gameseq[idx]){
     if(userseq.length == gameseq.length){
     setTimeout(levelup,1000)
     }
   }else{
      h4.innerText=`game over:${level},press any key to start`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";

      },150);
      reset();
   }
}
function btnclick(){
let btn=this;
userflash(btn);

usercolor=btn.getAttribute("id");
userseq.push(usercolor);
checkAns(userseq.length-1);
}
let  btnns=document.querySelectorAll(".btn");
for(buttns of btnns){
   buttns.addEventListener("click",btnclick);

}
function reset(){
   started=false;
    userseq=[];
    started =false;
 level=0;
}



