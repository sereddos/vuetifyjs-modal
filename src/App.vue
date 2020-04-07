<template>
  <v-app>
    <v-content>
      <Modal/>
    </v-content>
  </v-app>
</template>

<script>
import Modal from './components/modal';

export default {
  name: 'App',

  components: {
    Modal
  },

  data: () => ({
    //
  }),
};
</script>
