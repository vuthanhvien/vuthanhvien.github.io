<template>
  <div class="home ">
    <Intro/>
    <div class="timeline"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  components: {
    Intro,
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

