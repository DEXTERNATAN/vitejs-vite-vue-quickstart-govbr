import '@govbr-ds/core/dist/core.min.css';
import '../node_modules/@govbr-ds/webcomponents/dist/webcomponents.umd.min.js';

import { createApp } from 'vue';
import App from './App.vue';
import bindUnidirecional from './directives/bind-unidirecional';
import router from './routes.js';

const app = createApp(App);

// Diretiva global para permitir bind unidirecional com os web components
app.directive('model-form', bindUnidirecional);

app.use(router);
app.mount('#app');
