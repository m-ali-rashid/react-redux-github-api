import { handleResponse, handleError } from "./apiUtils";
import axios from 'axios'
const baseUrl = `https://api.github.com`

export function getGit(params) {
  const url = baseUrl + params
  // const url = page ? baseUrl + params +'&page='+ page : baseUrl + params
  console.log(url)
  return axios.get(url)
    .then(handleResponse)
    .catch(handleError)
}

// export function saveCourse(course) {
//   return fetch(baseUrl + (course.id || ""), {
//     method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(course)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
