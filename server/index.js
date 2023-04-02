const express = require("express");
const mongoose = require("mongoose");
const router = require("./route/userRoute");
const adminRouter = require("./route/adminRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const cronJob = require("./cron");
const videoSleep = require("./models/genericVid/videosSleep");
const videosProd = require("./models/genericVid/videosProd");
const videosYoga = require("./models/genericVid/videosYoga");
const sleepLevel = require("./models/leveledVid/levelSleep");
const prodLevel = require("./models/leveledVid/levelProd");
const yogaLevel = require("./models/leveledVid/levelYoga");

cronJob.sendMailUser();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
app.use("/api", adminRouter);
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.bq5eppq.mongodb.net/AuthDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8000);
    console.log("The Database is connected.");
  })
  .catch((e) => console.log(e));
const User = mongoose.model("user");
app.get("/getAUser", async (req, res) => {
  try {
    const allAUser = await User.find({});
    res.send({ status: "ok", data: allAUser });
  } catch (e) {
    console.log(e);
  }
});
app.post("/removeUser", async (req, res) => {
  const { userId } = req.body;

  try {
    User.deleteOne({ _id: userId }, function (err) {
      console.log(err);
    });
    res.send({ status: "ok", data: "User Removed" });
  } catch (e) {
    console.log(e);
  }
});

//Add videos to mongodb
app.post("/addVidS", (req, res) => {
  const vid = req.body;
  console.log(vid);
  videoSleep.create(vid, (e, data) => {
    if (e) {
      res.status(500).send(e.message);
    } else {
      res.status(201).send(data);
    }
  });
});
app.post("/addVidSlevel", (req, res) => {
  const vid = req.body;
  console.log(vid);
  sleepLevel.create(vid, (e, data) => {
    if (e) {
      res.status(500).send(e.message);
    } else {
      res.status(201).send(data);
    }
  });
});
app.post("/addVidP", (req, res) => {
  const vid = req.body;
  console.log(vid);
  videosProd.create(vid, (e, data) => {
    if (e) {
      res.status(500).send(e.message);
    } else {
      res.status(201).send(data);
    }
  });
});
app.post("/addVidPlevel", (req, res) => {
  const vid = req.body;
  console.log(vid);
  prodLevel.create(vid, (e, data) => {
    if (e) {
      res.status(500).send(e.message);
    } else {
      res.status(201).send(data);
    }
  });
});
app.post("/addVidY", (req, res) => {
  const vid = req.body;
  console.log(vid);
  videosYoga.create(vid, (e, data) => {
    if (e) {
      res.status(500).send(e.message);
    } else {
      res.status(201).send(data);
    }
  });
});
app.post("/addVidYlevel", (req, res) => {
  const vid = req.body;
  console.log(vid);
  yogaLevel.create(vid, (e, data) => {
    if (e) {
      res.status(500).send(e.message);
    } else {
      res.status(201).send(data);
    }
  });
});
const Videos1 = mongoose.model("videoSleep");
const Videos2 = mongoose.model("videoYoga");
const Videos3 = mongoose.model("videoProd");
const levelVid1 = mongoose.model("levelSleep");
const levelVid2 = mongoose.model("levelYoga");
const levelVid3 = mongoose.model("levelProd");

app.get("/getVideoS", async (req, res) => {
  try {
    const allVideoS = await Videos1.find({});
    res.send({ status: "ok", data: allVideoS });
  } catch (e) {
    console.log(e);
  }
});
app.get("/getVideoY", async (req, res) => {
  try {
    const allVideoP = await Videos2.find({});
    res.send({ status: "ok", data: allVideoP });
  } catch (e) {
    console.log(e);
  }
});
app.get("/getVideoP", async (req, res) => {
  try {
    const allVideoY = await Videos3.find({});
    res.send({ status: "ok", data: allVideoY });
  } catch (e) {
    console.log(e);
  }
});

//get leveled videos

app.get("/getVideoSlevel", async (req, res) => {
  try {
    const allVideoS = await levelVid1.find({});
    res.send({ status: "ok", data: allVideoS });
  } catch (e) {
    console.log(e);
  }
});
app.get("/getVideoYlevel", async (req, res) => {
  try {
    const allVideoP = await levelVid2.find({});
    res.send({ status: "ok", data: allVideoP });
  } catch (e) {
    console.log(e);
  }
});
app.get("/getVideoPlevel", async (req, res) => {
  try {
    const allVideoY = await levelVid3.find({});
    res.send({ status: "ok", data: allVideoY });
  } catch (e) {
    console.log(e);
  }
});

app.post("/removeVideoS", async (req, res) => {
  const { vidId } = req.body;
  try {
    Videos1.deleteOne({ _id: vidId }, function (err) {
      console.log(err);
    });
    res.send({ status: "ok", data: "Video Removed" });
  } catch (e) {
    console.log(e);
  }
});

app.post("/removeVideoY", async (req, res) => {
  const { vidId } = req.body;

  try {
    Videos2.deleteOne({ _id: vidId }, function (err) {
      console.log(err);
    });
    res.send({ status: "ok", data: "Video Removed" });
  } catch (e) {
    console.log(e);
  }
});
app.post("/removeVideoP", async (req, res) => {
  const { vidId } = req.body;

  try {
    Videos3.deleteOne({ _id: vidId }, function (err) {
      console.log(err);
    });
    res.send({ status: "ok", data: "Video Removed" });
  } catch (e) {
    console.log(e);
  }
});

//remove leveled Video
app.post("/removeVideoSlevel", async (req, res) => {
  const { vidId } = req.body;
  try {
    levelVid1.deleteOne({ _id: vidId }, function (err) {
      console.log(err);
    });
    res.send({ status: "ok", data: "Video Removed" });
  } catch (e) {
    console.log(e);
  }
});

app.post("/removeVideoYlevel", async (req, res) => {
  const { vidId } = req.body;

  try {
    levelVid2.deleteOne({ _id: vidId }, function (err) {
      console.log(err);
    });
    res.send({ status: "ok", data: "Video Removed" });
  } catch (e) {
    console.log(e);
  }
});

app.post("/removeVideoPlevel", async (req, res) => {
  const { vidId } = req.body;

  try {
    levelVid3.deleteOne({ _id: vidId }, function (err) {
      console.log(err);
    });
    res.send({ status: "ok", data: "Video Removed" });
  } catch (e) {
    console.log(e);
  }
});

app.get("/userCount", async (req, res) => {
  User.count(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/videoSCount", async (req, res) => {
  Videos1.count(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/videoYCount", async (req, res) => {
  Videos2.count(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/videoPCount", async (req, res) => {
  Videos3.count(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

//count the leveled videos

app.get("/videoSCountlevel", async (req, res) => {
  levelVid1.count(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/videoYCountlevel", async (req, res) => {
  levelVid2.count(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/videoPCountlevel", async (req, res) => {
  levelVid3.count(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/prodCount/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.prodCount++;
    await user.save();
    res.status(200).send({ count: user.prodCount });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// retrieve the level count for a specific user
app.get("/getprodCount/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId, "-pass");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.put("/sleepCount/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    console.log("PArama", req.params.userId);
    user.sleepCount++;
    await user.save();
    res.status(200).send({ count: user.sleepCount });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// retrieve the level count for a specific user
app.get("/getsleepCount/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId, "-pass");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.put("/yogaCount/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    console.log("PArama", req.params.userId);
    user.yogaCount++;
    await user.save();
    res.status(200).send({ count: user.yogaCount });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// retrieve the level count for a specific user
app.get("/getyogaCount/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId, "-pass");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


