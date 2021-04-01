<template>
  <v-app>
    <v-main>
      <transition name="slide-fade">
        <div v-if="isLoggedIn">
          <Header  />
          <router-view></router-view>
          <Footer />
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="!isLoggedIn">
          <Login />
        </div>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Events from "./events/event";
import Login from "./views/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Login,
    Header,
    Footer
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  created() {
    Events.forEach((item) => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
};
</script>
