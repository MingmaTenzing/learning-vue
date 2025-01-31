<script setup lang="ts">
import { ref, onMounted } from 'vue'
interface task {
  todo: string
}
const assignedtask = ref('')
const phone = ref(98606998810)
const user = ref({
  name: 'Mingma Tenzing Sherpa',
  status: false,
  age: 20,
  tasks: ['Task One', 'task two', 'task three'],
})
const task = ref({
  todo: '',
})

const addTask = () => {
  if (assignedtask.value == '') {
    return window.alert("Can't pass an empty string")
  }
  const check = user.value.tasks.filter((data) => task.value.todo == data)
  if (check.length > 0) {
    return window.alert('data exists already')
  }

  user.value.tasks.push(assignedtask.value)
  assignedtask.value = ''
}

function deleteTask(task: string) {
  const item = user.value.tasks.filter((data) => task !== data)
  user.value.tasks = item
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    user.value.tasks = data.map((task: any) => task.title)
  } catch (error) {
    throw error
  }
})
</script>

<template>
  <p>{{ phone }}</p>
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
    <span><button v-on:click="deleteTask(task)">Delete</button></span>
  </ul>

  <div>
    <p>Add Tasks</p>
    <input v-model="assignedtask" />
    <p>{{ assignedtask }}</p>
    <button @click="addTask()">Add Task</button>
  </div>

  <form @submit.prevent="addTask()">
    <h2>Here's a form to add tasks instead</h2>
    <label>Task</label>
    <input v-model="assignedtask" />
    <button type="submit">Submit</button>
  </form>
</template>
