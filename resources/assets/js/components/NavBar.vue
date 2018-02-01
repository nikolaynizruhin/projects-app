<template functional>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/projects" class="navbar-brand">Projects App</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/projects" class="nav-item">
          <a class="nav-link">Projects</a>
        </router-link>
        <router-link tag="li" to="/projects/add" class="nav-item">
          <a class="nav-link">Add</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
