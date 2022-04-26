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

  return (
    <div>
      <h1>{activity}</h1>
      <p>Type: {type}</p>
      <p>Participants: {participants}</p>
      <Button buttonText="Random" handleClick={() => getSuggestion()} />
      <Button buttonText="Single" handleClick={() => getSingleSuggestion()} />
    </div>
  );
};

export default Suggestion;
