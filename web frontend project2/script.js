const btn1=document.querySelector("button");
btn1.addEventListener("click",()=>{
    console.log("the request is processing......" );
    btn1.innerText="the request is processing..."
    btn1.style.backgroundColor="green";
});