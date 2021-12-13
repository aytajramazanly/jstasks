let addingText=document.querySelector(".adding-text");
let btnAdd=document.querySelector(".add")
let ul = document.querySelector(".list")
let deletedList=document.querySelector(".deleted")
let addDiv=document.querySelector(".to-do-add")
addingText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' ) {
        addList(addingText.value)
    }
});
btnAdd.addEventListener("click", ()=>{addList(addingText.value)})


function addList(value) {
    let addingTextValue=value
    if (addingTextValue.split("").some(item=>item!==" ")) {
        let li = document.createElement("li");
        let span=document.createElement("span")
        let removerBtn=document.createElement("button")
        removerBtn.classList.add("remove")
        removerBtn.innerText="Remove"
        li.appendChild(span)
        span.innerText=addingText.value;
        ul.append(li);
        li.appendChild(removerBtn);
        addingText.value="";
        removerBtn.addEventListener("click",()=>{
            li.remove();
        })
    }
    else{
        let errorLabel=document.createElement("label")
        errorLabel.innerText="Please fill in the field"
        addDiv.appendChild(errorLabel)
        setTimeout(function(){
           errorLabel.style.opacity=0;
        }, 2000);
        setTimeout(function(){
            errorLabel.remove()
         }, 3500);
    }
}