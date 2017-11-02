// Vue.component('task-list', {

//   template: `
//         <ul>
//             <task v-for="task in tasks" :key='task.id'> {{task.task }} </task>
//         </ul>
//         `,

//   data() {
//     return {
//       tasks: [
//             {id: 1, task: "Go to the store", completed: true},
//             {id: 2, task: "Go to the bank", completed: false},
//             {id: 3, task: "Go to the farm", completed: false},
//             {id: 4, task: "Go to the gym", completed: true}
//       ]
//     }
//   }
// });

// Vue.component('task', {

//   template: '<li><slot></slot></li>',

//   data() {
//     return {

//     }
//   }
// });

// Vue.component('completed-tasks', {
//     template: `
//     `

// });

// Vue.component("message", {
//   props: ['title', 'body'],
//   data() {
//     return {
//       isVisible: true
//     }
//   },
//   template: `
//     <article class='message' v-show='isVisible'>
//       <div class='message-header'>
//         <p>{{title}}</p>
//         <button type='button' @click='hideModal'>X</button>
//       </div>

//       <div class='message-body'>
//         <p>{{body}}</p>
//       </div>
//     </article>
//   `,
//   methods: {
//     hideModal() {
//       this.isVisible = false
//     }
//   }
// });

// Vue.component("modal", {
//   template: `
//     <div class="modal is-active" >
//       <div class="modal-background"></div>
//       <div class="modal-content">
//         <!-- Any other Bulma elements you want -->
//         <div class='box'>
//           <slot></slot>
//         </div>
//       </div>

//       <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>

//     </div>
//   `
// });

// Vue.component('tabs', {
//     template: `
//         <div>
//             <div class="tabs">

//               <ul>

//                 <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">

//                     <a :href='tab.href' @click='selectTab(tab)'>{{tab.name}}</a>

//                 </li>

//               </ul>

//             </div>

//             <div class='tabs-details'>
//                 <slot></slot>
//             </div>
//         </div>
//     `,
//     data() {
//         return {
//             tabs: []
//         }
//     },
//     mounted() {
//         console.log(this.$children)
//     },
//     created() {
//         this.tabs = this.$children
//     },
//     methods: {
//         selectTab(selectedTab) {
//             this.tabs.forEach(tab => {
//                 tab.isActive = (tab.name == selectedTab.name)
//             })
//         }
        
//     },

// });

// Vue.component('tab', {
//     props: {

//         name: {required: true},

//         selected: {default: false}

//     },  

//     template: `

//         <div v-show="isActive"><slot></slot></div>

//     `,

//     data() {

//         return {

//             isActive: false

//         }
//     },

//     computed: {
        
//         href() {

//             return '#' + this.name.toLowerCase().replace(/ /g, '-');

//         }
//     },

//     mounted() {

//         this.isActive = this.selected

//     }

// });

window.Event = new Vue();



// Vue.component('coupon', {

//     template: `

//         <input placeholder="Enter your coupon code" @blur="onCouponApplied">

//     `,

//     methods: {

//         onCouponApplied() {

//             Event.$emit('applied')

//             // this.$emit('applied')

//             // alert('applied!')

//         }

//     }

// });


// Named slots

// Vue.component('modal', {
//     template: `
//         <div class="modal is-active">

//           <div class="modal-background"></div>

//           <div class="modal-card">

//             <header class="modal-card-head">

//               <p class="modal-card-title">

//                 <slot name='header'></slot>

//               </p>

//               <button class="delete" aria-label="close"></button>

//             </header>

//             <section class="modal-card-body">

//                 <slot></slot>

//             </section>

//             <footer class="modal-card-foot">

//                 <slot name='footer'></slot>

//             </footer>

//           </div>

//         </div>    

//     `
// });

Vue.component('progress-view', {
    
    data() {
        return {
            completionRate: 50
        }
    }
})


// root instance goes on the bottom
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
    ],
    showModal: false,
    couponApplied: false,
    completionRate: 50
  },

  computed: {
    incompleteTasks() {
        return this.tasks.filter( task => ! task.completed)
    },

    completedTasks() {
        return this.tasks.filter( task => task.completed)
    }
  },

  methods: {
    onCouponApplied() {
        this.couponApplied = true
    }
  },

  created() {
    Event.$on('applied', () => alert('handling it!'))
  }
})
