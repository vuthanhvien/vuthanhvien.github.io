<template>
  <div class="header container">
    <div class="logo">
      <a href="/">
        <img src="logo.png">
      </a>
    </div>
    <div class="menu">
      <ul>
        <li>
          <div class="sub active">
            <a href="/">Home</a>
          </div>
        </li>
        <li>
          <div class="sub">
            <a href="/programming">Programing</a>
          </div>
        </li>
        <li>
          <div class="sub">
            <a href="/hobby">
              Hobby
              <i class="fa fa-chevron-down"/>
            </a>
            <div class="sub-menu">
              <ul>
                <li>
                  <a>Photographer</a>
                </li>
                <li>
                  <a>Film review</a>
                </li>
                <li>
                  <a>Book review</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="sub">
            <a href="/whoiam">Who am I?</a>
          </div>
        </li>
        <li>
          <div class="sub">
            <a href="/contact">Contact</a>
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
        .sub {
          position: relative;
          cursor: pointer;

          padding: 15px 25px;
          &:hover {
            background: #f4f4f4;
            .sub-menu {
              display: block;
            }
            & > a {
              color: #ca3a5c;
              text-decoration: underline;
            }
          }
          &.active {
            & > a {
              color: #ca3a5c;
              text-decoration: underline;
            }
          }
        }
        .sub-menu {
          display: none;
          position: absolute;
          background: white;
          // padding: 15px 25px;
          border: 1px solid #ccc;
          top: 54px;
          left: 0px;
          min-width: 250px;
          ul {
            margin: 0;
            list-style: none;
            padding: 0px;
            li {
              &:hover {
                background: #f4f4f4;
                a {
                  text-decoration: underline;
                  color: #ca3a5c;
                }
              }
              padding: 10px 25px;
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
