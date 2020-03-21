import C from "./constants";
import axios from "axios";

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

export const projectDetails = project => ({
  type: C.SELECTED_PROJECT,
  payload: project
});

export const fetchProjectsData = projects => dispatch => {
  //let baseURL = "https://ykd-serv.herokuapp.com";
  switch (projects) {
    case "architecture":
      axios
        .get(C.BASE_URL + C.PROJECTS_PATH + projects)
        .then(response => {
          dispatch(architectureProjects(response.data));
        })
        .catch(err => {
          console.log(err);
        });
      break;
    case "interior":
      axios
        .get(C.BASE_URL + C.PROJECTS_PATH + projects)
        .then(response => {
          dispatch(interiorProjects(response.data));
        })
        .catch(err => {
          console.log(err);
        });
      break;
    case "construction":
      axios
        .get(C.BASE_URL + C.PROJECTS_PATH + projects)
        .then(response => {
          dispatch(constructionProjects(response.data));
        })
        .catch(err => {
          console.log(err);
        });
      break;
    default:
      /*axios
        .get(baseURL + "/apis/archi")
        .then(response => {
          dispatch(architectureProjects(response.data));
        })
        .catch(err => {
          console.log(err);
        });*/
      break;
  }
};

export const fetchProjectDetails = project => dispatch => {
  axios
    .get(C.BASE_URL + "/apis/project/" + project)
    .then(response => {
      dispatch(projectDetails(response.data));
    })
    .catch(err => {
      console.log(err);
    });
};
