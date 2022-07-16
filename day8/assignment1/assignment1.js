var todo = [];
function add(name, description) {
    return todo.push({ name: name, description: description, done: false });
}
function remove(index) {
    return todo.splice(index, 1);
}
function list() {
    todo.forEach(function (todo, index) {
        console.log(index + " -" + todo.name);
    });
}
function update(index, name, description) {
    todo[index].name = name;
    todo[index].description = description;
    return todo[index];
}
