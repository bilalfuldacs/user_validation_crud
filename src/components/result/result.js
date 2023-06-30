import React from "react";
import "./result.css";
import Card from "../card/Card";
function result(props) {
  return (
    <Card>
      <div className="inner-box">
        {props.preData.map((items) => {
          return (
            <div className="user-boxes">
              <input
                type="text"
                readOnly
                key={items.name}
                value={items.name + " " + items.age + " years old"}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default result;
