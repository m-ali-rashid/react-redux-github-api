export async function handleResponse(response) {
  if (response.status === 200) {
    // console.log(response)
    return response
    // return response.data
  }
  // if (response.status === 401) return console.log("Error")
  // if (response.status === 401) {
  //   const error = await response.text();
  //   throw new Error(error);
  // }
  // throw new Error("Network response was not ok.");
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  // console.error("API call failed. " + error);
  // throw error;
  console.log(error);

}
