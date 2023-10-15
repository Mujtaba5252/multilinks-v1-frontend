// Import the functions you need from the SDKs you nee
import { v4 as uuidv4 } from "uuid";
// import { getAnalytics } from "firebase/analytics";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY48SMlOlk-C5xAPQ7G-0DiflAG26_l7I",
  authDomain: "multilinks-5ccee.firebaseapp.com",
  projectId: "multilinks-5ccee",
  storageBucket: "multilinks-5ccee.appspot.com",
  messagingSenderId: "469861154682",
  appId: "1:469861154682:web:f3b8ce72f643e61fe2a0c3",
  measurementId: "G-KC24V8TQ9T",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Initialize Firebase
// const analytics = getAnalytics(app);

export const uploadSingleFile = async ({ file, folderName }) => {
  folderName = folderName || "uploads";
  file = file[0];
  if (!file) return;
  const storageRef = ref(storage, `/${folderName}/${uuidv4()}`);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  console.log("file", file);
  return {
    path: url,
    name: file.name,
    size: file.size,
    uploaded: true,
  };
};
export const uploadMultipleImages = async (files, folderName) => {
  const urls = [];
  console.log(files);
  return Promise.all(
    files.map(async (file, ind) => {
      if (file == null || file === "" || file?.length == 0) {
        urls.push("");
      } else if (typeof file === "string") {
        urls.push(file);
      } else {
        const storageRef = ref(storage, `${folderName}/${uuidv4()}`);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        urls.splice(ind, 0, url);
      }
    })
  ).then(() => {
    const data = urls.map((item, index) => {
      return {
        path: item,
        name: files[index].name,
        size: files[index].size,
        uploaded: true,
      };
    });
    return data;
  });
};
