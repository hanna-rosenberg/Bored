import React, { useState, useEffect } from "react";
import Button from "../Button";
import "./suggestion.css";

const Suggestion = () => {
  const [activity, setActivity] = useState(null);
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(0);

  const [button, setButton] = useState(0);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setActivity(data.activity));
  }, [button]);

  // const getSuggestion = async () => {
  //   const response = await fetch("https://www.boredapi.com/api/activity");
  //   const data = await response.json();
  //   setActivity(data.activity);
  //   setType(data.type);
  //   setParticipants(data.participants);
  // };

  // const getSingleSuggestion = async () => {
  //   const response = await fetch(
  //     "https://www.boredapi.com/api/activity?participants=1"
  //   );
  //   const data = await response.json();
  //   setActivity(data.activity);
  //   setType(data.type);
  //   setParticipants(data.participants);
  // };

  // const getGroupSuggestion = async () => {
  //   let randomInt = Math.floor(Math.random() * 8) + 2;
  //   if (randomInt == 6 || randomInt == 7 || randomInt == 9) {
  //     randomInt = Math.floor(Math.random() * 3) + 2;
  //   }
  //   console.log(randomInt);
  //   const response = await fetch(
  //     "https://www.boredapi.com/api/activity?participants=" + randomInt
  //   );
  //   const data = await response.json();
  //   setActivity(data.activity);
  //   setType(data.type);
  //   setParticipants(data.participants);
  //   console.log(data);
  // };

  const google = `https://letmegooglethat.com/?q=${activity}`;

  return (
    <div>
      <div className="buttonContainer">
        <Button buttonText="Random" handleClick={() => setButton("changed")} />
        <Button buttonText="Random" handleClick={() => setButton("changed2")} />
        <Button buttonText="Random" handleClick={() => setButton("changed3")} />
        {/* <Button buttonText="Random" handleClick={() => getSuggestion()} />
        <Button buttonText="Single" handleClick={() => getSingleSuggestion()} />
        <Button buttonText="Group" handleClick={() => getGroupSuggestion()} /> */}
      </div>
      <div className="cardContainer">
        {activity && (
          <div className="card">
            <a href={google}>
              <h1>{activity}</h1>
            </a>
<<<<<<< HEAD
            <p className="type">{type}</p>
            <p className="participants">{participants}</p>
=======
            <p class="type">Type: {type}</p>
            <p class="participants">Participants: {participants}</p>
>>>>>>> cda8f2001e4fb6b718d1cccad0fe7df54a0e6ac4
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
