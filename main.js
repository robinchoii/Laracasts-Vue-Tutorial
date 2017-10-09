Vue.component('task-list', {

  template: `
        <ul>
            <task v-for="task in tasks" :key='task.id'> {{task.task }} </task>
        </ul>
        `,

  data() {
    return {
      tasks: [
            {id: 1, task: "Go to the store", completed: true},
            {id: 2, task: "Go to the bank", completed: false},
            {id: 3, task: "Go to the farm", completed: false},
            {id: 4, task: "Go to the gym", completed: true}
      ]
    }
  }
});

Vue.component('task', {

  template: '<li><slot></slot></li>',

  data() {
    return {

    }
  }
});

Vue.component('completed-tasks', {
    template: `
    `

});

// Vue.component('welcome', {

//   template: '<h1>{{message}}</h1>',

//   data() {
//     return {
//       message: 'Welcome to Stone Korean Restaurant'
//     }
//   }
// });

// Vue.component('lunch', {

//   template: "<h3>{{message}}</h3>",

//   data() {
//     return {
//       menu: ['tofu soup', 'kalbi', 'bulgogi', 'hot pot'],
//       message: "Today's lunch special is ",
//       name: 'robin'

//     }
//   }

// });

// Vue.component('dinner', {
//   template: '<h3>Dinner Menu</h3>'
// })




Vue.component("message", {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{title}}</p>
            <button @click="hideModal">X</button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
    </article>
    `,
    methods: {
        hideModal() {
            this.isVisible = false
        }
    }
})




let app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
    tasks: [
        {id: 1, task: "Go to the store", completed: true},
        {id: 2, task: "Go to the bank", completed: false},
        {id: 3, task: "Go to the farm", completed: false},
        {id: 4, task: "Go to the gym", completed: true},
        {id: 5, task: "Go to the church", completed: false},
        {id: 6, task: "Go to the game", completed: false}
    ]
  },

  computed: {
    incompleteTasks() {
        return this.tasks.filter( task => ! task.completed)
    },

    completedTasks() {
        return this.tasks.filter( task => task.completed)
    }
  }
})
