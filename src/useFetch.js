import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null); // use a hook to save the err message

  useEffect(() => {
    console.log("use effect ran");
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        }) // response can still be returned with issues and err won't be thrown, if res not ok then means issues and can put another err message to display

        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null); // if another request was made successfully get rid of err message
        })
        .catch((err) => {
          //catch will catch any network errors, if it can't reach server
          setIsPending(false); //remove loading message as not loading anymore
          setError(err.message);
        });
    }, 1000);
  }, [url]); // => whenever url change it will re-run function

  return { data, isPending, error };
};

export default useFetch;
