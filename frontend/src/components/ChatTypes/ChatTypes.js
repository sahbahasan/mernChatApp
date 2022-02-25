import React from "react";
import styles from "./styles.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ChatTypes = () => {
  const types = [
    { name: "All chats", desc: "See all your chats" },
    { name: "Starred chats", desc: "See all your chats" },
    { name: "Drafts", desc: "See all your chats" },
    { name: "Archived chats", desc: "See all your chats" },
  ];
  return (
    <div className={styles.allTypes}>
      {types.map((el, i) => {
        return (
          <div
            key={i}
            className={i === 3 ? styles.activeItem : styles.listItem}
          >
            <div className={styles.iconDiv}>
              <MailOutlineIcon sx={{ fontSize: "20px" }}></MailOutlineIcon>
            </div>
            <div className={styles.textDiv}>
              <p className={styles.typeText}>{el.name}</p>
              <p className={styles.typeDesc}>{el.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatTypes;
