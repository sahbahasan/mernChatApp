import React from "react";
import { AllChats } from "../AllChats/AllChats";
import MessageBox from "../MessageBox/MessageBox";

import styles from "./styles.module.css";

const Chats = () => {
  return (
    <div className={styles.container}>
      <AllChats />
      <MessageBox />
    </div>
  );
};

export default Chats;
