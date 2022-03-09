import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

const firebaseConfig = {
  // apiKey: "AIzaSyA923HSnYFpZPH_x813PDIN00gq_y1ucCY",
  // authDomain: "fir-react-upload-718fa.firebaseapp.com",
  // projectId: "fir-react-upload-718fa",
  // storageBucket: "fir-react-upload-718fa.appspot.com",
  // messagingSenderId: "789222163895",
  // appId: "1:789222163895:web:d7f36d46aa90ad2ee9d432",
  // measurementId: "${config.measurementId}",
  apiKey: "AIzaSyDachex57T7yZRUMRtye2IR_iXBUyeleYQ",
  authDomain: "phoenix-nc.firebaseapp.com",
  databaseURL: "https://phoenix-nc-default-rtdb.firebaseio.com",
  projectId: "phoenix-nc",
  storageBucket: "phoenix-nc.appspot.com",
  messagingSenderId: "458754749146",
  appId: "1:458754749146:web:2280a4ba9b768696942be3",
  measurementId: "G-8R6FF7PL78"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()


export { storage, firebase as default };