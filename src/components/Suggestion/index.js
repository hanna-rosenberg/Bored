import React from "react";

const Suggestion = (props) => {
  const [data, setFetch] = useState[null];

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setFetch(data));
  }, []);

  return <h1>{data.activity}</h1>;
};

export default Suggestion;
