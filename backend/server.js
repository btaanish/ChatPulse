// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";
// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1842510",
  key: "27b0aabfb41da6187951",
  secret: "c7ed30b8f242ba50669c",
  cluster: "ap1",
  useTLS: true,
});

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// DB config
const connection_url =
  "mongodb+srv://btaanish07:81QtVDEhGkjSuED2@cluster0.lpsjvqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connection_url);

//

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connection");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType == "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
      });
    } else {
      console.log("Error trigerring Pusher");
    }
  });
});

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", async (req, res) => {
  try {
    const data = await Messages.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err); //Internal Server error
  }
});

app.post("/messages/new", async (req, res) => {
  const dbMessage = req.body;

  try {
    const data = await Messages.create(dbMessage);
    res.status(201).send(`new message created \n ${data}`);
  } catch (err) {
    res.status(500).send(err); //Internal Server error
  }
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
