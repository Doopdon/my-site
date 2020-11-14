Vue.component('title-elem', {
    template: '<h1>This is Vue</h1><p>I like it and I am still learning it</p>'
  })

  Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })

var app = new Vue({
    el: '#app',
    data: {
      newTodo:{text:'new todo'},
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })


  

  

  function addTodo(){
      app.todos.push(Object.assign({},app.newTodo))
  }