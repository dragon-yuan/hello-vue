// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import routes from './router'

Vue.use(VueRouter);
// 按需引入ELE
import {
  Table,
  tableColumn,
  Input,
  Select,
  Option,
  Button,
  Menu,
  Submenu,
  menuItem,
  menuItemGroup,
  Breadcrumb,
  breadcrumbItem,
  Dialog,
  Pagination,
  Form,
  formItem,
  DatePicker,
  MessageBox,
  Message,
  Loading,
  Radio,
  Checkbox,
  CheckboxGroup,
  InputNumber,
  Tree,
  Tabs,
  TabPane,
  RadioGroup,
  Upload,
  Tooltip,
  Transfer
} from 'element-ui';

Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

const components = [
  Table,
  tableColumn,
  Input,
  Select,
  Option,
  Button,
  Menu,
  Submenu,
  menuItem,
  menuItemGroup,
  Breadcrumb,
  breadcrumbItem,
  Dialog,
  Pagination,
  Form,
  formItem,
  Radio,
  Checkbox,
  CheckboxGroup,
  InputNumber,
  DatePicker,
  Tree,
  Tabs,
  TabPane,
  RadioGroup,
  Upload,
  Tooltip,
  Transfer
];

const router = new VueRouter({
  mode: 'history',
  routes
});

components.map(component => {
  Vue.component(component.name, component);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
