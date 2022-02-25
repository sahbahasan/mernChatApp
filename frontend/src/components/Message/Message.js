import React from "react";
import styles from "./styles.module.css";
import rando from "./../../images/rando.jpg";

const Message = (props) => {
  const style = {
    extraStylesContainer: {
      display: "flex",
      justifyContent: props.sender === "1" ? "flex-start" : "flex-end",
      marginBottom: "13px",
    },
    extraStylesInnerContainer: {
      display: "flex",
      // justifyContent: props.sender === "1" ? "flex-start" : "flex-end",
      flexDirection: props.sender === "1" ? "row" : "row-reverse",
      alignItems: "flex-end",
      maxWidth: "46%",
      minWidth: "38%",
    },
    textDiv: {
      textAlign: "left",
      padding: "10px",
      fontSize: "12px",
      backgroundColor: "rgba(233, 233, 233, 0.815)",
      fontFamily: "Roboto",
      borderRadius: "20px",
      marginLeft: "10px",
      marginRight: "10px",
      wordWrap: "break-word",
      overflowWrap: "break-word",
      maxWidth: "100%",
      borderBottomLeftRadius: props.sender === "1" ? "0" : "10px",
      borderBottomRightRadius: props.sender === "1" ? "10px" : "0",
    },
  };

  return (
    <div className={styles.container} style={style.extraStylesContainer}>
      <div
        style={style.extraStylesInnerContainer}
        className={styles.innerContainer}
      >
        <div className={styles.profilePicContainer}>
          <img src={rando}></img>
        </div>
        <div style={style.textDiv}>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
