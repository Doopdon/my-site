Vue.component('title-elem', {
    template: '<div><h1>This is Vue</h1><p>I like it and I am still learning it</p></div>'
  })

  Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })

  let id = 0

var app = new Vue({
    el: '#app',
    data: {
      newTodo:{text:'new todo', id:id++},
      todos: [
        { text: 'Learn JavaScript', id:id++ },
        { text: 'Learn Vue', id:id++ },
        { text: 'Build something awesome', id:id++ }
      ]
    },
    methods: {
      delTodo(id) {
        app.todos = app.todos.filter(function(x){
          return x.id !== id
        });
      },
      addTodo(){
        let newTodo = Object.assign({},app.newTodo);
        newTodo.id=id++;
        app.todos.push(newTodo);
      },
      editTodo(id){
        let todo = app.todos.find(function(x){
          return x.id === id
        });
        console.log(todo)
        todo.editOn = true;
      },
      saveTodo(id){

      }
    },
  })



  // function addTodo(){
  //   var x = 
  //     app.todos.push(Object.assign({id:id++},app.newTodo))
  // }

  // function delTodo(id){
  //   app.todos = app.todos.filter(function(x){
  //     return x.id != id
  //   });
  // }
  function editTodo(){
    
  }