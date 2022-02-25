import React from "react";
import Chats from "../ChatBox/Chats";
import Search from "../Search/Search";
import styles from "./styles.module.css";

const ChatArea = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Chats />
    </div>
  );
};

export default ChatArea;
