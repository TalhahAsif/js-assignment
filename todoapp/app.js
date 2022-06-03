var todoInput = document.getElementById("todoInput")
var todolist =document.getElementById("todolist")
var li = document.createElement("li")



function gettodo(){
if(todoInput.value.length >= 5 && todoInput.value.length <= 20){
    var li = document.createElement("li")
    var liText = document.createTextNode(todoInput.value)
    li.className = "p-3"
    li.appendChild(liText)
    todolist.appendChild(li)
    
    var editbtn = document.createElement("button")
    li.appendChild(editbtn).className = "listeditbtn rounded mt-2 "
    editbtn.innerHTML = "EDIT"
    editbtn.setAttribute("onclick","edittodo(this)")

    var delbtn = document.createElement("button")
    li.appendChild(delbtn).className = "listdelbtn btn-primary rounded m-1"
    delbtn.innerHTML = "DEL"
    delbtn.setAttribute("onclick","tododel(this)")

}else{
    alert("More then 5 digit id reqired")
}
}

function alldel(){
    todolist.innerHTML = ""
}
function tododel(e){
    // console.log(e.parentNode);
    var value = e.parentNode
    value.remove()
}
function edittodo(e){
    console.log(e.parentNode);
    var value = todoInput.value
    var edit =prompt ("Wants to edit TODO??", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit
}
