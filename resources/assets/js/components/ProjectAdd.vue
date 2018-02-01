<template>
  <div>
    <br>
    <h1>Project Add</h1>
    <br>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name">
    </div>
    <button @click="add" type="button" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      add() {
        axios.post('/api/projects/', { name: this.name })
          .then(response => {
            this.$router.push('/projects')
          })
         .catch(error => {
            console.log(error);
          });
      }
  }
  }
</script>