
var app = new Vue({
  el: '#app',
  data: {
    newName: '',
    message: 'Hello World',
    names: [ "Joe", "Mary", "Jane", 'Jack'],
    title: 'Now the title is being set through javascript',
    className: 'color-red',
    isLoading: false,
    active: false,
    tasks: [
          {description: 'Go to the store', completed: true},
          {description: 'Finish screencast', completed: false},
          {description: 'Make donation', completed: false},
          {description: 'Clear inbox', completed: false},
          {description: 'Make dinnerr', completed: false},
          {description: 'Clean room', completed: true}
    ]
  },
  // all ways keep methods nested inside methods object
  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
    toggleClass() {
      this.active = true;
    }
  },
  computed: {
    // reversedMessage() {
    //   return this.message.split('').reverse().join('');
    // }
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    },
    incompleteTasks() {
      // ES6
      return this.tasks.filter(task => ! task.completed);
      // ES5
      // this.tasks.filter(function(task) {
      //   return ! task.completed;
      // })
    }
  }
})
