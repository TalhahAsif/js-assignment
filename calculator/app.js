var input = document.getElementById("input")

function getvalue(num){
    input.value += num 
}
function total(){
    input.value = eval(input.value)
}
function clear(){
    input.value = ""
}
function back(){
    var value = input.value
    var sub = value.slice(0, -1)
    input.value = sub 
}