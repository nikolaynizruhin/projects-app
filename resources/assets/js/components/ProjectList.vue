<template>
  <div>
    <br>
    <h1>Projects</h1>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <th scope="row">{{ project.id }}</th>
          <td>{{ project.name }}</td>
          <td>
            <router-link :to="'/projects/' + project.id" class="btn btn-link btn-sm" role="button" aria-pressed="true">View</router-link>
            <router-link :to="'/projects/' + project.id + '/edit'" class="btn btn-success btn-sm" role="button" aria-pressed="true">Edit</router-link>
            <button type="button" class="btn btn-danger btn-sm" @click="remove(project.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        projects: []
      }
    },
    mounted() {
      axios.get('/api/projects')
        .then(response => {
          this.projects = response.data;
        })
        .catch(error => {
          console.log(error);
        });

      console.log('Project List component mounted.')
    },
    methods: {
      remove(id) {
        axios.delete('/api/projects/' + id)
          .then(response => {
            this.projects = this.projects.filter(project => project.id !== id);
          })
         .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>