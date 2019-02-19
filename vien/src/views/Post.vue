<template>
  <div class="post ">
    <Header/>
    <div class="cover " style="background-image:url(https://cdn-images-1.medium.com/max/1600/1*Y6LrfrhUirz3WtxB3fXk9Q.jpeg)">
        <div class="content">
            <div class="container">
                <p class="time" ><strong>#PROGRAMMING</strong>
                </p>
                <h2>
                    <strong>A Bill of Rights for the Age of Artificial Intelligence</strong>
                </h2>
                <p class="time" >
                    Post 5 min ago
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="main-content">
            
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
.cover {
  background-repeat: no-repeat;
  min-height: 500px;
  padding-top: 100px;
  
     background-size: cover;
  .content {
    padding-top: 230px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    height: 400px;
    .time,
    .tag,
    h2 {
      color: white;
    }
  }
}
</style>

