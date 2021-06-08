import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBdxHaDExn8id8sKc6cAlrPgAAvr7ijgUw",
  authDomain: "weirdoocity.firebaseapp.com",
  projectId: "weirdoocity",
  storageBucket: "weirdoocity.appspot.com",
  messagingSenderId: "500105539134",
  appId: "1:500105539134:web:514a8318716d336562eb6f",
  measurementId: "G-EM7QFGPDB2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
