<template>
  <div id="menu-container" class="menu-container">
    <div class="menu-row">
      <div class="menu-options-container">
        <div class="menu-option">
          <h2 class="stratum">Bienvenodo a Photos</h2>
        </div>
      </div>
    </div>
    <div class="menu-social-icons-container">
      <div class="social-icons">
        <a class="social-icon" target="_blank" href="https://www.instagram.com/"
          ><img :src="inIconImage"
        /></a>
        <a
          class="social-icon facebook-icon"
          target="_blank"
          href="https://www.facebook.com/"
          ><img :src="fbIconImage"
        /></a>

        <a class="social-icon" target="_blank" href="https://www.youtube.com/">
          <img :src="ytIconImage"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import fbIcon from "@/assets/public_facebook.png";
import twIcon from "@/assets/public_twitter.png";
import ytIcon from "@/assets/public_youtube.png";
import inIcon from "@/assets/public_instagram.png";
import logoutIcon from "@/assets/logout-icon.png";

export default {
  name: "Header",
  data() {
    return {
      fbIconImage: fbIcon,
      twIconImage: twIcon,
      ytIconImage: ytIcon,
      inIconImage: inIcon,
      logoutIconImage: logoutIcon
    };
  },
}
</script>

<style scoped lang="scss">  
.menu-container {
  height: 80px;
  width: 100%;
  position: relative;
  padding: 0px 15px;
  flex-direction: row;
  display: flex;
  z-index: 1000;
  background-color: #ff9100;
  left: 0px;
  opacity: 1;
  padding-left: 0;
}

.menu-option {
  width: 30%;
  margin-left: 1%;
  margin-right: 1%;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  top: 0px;
  opacity: 1;
  padding-left: 0;
  .stratum {
    font-size: 20px;
    color: #ffffff;
    text-decoration: none;
    display: block;
    width: 100%;
    margin-bottom: 0;
    padding-left: 0;
    font-family: "AvenirLight";
  }
}

.social-icons {
  display: flex;
  justify-content: center;
  .social-icon {
    height: 2rem;
    width: 2rem;
    &.facebook-icon {
      width: 2.1rem;
      img {
        width: auto;
        height: 20px;
        display: block;
        margin: -10px 25px 0px auto;
      }
    }
    img {
      width: auto;
      height: 20px;
      display: block;
      margin: -10px 25px 0px auto;
    }
  }
}


.menu-row {
  width: 100%;
  .menu-options-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
}

.menu-social-icons-container {
  display: flex;
  margin-right: 30px;
  width: fit-content;
  .social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    a {
      width: auto;
      height: 1%;
    }
  }

  .logout-icon {
    margin-left: 20px;
    height: 22px;
  }
}
</style>
