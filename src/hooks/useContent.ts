import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URI } from "../utils/config";

export function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URI}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      setContents(response.data.content);
    })
  }, [])

  return contents;
}