const store = {
  state: {
    projects: []
  },
  mutations: {
    getProjects (state, projects) {
      state.projects = projects;
    },
    addProject (state, project) {
      state.projects.push(project);
    },
    editProject (state, project) {
      state.projects = state.projects.map((currentProject, i, projects) => {
        if (currentProject.id === project.id) return project;

        return currentProject;
      });
    },
    removeProject (state, id) {
      state.projects = state.projects.filter(project => project.id !== id)
    }
  }
};

export default store;