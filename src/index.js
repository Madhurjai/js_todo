var todo = [] ;
var complete_array = [] ;
    var html = `<input type = "text" id = "new_task">
    <input type = "hidden" id = "task">
    <button onclick = "add()" id = "add">Add</button>
    <button onclick = "update()" id = "update">update</button>` ;
    document.getElementById('items').innerHTML = html ;

function add() {
    var val = document.getElementById('new_task').value ;
    todo.push(val) ;
    display() ;

}
function edit_val(index, val) {
    console.log(val) ;
    document.getElementById('new_task').value = val ;
    document.getElementById('task').value = val ;
    document.getElementById('add').style.display = 'none' ;
    document.getElementById('update').style.display = 'block' ;
}
function update() {
    var val = document.getElementById('task').value ;
    for(var i = 0 ; i < todo.length ; i++) {
        if(todo[i] == val) {
            todo[i] = document.getElementById('new_task').value ;
            break ;
        }
    }
    document.getElementById('add').style.display = 'block' ;
    document.getElementById('update').style.display = 'none' ;
    display() ;
}
function delete_val(index) {
        todo.splice(index,1);
        display() ;
}
function move_to_complete(index, val) {
    todo.splice(index,1);
    complete_array.push(val) ;
    display() ;
}
function move_to_todo(index,val) {
    complete_array.splice(index,1);
    todo.push(val) ;
    display() ;
}
function display() {
    var todo_html = '' ;
    for(var i = 0 ; i < todo.length ; i++) {
        todo_html += ` <li><input type="checkbox" onclick = "move_to_complete(${i},'${todo[i]}')"><label>${todo[i]}</label>
        <input type="text"><button class="edit" onclick = "edit_val(${i},'${todo[i]}')">Edit</button>
              <button class="delete" onclick = "delete_val(${i})">Delete</button></li>` ;
    }
    document.getElementById('incomplete-tasks').innerHTML = todo_html ;
        var complete_html = '' ;
        for(var i = 0 ; i < complete_array.length ; i++) {
        complete_html += ` <li><input type="checkbox" onclick = "move_to_todo(${i},'${complete_array[i]}')" checked><label>${complete_array[i]}</label>
        <input type="text">
              ` ;
    }
    document.getElementById('completed-tasks').innerHTML = complete_html ;
    document.getElementById('new_task').value = "" ;
}