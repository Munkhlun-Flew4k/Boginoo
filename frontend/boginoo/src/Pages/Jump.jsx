import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Jump = () => {
  const { id: id } = useParams();
  console.log(id);
  axios
    .get(`http://localhost:8000/${id}`, {
      id: id,
    })
    .then(function (response) {
      window.location.replace(response.data.data.originalURL);
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div></div>;
};
