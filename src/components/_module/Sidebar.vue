<template>
<section id="Sidebar">
  <div class="container" :class="{'show': showSidebar}">
    <div class="control">
      <button @click="showNav"><img src="../../assets/img/menu.png" alt="..."></button>
    </div>
    <!-- Menu SideBar -->
    <div class="navigation-links">
      <transition-group name="fade">
        <div v-show="showLink" key="1"><img :src="dataUser.result[0].photo"></div>
        <div v-show="showLink" key="2"><h2>{{dataUser.result[0].fullname}}</h2></div>
        <div class="title" v-show="showLink" key="3">Explore</div>
        <div class="title" v-show="showLink" key="4">History</div>
        <div class="title" v-show="showLink" key="5" data-toggle="modal"
        data-target=".bd-example-modal-lg">Add Book*</div>
        <div class="title" v-show="showLink"
        key="6"><router-link to="/logout">Log Out</router-link></div>
      </transition-group>
    </div>
  </div>
  <!-- Modal -->
  <div>
    <button type="submit" class="btn btn-primary" data-toggle="modal"
    data-target=".bd-example-modal-lg" data-whatever="@mdo">Open modal for @mdo</button>

    <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog"
    aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Book</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form enctype="multipart/form-data" @submit="AddBook">
              <div class="form-group">
                <label for="title-book" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="title-book" v-model="title" >
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Description:</label>
                <textarea class="form-control" id="message-text" v-model="description" ></textarea>
              </div>
              <div class="form-group">
                <label for="author-book" class="col-form-label">Author:</label>
                <input type="text" class="form-control" id="author-book" v-model="author" >
              </div>
              <div class="form-group">
                <label for="image-book" class="col-form-control">Image: </label>
                <input type="file" ref="file" class="form-control" id="image-book">
              </div>
              <div class="form-group">
                <label for="category-book" class="col-form-label">Category:</label>
                <select v-model="selected"  class="custom-select">
                  <option selected>Select Category</option>
                  <option value="1">Anak-Anak</option>
                  <option value="2">Agama & Spiritualitas</option>
                  <option value="3">Pengembangan Diri</option>
                  <option value="4">Komik</option>
                  <option value="5">Novel</option>
                  <option value="6">Olahraga</option>
                </select>
                <div class="modal-footer">
                  <button to="/home" type="submit" class="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SidebarNew',
  data () {
    return {
      title: '',
      author: '',
      category: '',
      description: '',
      showSidebar: false,
      showLink: false,
      dataUser: {},
      selected: '',
      dataBook: {}
    }
  },
  // data: () => ({
  // showSidebar: false,
  // showLink: false,
  // }),
  methods: {
    AddBook (e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('author', this.author)
      formData.append('image', this.$refs.file.files[0])
      formData.append('category', this.selected)
      axios.post('http://localhost:8000/api/v1/book/', formData)
        .then((res) => {
          this.dataBook = res.data
          console.log(this.dataBook)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    showNav () {
      if (this.showSidebar) {
        this.showLink = false
        setTimeout(() => {
          this.showSidebar = false
        }, 20)
      } else {
        this.showSidebar = true
        setTimeout(() => {
          this.showLink = true
        }, 500)
      }
    }
  },
  created () {
    axios.get(`http://localhost:8000/api/v1/user/${localStorage.idUser}`)
      .then((res) => {
        this.dataUser = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  addBook () {
    axios.post('http://localhost:8000/api/v1/book/', {
      title: this.title,
      image: this.image,
      author: this.author,
      category: this.category,
      description: this.description
    })
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: fixed;
    top: 0;
    left: -20px;
    width: 0px;
    height: 100%;
    padding: 10px;
    min-height: calc(100vh - 20px);
    background-color: white;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
    // background-color: rgba($color: white, $alpha: .8);
    border: solid #fff;
    border-width: 0 1px 0 0;
    z-index: 999;
    transition: all .3s ease-in-out;

    .control {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-bottom: 10px;

      button {
        position: fixed;
        left: 40px;
        top: 7px;
        font-size: 2rem;
        margin-left: -25px;
        background: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all .3s ease-in-out;
      }
    }

    &.show {
      width: 347px;

      .control > i {
        color: #fff;
        transform: rotateZ(-180deg);
      }

      .navigation-icons {
        color: #fff;
      }
    }

    .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      float: left;

      i {
        font-size: 2rem;
        padding: 10px 0;
        cursor: pointer;
        transition: all .3s ease-in-out;

        &:hover {
          color: #fff;
        }
      }
    }

    .navigation-links {
      padding-top: 280px;
      float: left;
        h2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            // z-index: 999;
            padding-left: 50px;
            top: -150px;
            font-weight: bold;
            font-size: 30px;
            line-height: 39px;
            background-color: none;
            }

        img {
            width: 150px;
            height: 150px;
            border-radius: 100px;
            position: relative;
            top: -200px;
            left: 80px;
            }

        .title {
            font-weight: 600;
            position: relative;
            outline: none;
            color: black;
            top: -130px;
            left: 40px;
            font-size: 25px;
            line-height: 34px;
            padding-left: 10px;
            margin-bottom: 18px;
            cursor: pointer;
            &:hover {
            color: gray;
            }
        }
    }
}

  // @mixin nav-childs($values...) {
  //   @each $var in $values {
  //     &:nth-child(#{$var}) {
  //       transition: transform linear calc(.1s * #{$var}), display .5s;
  //     }
  //   }
  // }

  // .fade-enter-active, .fade-leave-active {
  //   @include nav-childs(3,4,5,6);
  // }
  // .fade-enter, .fade-leave-to {
  //   transform: scale(0);
  // }
</style>
