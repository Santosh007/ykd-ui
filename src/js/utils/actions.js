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

export const fetchProjectsData = project => dispatch => {
  let baseURL = "https://ykd-serv.herokuapp.com";
  switch (project) {
    case "Architecture":
      axios
        .get(baseURL + "/apis/archi")
        .then(response => {
          dispatch(architectureProjects(response.data));
        })
        .catch(err => {
          console.log(err);
        });
      break;
    case "Interior":
      console.log("In actions " + project);
      axios
        .get(baseURL + "/apis/archi")
        .then(response => {
          dispatch(interiorProjects(response.data));
        })
        .catch(err => {
          console.log(err);
        });
      break;
    case "Construction":
      axios
        .get(baseURL + "/apis/archi")
        .then(response => {
          dispatch(constructionProjects(response.data));
        })
        .catch(err => {
          console.log(err);
        });
      break;
    default:
      break;
  }
};
