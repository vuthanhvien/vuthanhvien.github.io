<template>
  <div class="intro container">
    <div class="row">
      <div class="col-md-7">
        <h1>
          Hello! I'm
          <span>Vien Vu</span>|
        </h1>
        <h3>I'm a frontend developer</h3>
        <p>
          <a>#CSS</a>
          <a>#HTML</a>
          <a>#JS</a>
          <a>#REACT</a>
          <a>#ANGULAR</a>
          <a>#VUE</a>
          <a>#NODE</a>
        </p>
        <p class="social">
          <a href="https://www.facebook.com/thangkubom742" target="_blank">
            <i class="fa fa-facebook"/>
          </a>
          <a>
            <i class="fa fa-instagram"/>
          </a>
          <a href="https://www.youtube.com/channel/UCDqLCfHn9VMHk7bYG-xlvhw" target="_blank">
            <i class="fa fa-youtube"/>
          </a>
        </p>
      </div>
      <div class="col-md-5 text-right">
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
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.intro {
  padding-top: 150px;
  padding-bottom: 120px;
  h1 {
    text-align: left;
    font-size: 48px;
    color: #909090;
    font-weight: 200;
    span {
      font-size: 48px;
      font-weight: bold;
      color: #ca3a5c;
    }
  }
  h3 {
    color: #444;
  }
  a {
    font-weight: 200;
    padding-right: 5px;
    cursor: pointer;
    display: inline-block;
    &:hover {
      font-weight: 400;
      color: #ca3a5c !important;
    }
  }
  .social {
    a {
      color: #444;
      font-size: 18px;
      margin-right: 15px;
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
