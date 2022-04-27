import Button from "../Button";
import React, { useState, useEffect } from "react";

const Suggestion = () => {
  const [activity, setActivity] = useState();
  const [type, setType] = useState();
  const [participants, setParticipants] = useState();

  const getSuggestion = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
  };

  const getSingleSuggestion = async () => {
    const response = await fetch(
      "https://www.boredapi.com/api/activity?participants=1"
    );
    const data = await response.json();
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
  };

  const getGroupSuggestion = async () => {
    let randomInt = Math.floor(Math.random() * 8) + 2;
    if (randomInt == 6 || randomInt == 7 || randomInt == 9) {
      randomInt = Math.floor(Math.random() * 3) + 2;
    }
    console.log(randomInt);
    const response = await fetch(
      "https://www.boredapi.com/api/activity?participants=" + randomInt
    );
    const data = await response.json();
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
    console.log(data);
  };
  return (
    <div>
      <Button buttonText="Random" handleClick={() => getSuggestion()} />
      <Button buttonText="Single" handleClick={() => getSingleSuggestion()} />
      <Button buttonText="Group" handleClick={() => getGroupSuggestion()} />
      <h1>{activity}</h1>
      <p>Type: {type}</p>
      <p>Participants: {participants}</p>
    </div>
  );
};

export default Suggestion;
