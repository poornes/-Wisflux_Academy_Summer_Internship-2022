type todos = {
    name: string,
    description: string,
    done: boolean
    }
    
    let todo: Array<todos> = [];
    
    function add(name: string, description: string): number {
       return todo.push({name: name, description: description, done: false});
    }
    
    function remove(index: number): Array<todos> {
       return todo.splice(index, 1);
    }
    
    function list(): void {
       todo.forEach(function (todo: todos, index: number) {
          console.log(index + " -" + todo.name);
       });
    }
    
    function update(index: number, name: string, description: string): todos {
       todo[index].name = name;
       todo[index].description = description;
       return todo[index];
    }