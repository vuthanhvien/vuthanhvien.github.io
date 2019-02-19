<template>
  <div class="intro container">
      <div class="text-center mobile-avatar">
      <router-link to="/whoiam">
        <div class="avatar">
          <img src="avatar.jpg">
        </div>
        </router-link>
    </div>
    <div class="row">
      <div class="col-md-7 offset-1">
        <h1>
          Hi! I'm
          <span>Vien Vu</span>|
        </h1>
        <h3>I'm a frontend developer</h3>
        <p>
          <router-link  v-for="item in tags" :key="item"  :to="{ path: '/search', query: { s: item } }">{{item}}</router-link>
        </p>
        <p class="social">
          <a href="https://www.facebook.com/thangkubom742" target="_blank">
            <i class="fa fa-facebook"/>
          </a>
          <a href="https://www.facebook.com/thangkubom742" target="_blank">
            <i class="fa fa-instagram"/>
          </a>
          <a href="https://www.youtube.com/channel/UCDqLCfHn9VMHk7bYG-xlvhw" target="_blank">
            <i class="fa fa-youtube"/>
          </a>
          <a href="https://www.behance.net/thangkubom" target="_blank">
            <i class="fa fa-behance"/>
          </a>
          <a href="https://dribbble.com/vuthanhvien742" target="_blank">
            <i class="fa fa-dribbble"/>
          </a>
        </p>
      </div>
      <div class="col-md-3 text-right pc-avatar">
        <router-link to="/whoiam">
        <div class="avatar">
          <img src="avatar.jpg">
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      tags: ['#css', '#html', '#js', '#react', '#angular']
    }
  },
  methods: {
    search: function(key) {
      this.$router.push({ name: 'search', query: { s: key } })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media only screen and (max-width: 992px) {
  .mobile-avatar {
    display: block !important;
  }
  .pc-avatar{
    display: none!important;
  }
  .social{
    text-align: center;
  }
}
.mobile-avatar {
  display: none;
      margin-top: -105px;
    padding-bottom: 50px;
}
.intro {
  padding-top: 150px;
  padding-bottom: 120px;
  h1 {
    text-align: left;
    font-size: 42px;
    color: #909090;
    font-weight: 200;
    span {
      font-size: 42px;
      font-weight: bold;
      color: #ca3a5c;
    }
  }
  h3 {
    color: #444;
  }
  a {
    font-weight: 300;
    padding-right: 5px;
    font-size: 13px;
    cursor: pointer;
    display: inline-block;
    color: #444;
    &:hover {
      font-weight: 400;
      color: #ca3a5c !important;
    }
  }
  .social {
    a {
      opacity: 0.8;
      color: #444;
      font-size: 24px;
      margin-right: 10px;
    }
  }
  .avatar {
    display: inline-block;
    width: 170px;
    height: 170px;
    transform: rotate(45deg);
    overflow: hidden;

    border-top: 3px solid #ca3a5c;
    border-right: 3px solid #ca3a5c;
    border-radius: 5px;
    margin-top: 25px;
    transition: all linear 0.3s;
    &:after {
      content: "";
      background: white;
      // border: 3px solid #ca3a5c;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 4px;
      left: 4px;
      z-index: -1;
    }
    img {
      width: 140%;
      transform: rotate(-45deg);
      margin-top: -27px;
      margin-left: -27px;
    }
    &:hover {
      transition: all linear 0.3s;

      width: 190px;
      height: 190px;
      margin-top: 15px;
      margin-bottom: -10px;
      margin-left: -10px;
    }
  }
}
</style>
