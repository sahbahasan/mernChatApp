import React from "react";
import styles from "./styles.module.css";
import rando from "./../../images/rando.jpg";
import Message from "../Message/Message";
import { useRef, useEffect } from "react";

const MessageBox = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollIntoView({ block: "end" });
  });

  const chats = [
    { sender: "1", message: "Hey girl wassup!", time: "5:19 am" },
    { sender: "2", message: "I am good!", time: "5:20 am" },
    {
      sender: "1",
      message:
        "I got some work for you, tell me whenever you get back from work. This is urgent",
      time: "5:20 am",
    },
    {
      sender: "2",
      message:
        "Sure! I'll text you as soon as I get back. You can tell me the problem right now though",
      time: "5:20 am",
    },
    {
      sender: "2",
      message:
        "Sure! I'll text you as soon as I get back. You can tell me the problem right now though",
      time: "5:20 am",
    },
    {
      sender: "2",
      message:
        "Sure! I'll text you as soon as I get back. You can tell me the problem right now though",
      time: "5:20 am",
    },
    {
      sender: "1",
      message:
        "Sure! I'll text you as soon as I get back. You can tell me the problem right now though",
      time: "5:20 am",
    },
    {
      sender: "2",
      message:
        "Sure! I'll text you as soon as I get back. You can tell me the problem right now though",
      time: "5:20 am",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.imgContainer}>
          <img src={rando}></img>
        </div>
        <div className={styles.details}>
          <h1>Sahba</h1>
          <p>Last seen 4 minutes ago</p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <>
          {chats.map((el) => {
            return <Message text={el.message} sender={el.sender}></Message>;
          })}
          <div ref={scrollRef}></div>
        </>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.input}>
          <input></input>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
