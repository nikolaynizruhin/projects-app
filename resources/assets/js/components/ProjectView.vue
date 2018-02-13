<template>
  <h1>Project: {{ project.name }}</h1>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        project: {}
      }
    },
    mounted() {
      axios.get('/api/projects/' + this.$route.params.id)
        .then(response => {
          this.project = response.data;
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
</script>