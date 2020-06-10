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
        <h2>Login</h2>
      </div>
      <div class="welcome-back">
        <h3>Welcome Back, Please Login <br> to your account</h3>
      </div>
      <form class="form">
        <div v-if="code === 1" class="alertdiv color-red">
          <i class="material-icons" style="color:red">error</i>
          <p class="alert">{{this.error}}</p>
        </div>
        <div v-if="code === 2" class="alertdiv color-orange">
          <i class="material-icons" style="color:orange">error</i>
          <p class="alert">{{error}}</p>
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
      <div class="rememberme">
        <div class="check-box">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        </div>
        <div class="remember-me">
          <h5>Remember me</h5>
        </div>
        <div class="forgot-password">
          <h5><router-link class="forgot" to="#"> Forgot Password </router-link></h5>
        </div>
      </div>
      <div class="button">
        <div class="button-login">
          <button @click="login">Login</button>
        </div>
        <div class="button-signup">
          <button><router-link class="signup" to="/register">Sign Up</router-link></button>
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
  name: 'Login',
  components: {
  },
  data () {
    return {
      email: '',
      password: '',
      error: '',
      code: 0
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:8000/api/v1/user/login', {
        email: this.email,
        password: this.password
      })
        .then((req) => {
          this.loginSuccess(req)
          console.log(req)
        })
        .catch(() => {
          console.log('err')
        })
    },
    loginSuccess (req) {
      console.log(req.result)
      if (!req.data.result) {
        this.error = req.data.message
        this.code = 1
      } else if (req.data.result.status === 0) {
        this.error = 'Please activate your email!'
        this.code = 2
      } else {
        localStorage.password = req.data.result.password
        localStorage.idUser = req.data.result.id_user
        localStorage.token = req.data.result.token
        this.$router.replace('/home')
      }
    },
    loginFailed (req) {
      this.error = req.data.err
      this.code = 1
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
      .button-login{
        button{
          background: #000000;
          border-radius: 5px;
          width: 110px;
          height: 36px;
          color: white;
          border: 1px solid black;
        }
      }
      .button-signup{
        margin-left: 10px;
        button{
          background: white;
          border-radius: 5px;
          width: 110px;
          height: 36px;
          border: 2px solid lightslategrey;
          .signup{
            color: lightslategrey;
            text-decoration: none;
          }
        }
      }
    }
    .footer-login{
      margin: 60px 0 0 70px;
      p{
        font-size: 15px;
        span{
          color: lightslategrey;
        }
      }
    }
  }
}
.material-icons{
    position: absolute;
    margin-top: 7px;
    margin-left: 10px;
}
.alertdiv{
    background-color: #fff7f7;
    border-radius: 5px;
    width: 417px;
    height: 40px;
}
.color-red{
    border: 1px solid #c72e2e;
    position: absolute;
    top: 180px;
}
.color-orange{
    border: 1px solid orange;
    position: absolute;
    top: 180px;
}
.alert {
    position: relative;
    margin-left: -870px;
    margin-top: -585px;
    z-index: 100;
    font-size: 15px;
    font-family: airbnb;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  * {
    padding: 0;
    margin: 0;
  }
  .container-login{
  display: flex;
  flex-direction: column;
  .left-side{
    background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
    url('../assets/img/fotobuku.jpg');
    background-size: cover;
    background-position: center center;
    width: 100vw;
    height: 25vh;
    color: white;
    .header{
      h1{
        font-size: 30px;
        line-height: 33px;
        margin: 40px 70px 60px 70px;
      }
    }
    .footer{
      h5{
        font-weight: bold;
        font-size: 14px;
        line-height: 25px;
        margin: 15px 0 0 70px;
      }
    }
  }
  .right-side{
    display: flex;
    flex-direction: column;
    color: black;
    width: 100vw;
    height: 70vh;
    .header-login{
      margin: 25px 0 0 70px;
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
      .emailcolumn{
        label{
          z-index: 99;
          position: absolute;
          right: 243px;
          color: lightslategrey;
          font-size: 13px;
          margin-top: 3px;
        }
        input{
          border: 1px solid lightgray;
          box-sizing: border-box;
          border-radius: 5px;
          width: 280px;
          height: 60px;
          font-size: 13px;
          padding: 15px 5px 0 12px;
        }
      }
      .passwordcolumn{
        label{
          z-index: 99;
          position: absolute;
          right: 270px;
          margin-top: 3px;
          color: lightslategrey;
          font-size: 13px;
        }
        input{
          border: 1px solid lightgray;
          box-sizing: border-box;
          border-radius: 5px;
          width: 280px;
          height: 60px;
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
          width: 100px;
          color: lightslategrey;
        }
      }
      .forgot-password{
        margin: 10px 0 0 48px;
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
      .button-login{
        button{
          background: #000000;
          border-radius: 5px;
          width: 110px;
          height: 36px;
          color: white;
          border: 1px solid black;
        }
      }
      .button-signup{
        margin-left: 10px;
        button{
          background: white;
          border-radius: 5px;
          width: 110px;
          height: 36px;
          border: 2px solid lightslategrey;
          .signup{
            color: lightslategrey;
            text-decoration: none;
          }
        }
      }
    }
    .footer-login{
      margin: 60px 0 0 70px;
      p{
        font-size: 14px;
        span{
          color: lightslategrey;
        }
      }
    }
  }
}
}
</style>
