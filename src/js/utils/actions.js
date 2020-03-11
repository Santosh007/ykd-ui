import C from "./constants";

export const architectureProjects = projects => ({
  type: C.ARCHITECTURE_PROJECTS,
  payload: projects
});

export const interiorProjects = projects => ({
  type: C.INTERIOR_PROJECTS,
  payload: projects
});

export const constructionProjects = projects => ({
  type: C.CONSTRUCTION_PROJECTS,
  payload: projects
});

export const fetchProjectsData = project => dispatch => {
  let baseURL = "";
  switch (project) {
    case "Architecture":
      console.log(baseURL);
      break;
    case "Interior":
      console.log(baseURL);
      break;
    case "Construction":
      console.log(baseURL);
      break;
    default:
      break;
  }
};
