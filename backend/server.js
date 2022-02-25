const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/api/v1/chats", (req, res, next) => {
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
  res.status(200).json({
    status: "success",
    data: chats,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("Server Started at port 5000"));
