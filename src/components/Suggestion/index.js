import React, { useState, useEffect } from "react";
import Button from "../Button";
import "./suggestion.css";

const Suggestion = () => {
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState(0);
  const [buttonRandom, setButtonRandom] = useState(0);
  const [buttonSingle, setButtonSingle] = useState(0);
  const [buttonGroup, setButtonGroup] = useState(0);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.activity);
        setType(data.type);
        setParticipants(data.participants);
      });
  }, [buttonRandom]);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity?participants=1")
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.activity);
        setType(data.type);
        setParticipants(data.participants);
      });
  }, [buttonSingle]);

  useEffect(() => {
    let randomInt = Math.floor(Math.random() * 8) + 2;
    if (randomInt == 6 || randomInt == 7 || randomInt == 9) {
      randomInt = Math.floor(Math.random() * 3) + 2;
    }
    fetch("https://www.boredapi.com/api/activity?participants=" + randomInt)
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.activity);
        setType(data.type);
        setParticipants(data.participants);
      });
  }, [buttonGroup]);

  let randomNumber = Math.floor(Math.random() * 100);
  const google = `https://letmegooglethat.com/?q=${activity}`;

  return (
    <div>
      <div className="buttonContainer">
        <Button
          buttonText="Random"
          handleClick={() => setButtonRandom({ randomNumber })}
        />
        <Button
          buttonText="Single"
          handleClick={() => setButtonSingle({ randomNumber })}
        />
        <Button
          buttonText="Group"
          handleClick={() => setButtonGroup({ randomNumber })}
        />
      </div>

      <div className="cardContainer">
        {activity && (
          <div className="card">
            <a href={google}>
              <h1>{activity}</h1>
            </a>
            <p className="type">{type}</p>
            <p className="participants">{participants}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
