import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: h => h(App),
  data: {
    a: 1
  },
  created: function() {
    // `this` points to the vm instance
    console.log("a is: " + this.a);
  }
});
