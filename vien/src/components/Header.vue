<template>
  <div class="header container">
    <div class="logo">
      <img src="logo.png">
    </div>
    <div class="menu">
      <ul>
        <li><a>Home</a></li>
        <li><a>Programing</a></li>
        <li><a>Design</a></li>
        <li><a>Who am I?</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div class="search">
      <i class="fa fa-search"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding-top: 25px;
  display: flex;
  border-bottom: 1px solid #ccc;
  .logo {
    padding: 5px;
    img {
      height: 40px;
    }
  }
  & > div {
    display: flex;
  }
  .menu {
    flex: auto;
    margin-left: 25px;
  }
  .search {
    padding: 15px;
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 25px;
    background: #f4f4f4;
    &:hover{
      background: #ca3a5c;
      color: white;
    }
  }
  ul {
    margin: 0;
    list-style: none;
    li {
      display: inline-block;
      padding: 15px 25px;
      a{
        font-weight: bold;
        cursor: pointer;
        &:hover{
          color: #ca3a5c;
        }
      }
    }
  }
}
</style>
