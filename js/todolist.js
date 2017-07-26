var toDoList = []; 
function agregar() {
  var list = document.getElementById("list").value;
  toDoList.push(list);

  var respuesta = "";
  for(i in toDoList){
    respuesta += (Number(i)+1) + ". " + toDoList[i].slice(0,1).toUpperCase() + toDoList[i].slice(1) + "<br>";
  }
  document.getElementById('respuesta').innerHTML = respuesta;
  list = "";
}
console.log(toDoList);