const { createApp } = Vue

createApp({
	data() {
		return {
			toDoTasks: [
                {
                    text: 'Comprare il pane',
                    done: false,
                }, 
                {
                    text: 'Comprare croccantini per il cane',
                    done: false,
                }, 
                {
                    text: 'Ritirare la macchina dall autolavaggio',
                    done: false,
                }, 
                {
                    text: 'Dare da bere alle piante',
                    done: false,
                }, 
                {
                    text: 'Restare umili',
                    done: false,
                }, 

			],

			inputValue: '',
		}
	},
	methods: {

		addTask() {

			const newToDoTask = this.inputValue
			this.toDoTasks.push({text: newToDoTask, done: false}) 
			this.inputValue = ''
		},
        addTextClass(classIndex){

            if(!this.toDoTasks[classIndex].done){

                this.toDoTasks[classIndex].done = true
            }else{
                this.toDoTasks[classIndex].done = false
            }
        },
		removeTask(startIndex) {

			this.toDoTasks.splice(startIndex, 1)
		},
	},
}).mount('#app')
