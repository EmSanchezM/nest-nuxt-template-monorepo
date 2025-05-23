import './styles.css';

import router from './router';

import { createApp } from 'vue';
import App from './features/App.vue';

const app = createApp(App);

app.use(router);

app.mount('#root');
