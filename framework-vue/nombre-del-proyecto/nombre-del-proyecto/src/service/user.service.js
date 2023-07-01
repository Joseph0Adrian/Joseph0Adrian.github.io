import axios from "./axios";

export const userService = {
  login,
  logout
};

function login(rfc, password) {
    alert(rfc);alert(password);
  return axios
    .post("auth/signin", { rfc: rfc, password: password })
    .then((response) => {
        alert('enviaste al back');
        console.log(response.data);
      if (response.data.token) {
          alert('vas a guardar en localSTORAGE');
          let user = {
            token: response.data.token,
            userName: response.data.username,
          };

          localStorage.setItem("user", JSON.stringify(user));
          return user;
      } else {
        console.log(response.data.status);
        const error = response.data.message || response.statusText;
        return Promise.reject(error);
      }
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}