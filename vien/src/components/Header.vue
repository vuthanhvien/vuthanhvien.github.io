<template>
  <div class="header container">
    <div class="icon-menu">
      <i class="fa fa-bars" />
    </div>
    
    <div class="logo">
       <router-link to="/">
        <img src="/logo.png">
      </router-link>
    </div>
    <div class="menu">
      <ul>
        <li>
          <div class="menu-item">
          <router-link to="/home">
             Home
          </router-link>
          </div>
        </li>
        <li>
          <div class="menu-item">
          <router-link to="/programming">
             Programing
          </router-link>
          </div>
        </li>
        <li>
          <div class="menu-item">
            <router-link to="/hobby">
              Hobby
              <i class="fa fa-chevron-down"/>
            </router-link>
            <div class="sub-menu">
              <ul>
                <li>
                  <router-link to="/hobby/travel">Travel</router-link>
                </li>
                <li>
                  <router-link to="/hobby/film">Film review</router-link>
                </li>
                <li>
                  <router-link to="/hobby/book">Book review</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="menu-item">
                  <router-link to="/whoiam">Who I am?</router-link>
          </div>
        </li>
        <li>
          <div class="menu-item">
                  <router-link to="/contact">Contact</router-link>
          </div>
        </li>
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

@media only screen and (max-width: 992px) {
  .icon-menu{
    display: block!important;
  }
  .logo{
    flex: auto;
  }
  .menu{
    display: none!important;
  }
}

.header {
  padding-top: 25px;
  display: flex;
  border-bottom: 1px solid #ccc;
  .icon-menu{
    display: none;
    font-size: 26px;
    padding: 9px;
    cursor: pointer;
    height: 45px;
    width: 45px;
    // background: #f8f8f8;
    // border-radius: 25px;
    &:hover{
      //  background: #ca3a5c;
      // color: white;
    }

  }
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
    & > ul {
      margin: 0;
      list-style: none;
      & > li {
        display: inline-block;
        a {
          color: #888;
          font-weight: bold;
          i {
            font-size: 10px;
          }
        }
        .menu-item {
          position: relative;
          margin: 13px 0;
          & > a {
            padding: 15px 25px;
            cursor: pointer;
            &.router-link-active,
            &:hover {
              background: #f4f4f4;
              color: #ca3a5c;
              text-decoration: underline;
            }
          }
          &:hover {
            .sub-menu {
              display: block;
            }
            &>a{
              background: #f4f4f4;
              color: #ca3a5c;
              text-decoration: underline;
            }
          }
        }
        .sub-menu {
          z-index: 3;
          display: none;
          position: absolute;
          background: white;
          // padding: 15px 25px;
          border: 1px solid #ccc;
          top: 37px;
          left: 0px;
          min-width: 250px;
          ul {
            margin: 0;
            list-style: none;
            padding: 0px;
            li {
              a {
                display: block;
                &.router-link-exact-active,
                &:hover {
                  background: #f4f4f4;
                  text-decoration: underline;
                  color: #ca3a5c;
                }
                padding: 10px 25px;
              }
            }
          }
        }
      }
    }
  }
  .search {
    padding: 15px;
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 25px;
    background: #f4f4f4;
    &:hover {
      background: #ca3a5c;
      color: white;
    }
  }
}
</style>
