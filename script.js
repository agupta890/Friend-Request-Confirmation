var isstatus = document.querySelector("h5");

var add = document.querySelector("#add");

var flag = 0;
add.addEventListener("click",function(){
    if(flag==0){
    isstatus.textContent = "Friends";
    isstatus.style.color="green";
    add.innerHTML ="Remove Friend";
    flag=1;
    }

    else{
            isstatus.innerHTML="Stranger";
            isstatus.style.color ="red";
            add.innerHTML="Add Friend";
            flag=0;
        
    }
})

