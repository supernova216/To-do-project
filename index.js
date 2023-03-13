let task1 = {
    name: `Sweep the floor`,
    priority: 'Low',
    status: false
}
let task2 = {
    name:'Get groceries',
    priority:'Medium',
    status: true
}
let task3 = {
    name:'Make dinner',
    priority: 'High',
    status: false
}

if (task3 === `Make dinner`) {
    console.log(`Completed`)
} else {console.log(`Incomplete`)}

let tasks = [task1, task2, task3]


for (let i = 0; i < tasks.length; i++){
    let string = tasks[i]
    if(tasks[i] === 'Make dinner'){
        string += ':Complete'
    } else {
        string += ': Incomplete'
    }

    console.log(string)
}
const addTask = task => {
    tasks.push(task)
}
addTask({name: `Take out the trash`,priority:'Medium',status:false})

console.log(tasks)

const deleteTask = task =>{
    for(let i = 0; i<tasks.length;i++){
        if (tasks[i].name === task){
            tasks.splice([i],1,)
            console.log('Task deleted')
            return
        }
    }
}
deleteTask('Take out the trash')

console.log(tasks)

// const incompleteTasks = tasks.filter((task)=>{
//     if(!tasks.status){
//         return true
//     }else {
//         return false
//     }
// })

const incompleteTasks = tasks.filter((task)=>!task.status)