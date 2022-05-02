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
  const [hasClicked, setHasClicked] = useState(false);

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
    if (randomInt === 6 || randomInt === 7 || randomInt === 9) {
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
          handleClick={() => {
            setButtonRandom({ randomNumber });
            setHasClicked(true);
          }}
        />
        <Button
          buttonText="Single"
          handleClick={() => {
            setButtonSingle({ randomNumber });
            setHasClicked(true);
          }}
        />
        <Button
          buttonText="Group"
          handleClick={() => {
            setButtonGroup({ randomNumber });
            setHasClicked(true);
          }}
        />
      </div>

      <div className="cardContainer">
        {activity && hasClicked && (
          <div className="card">
            <img
              src="https://media.giphy.com/media/0k5oV0ccwC3pB6QXOL/giphy.gif"
              width="700"
              height="500"
              alt="cloud"
            ></img>
            <div className="centered">
              <a href={google}>
                <h1>{activity}</h1>
              </a>
              <p className="type">Type: {type}</p>
              <p className="participants">Participants: {participants}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
