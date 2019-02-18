<template>
  <div class="home ">
    <Header/>
    <Intro/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Intro,
    Header,
    Footer
  }
};
</script>
<style lang="scss">
body {
  font-family: "Cabin", sans-serif!important;
}
p,a,span{
  font-size: 14px;
}
</style>

