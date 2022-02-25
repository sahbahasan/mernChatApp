import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import styles from "./styles.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <div className={styles.titleInner}>
          <div className={styles.iconDiv}>
            <ion-icon
              name="ios-chatbubbles"
              style={{ color: "#6b32ae", fontSize: "18px" }}
            ></ion-icon>
          </div>
          <p className={styles.message}>Messages</p>
        </div>
        <div className={styles.iconDiv}>
          <SearchIcon sx={{ fontSize: "18px", color: "#6b32ae" }} />
        </div>
      </div>
      <div className={styles.secondaryInner}>
        <div className={styles.addConversation}>
          <div className={styles.iconDiv2}>
            <ModeEditOutlinedIcon />
          </div>
          <p className={styles.newConvoText}>new conversation</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
