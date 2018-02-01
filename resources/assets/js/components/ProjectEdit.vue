<template>
  <div>
    <br>
    <h1>Project Edit</h1>
    <br>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name">
    </div>
    <button @click="update" type="button" class="btn btn-primary">Submit</button>
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
    mounted() {
      axios.get('/api/projects/' + this.$route.params.id)
        .then(response => {
          this.name = response.data.name;
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      update() {
        axios.put('/api/projects/' + this.$route.params.id, { name: this.name })
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