import axios from "./axios";

export const xmlService = {
    postValidation,
};

function postValidation(uuid, xml) {
  return axios
    .post("/xml", [{ uuid: uuid, xml: xml }])
    .then((response) => {
        console.log(response.data);
      if (response.data[0].estatus) {
          return response.data[0];
      } else {
        console.log(response.data.estatus);
        const error = response.data.message || response.statusText;
        return Promise.reject(error);
      }
    });
}