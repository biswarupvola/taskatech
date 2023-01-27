import axios from "axios";
export const submitResume = (dataToSend) => {
    let baseURL = "http://localhost:3000/post/";
    axios
      .post(baseURL, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },  
        title: "",
        body: dataToSend
      })
      .then((response) => {
        console.log(response.data);
      });
  }