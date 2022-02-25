import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const AllChats = () => {
  const allChats = [
    { name: "John Doe", lastMessage: "Hi! This is...", time: "14:59 pm" },
    { name: "Jane Doe", lastMessage: "Hi! This is...", time: "4:59 pm" },
    { name: "Sahba Hasan", lastMessage: "Hello! I am...", time: "5:19 am" },
    { name: "Anu Raghav", lastMessage: "Hi! This is...", time: "10:59 pm" },
  ];
  return (
    <div className={styles.container}>
      {allChats.map((el, i) => {
        return (
          <div className={i !== 0 ? styles.listItem : styles.active} key={el}>
            <div className={styles.avatar}>
              <Avatar
                sx={{
                  backgroundColor: "purple",
                  height: "20px",
                  width: "20px",
                  padding: "4px",
                }}
                {...stringAvatar(el.name)}
              ></Avatar>
            </div>
            <div className={styles.details}>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.lastMessage}>{el.lastMessage}</p>
            </div>
            <div className={styles.time}>
              <p>{el.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
