
var input = document.querySelector(".input");
var addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click",addList);
input.addEventListener("keypress",function(event){
    if( event.keyCode== 13 ){

        addList();
    }
   

  });

function addList(e){
    var notComplete = document.querySelector(".notComplete");
    var complete = document.querySelector(".complete");

    var newList = document.createElement("li");
    var chkBtn = document.createElement("button");
    chkBtn.className = "done";
    var delBtn = document.createElement("button");
    delBtn.className = "remove";


    chkBtn.innerHTML = "Done";
    delBtn.innerHTML = "Remove";


            if(input.value!==''){
                newList.textContent = input.value;
                input.value = '';
                notComplete.appendChild(newList);
                newList.appendChild(chkBtn);
                newList.appendChild(delBtn);

            }

            chkBtn.addEventListener("click",function(){
                var parent = this.parentNode;
                parent.remove();
                complete.appendChild(parent);
                chkBtn.style.display = "none";
                
            });

            delBtn.addEventListener("click",function(){
                var parent = this.parentNode;
                parent.remove();

            });
            

     }       


