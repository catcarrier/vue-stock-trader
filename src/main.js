import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import { routes } from './routes.js';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root='https://academind-stock-trader.firebaseio.com/';

Vue.filter('toCurrency', function (value, curr) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: 0
  });
  return formatter.format(value);
});

const router = new VueRouter({
  routes: routes, 
  mode:'history'
});

new Vue({
  el: '#app',
  router:router,
  store: store,
  render: h => h(App)
})
