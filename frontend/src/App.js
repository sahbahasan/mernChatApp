import React from "react";
import styles from "./App.module.css";
import ChatTypes from "./components/ChatTypes/ChatTypes";
import LogoDiv from "./components/LogoSection/LogoDiv";
import ChatArea from "./components/ChatArea/ChatArea";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    //----------------Chat Page-------------------------------------------------------------
    // <div className={styles.background}>
    //   <div className={styles.leftBar}>
    //     <LogoDiv />
    //     <ChatTypes />
    //   </div>

    //   <div className={styles.chatbox}>
    //     <ChatArea />
    //   </div>
    // </div>
    //---------------------------------------------------------------------------------------
    <>
      <Signup />
    </>
  );
}

export default App;
