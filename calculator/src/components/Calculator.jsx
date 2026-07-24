import React from "react";

function Calculator() {
  const getValue = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="container">
      <input type="text" placeholder="0" />
      <br />

      <button onClick={getValue} value="(">
        (
      </button>
      <button onClick={getValue} value=")">
        )
      </button>
      <button onClick={getValue} value="%">
        %
      </button>
      <button onClick={getValue} value="AC">
        AC
      </button>

      <button onClick={getValue} value="7">
        7
      </button>
      <button onClick={getValue} value="8">
        8
      </button>
      <button onClick={getValue} value="9">
        9
      </button>
      <button onClick={getValue} value="*">
        *
      </button>

      <button onClick={getValue} value="4">
        4
      </button>
      <button onClick={getValue} value="5">
        5
      </button>
      <button onClick={getValue} value="6">
        6
      </button>
      <button onClick={getValue} value="-">
        -
      </button>

      <button onClick={getValue} value="1">
        1
      </button>
      <button onClick={getValue} value="2">
        2
      </button>
      <button onClick={getValue} value="3">
        3
      </button>
      <button onClick={getValue} value="+">
        +
      </button>

      <button onClick={getValue} value="0">
        0
      </button>
      <button onClick={getValue} value="Back">
        Back
      </button>
      <button className="equal" value="=">
        =
      </button>
      <button onClick={getValue} value="/">
        /
      </button>
    </div>
  );
}

export default Calculator;
