import React from "react";
import chatIcon from "../../Assets/Icons/Chat-SVGicon.svg";

export function MessageLaucher() {
  return (
    <button className="message-button">
      <img src={chatIcon} alt="Message True Hawkes Icon" />
    </button>
  );
}
