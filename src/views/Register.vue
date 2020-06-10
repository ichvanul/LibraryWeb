<template>
  <div class="container-login">
    <div class="left-side">
      <div class="header">
        <h1>Book is a window <br> to the world</h1>
      </div>
      <div class="footer">
        <h5>Photo by Mark Pan4ratte on Unsplash</h5>
      </div>
    </div>

    <div class="right-side">
      <div class="header-login">
        <h2>Register</h2>
      </div>
      <div class="welcome-back">
        <h3>Welcome Back, Please Register <br> to create account</h3>
      </div>
      <form class="form">
        <div class="namecolumn" >
          <label for="fullname" class="label-fullname">Fullname</label>
          <input v-model="fullname" type="text" class="fullname" id="fullname">
        </div>
        <div class="emailcolumn" >
          <label for="email" class="label-email">Email Address</label>
          <input v-model="email" type="text" class="email" id="email">
        </div>
        <div class="passwordcolumn" >
          <label for="password" class="label-password">Password</label>
          <input v-model="password" type="password" class="password" id="password">
        </div>
      </form>
      <div class="button">
        <div class="button-signup">
          <button @click="register">Sign Up</button>
        </div>
        <div class="button-login">
          <button><router-link class="login" to="/">Login</router-link></button>
        </div>
      </div>
      <div class="footer-login">
        <p><span class="and">By signing up, you agree to Book’s</span><br>
          Terms and Conditions <span class="and">&</span> Privacy Policy</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      fullname: null,
      email: null,
      password: null
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:8000/api/v1/user/register', {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      })
        .then((req) => {
          console.log(req)
          this.$router.push('/login')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "airbnb";
  src: url('../assets/font/AirbnbCerealBold.ttf');
}

*{
  padding: 0px;
  margin: 0px;
  font-family: airbnb;
}

.container-login{
  display: flex;
  .left-side{
    background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
    url('../assets/img/fotobuku.jpg');
    background-size: cover;
    background-position: center center;
    width: 60vw;
    height: 100vh;
    color: white;
    .header{
      h1{
        font-size: 64px;
        line-height: 83px;
        margin: 70px;
      }
    }
    .footer{
      h5{
        font-weight: bold;
        font-size: 15px;
        line-height: 25px;
        margin: 385px 0 0 70px;
      }
    }
  }
  .right-side{
    display: flex;
    flex-direction: column;
    color: black;
    width: 40vw;
    height: 100vh;
    .header-login{
      margin: 125px 0 0 70px;
      h2{
        font-size: 64px;
        line-height: 83px;
        color: #424242;
      }
    }
    .welcome-back{
      margin: 0 0 0 70px;
      h3{
        font-size: 17px;
        line-height: 22px;
        color: #424242;
      }
    }
    .form{
      display: flex;
      flex-direction: column;
      margin: 40px 0 0 70px;
      .namecolumn{
        label{
          z-index: 99;
          position: absolute;
          right: 405px;
          margin-top: 3px;
          color: lightslategrey;
          font-size: 13px;
        }
        input{
          border: 1px solid lightgray;
          box-sizing: border-box;
          border-radius: 5px;
          width: 380px;
          height: 50px;
          font-size: 13px;
          padding: 15px 5px 0 12px;
        }
      }
      .emailcolumn{
        label{
          z-index: 99;
          position: absolute;
          right: 378px;
          color: lightslategrey;
          font-size: 13px;
          margin-top: 3px;
        }
        input{
          border: 1px solid lightgray;
          box-sizing: border-box;
          border-radius: 5px;
          width: 380px;
          height: 50px;
          font-size: 13px;
          padding: 15px 5px 0 12px;
        }
      }
      .passwordcolumn{
        label{
          z-index: 99;
          position: absolute;
          right: 405px;
          margin-top: 3px;
          color: lightslategrey;
          font-size: 13px;
        }
        input{
          border: 1px solid lightgray;
          box-sizing: border-box;
          border-radius: 5px;
          width: 380px;
          height: 50px;
          font-size: 13px;
          padding: 15px 5px 0 12px;
        }
      }
    }
    .rememberme{
      display: flex;
      .check-box{
        margin: 15px 0 0 70px;
      }
      .remember-me{
        margin: 10px 0 0 15px;
        h5{
          font-size: 14px;
          line-height: 22px;
          color: lightslategrey;
        }
      }
      .forgot-password{
        margin: 10px 0 0 150px;
        h5{
          font-size: 14px;
          line-height: 22px;
          .forgot{
            color: #424242;
            text-decoration: none;
          }
        }
      }
    }
    .button{
      display: flex;
      margin: 70px 0 0 70px;
      .button-signup{
        button{
          background: #000000;
          border-radius: 5px;
          width: 110px;
          height: 36px;
          color: white;
          border: 1px solid black;
        }
      }
      .button-login{
        margin-left: 10px;
        button{
          background: white;
          border-radius: 5px;
          width: 110px;
          height: 36px;
          border: 2px solid lightslategrey;
          .login{
            color: lightslategrey;
            text-decoration: none;
          }
        }
      }
    }
    .footer-login{
      margin: 42px 0 0 70px;
      p{
        font-size: 15px;
        span{
          color: lightslategrey;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
    * {
        padding: 0;
        margin: 0;
    }
}
</style>
