import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async ({ searchQuery }) => {
    try {
      const response = await yelp.get("/businesses/search", {
        params: { limit: 50, term: searchQuery, location: "san jose" },
      });
      setResult(response.data.businesses);
    } catch (e) {
      setErrorMessage(`${e}`);
    }
  };

  useEffect(() => {
    searchApi({ searchQuery: "" });
  }, []);

  return [searchApi, result, errorMessage];
};
