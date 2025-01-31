<script lang="ts">
interface user {
  name: string
  status: boolean
  age: number
  tasks: Array<string>
}

interface task {
  todo: string
}

export default {
  data() {
    return {
      user: {
        name: 'Mingma Tenzing Sherpa',
        status: false,
        age: 20,
        tasks: ['Task One', 'task two', 'task three'],
      } as user,
      task: {
        todo: '',
      } as task,
    }
  },
  methods: {
    addTask(task: task) {
      if (task.todo == '') {
        return window.alert("Can't pass an empty string")
      }
      const check = this.user.tasks.filter((data) => task.todo == data)
      if (check.length > 0) {
        return window.alert('data exists already')
      }

      this.user.tasks.push(task.todo)
    },
  },
}
</script>

<template>
  <h1>The name is {{ user.name }}</h1>
  <div v-if="user.status == false">
    <p>Current user status is {{ user.status }}</p>
  </div>

  <div v-if="user.status == true">
    <p>Current user status is {{ user.status }}</p>
  </div>
  <div>
    <p>Want to change status?</p>
    <button @click="user.status = !user.status">change status</button>
  </div>

  <ul v-for="task in user.tasks" :key="task">
    <li>{{ task }}</li>
  </ul>

  <div>
    <p>Add Tasks</p>
    <input v-model="task.todo" />
    <p>{{ task.todo }}</p>
    <button @click="addTask(task)">Add Task</button>
  </div>
</template>
