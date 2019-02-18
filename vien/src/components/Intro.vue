<template>
  <div class="intro container">
    <div class="row">
      <div class="col-md-7">
        <h1>
          Hello! I'm
          <span>Vien Vu</span>
        </h1>
        <h3>I'm a frontend developer</h3>
        <p>
          <a>#CSS</a>
          <a>#HTML</a>
          <a>#JS</a>
        </p>
        <p class="social">
          <a>
            <i class="fa fa-facebook"/>
          </a>
          <a>
            <i class="fa fa-instagram"/>
          </a>
          <a>
            <i class="fa fa-youtube"/>
          </a>
        </p>
      </div>
      <div class="col-md-5 text-right">
        <div class="avatar">
          <img src="avatar.jpg">
        </div>
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
  padding-bottom: 50px;
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
      margin-right: 15px;
    }
  }
  .avatar {
    display: inline-block;
    width: 120px;
    height: 120px;
    // border-radius: 60px;
    transform: rotate(45deg);
    overflow: hidden;

    border-top: 3px solid #ca3a5c ;
    border-right: 3px solid #ca3a5c ;
    margin-top: 50px;
    img {
      width: 140%;
      transform: rotate(-45deg);
      margin-top: -21px;
      margin-left: -20px;
    }
  }
}
</style>
