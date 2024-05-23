var parent_div=document.createElement("div");
parent_div.className="main";


print_data(display);

document.body.append(parent_div);


function print_data(callback){

    setTimeout(()=>{
        parent_div.innerHTML="10";
    },1000);
    setTimeout(()=>{
        parent_div.innerHTML="9";
    },2000);
    setTimeout(()=>{
        parent_div.innerHTML="8";
    },3000);
    setTimeout(()=>{
        parent_div.innerHTML="7";
    },4000);
    setTimeout(()=>{
        parent_div.innerHTML="6";
    },5000);
    setTimeout(()=>{
        parent_div.innerHTML="5";
    },6000);
    setTimeout(()=>{
        parent_div.innerHTML="4";
    },7000);
    setTimeout(()=>{
        parent_div.innerHTML="3";
    },8000);
    setTimeout(()=>{
        parent_div.innerHTML="2";
    },9000);
    setTimeout(()=>{
        parent_div.innerHTML="1";
    },10000);
    callback("Happy Independence Day")
    

}

function display(data){
    setTimeout(()=>{
        parent_div.innerHTML=data;
    },11000);
}
