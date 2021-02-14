const app = {
    data() {
        return {
            msg: 'Hello, Vue3',

            tasks: [{image: 'images/Doraemon.jpg',article: 'Doraemon',done: false},
            {image: 'images/Mr-Bean.jpg',article: 'Mr.Bean' ,done: false},
            {image: 'images/Tom-and-jerry.jpg',article: 'Tom and Jerry' ,done: false}
        ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countDone(){
            return this.tasks.filter( t => t.done ).length
        }
    }

}
Vue.createApp(app).mount('#app')