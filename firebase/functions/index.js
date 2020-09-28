const firebase = require("firebase");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
//admin.initializeApp();
const { Storage } = require("@google-cloud/storage");
const projectId = "react-firebase-44579";
let gcs = new Storage({
  projectId: projectId
});
const os = require("os");
const path = require("path");
const spawn = require("child-process-promise");

const firebaseConfig = {
  apiKey: "AIzaSyCNP5me3pdzq5ZjiY4cOhNbfbkkuCBnfJY",
  authDomain: "react-firebase-44579.firebaseapp.com",
  databaseURL: "https://react-firebase-44579.firebaseio.com",
  projectId: "react-firebase-44579",
  storageBucket: "react-firebase-44579.appspot.com",
  messagingSenderId: "891932276248",
  appId: "1:891932276248:web:394000368b5d4f85"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(event => {
  console.log(event);
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log("file detected");

  if (path.basename(filePath).startsWith("resized-")) {
    console.log("already renamed this file");
    return;
  }

  const destBucket = gcs.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType: contentType };

  return destBucket
    .file(filePath)
    .download({
      destination: tmpFilePath
    })
    .then(() => {
      return spawn("convert", [tmpFilePath, "-resize", "500x500", tmpFilePath]);
    })
    .then(() => {
      return destBucket.upload(tmpFilePath, {
        destination: "resized-" + path.basename(filePath),
        metadata: metadata
      });
    });
});

exports.addMessage = functions.https.onRequest(async (res, req) => {
  const original = "agon";

  // const writeResult = await admin
  //   .firestore()
  //   .collection("messages")
  //   .add({ original });

  return res.json({ resulg: `Message with ID: ${12} added` });
});
