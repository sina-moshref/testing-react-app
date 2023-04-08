import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h3>hello</h3>
      {!changeText ? <p>nice to meet you</p> : <p>changed</p>}
      <button onClick={changeTextHandler}>change</button>
    </div>
  );
};

export default Greeting;
