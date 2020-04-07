import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    icons: {
      iconfont: 'md',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    themes: {
      dark: false,
      light: {
        primary: '#2A6591',
        info: '#54B2C8',
        warning: '#EEA53A',
        dark: '#3C484C',
        secondary: '#dedede',
        light: '#F6F6F6',
        label: '#9AA2A8',
        error: '#EF6D3A',
        accent: '#19587F',
        alpha: '#C4C4C4',
        border: '#F0F0F0',
        white: '#FFFFFF',
        balance: '#eaf0f4'
      },
    },
  },
});
