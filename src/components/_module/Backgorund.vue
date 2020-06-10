<template>
<div>
  <div>
    <div>
      <div class="background"></div>
    </div>
    <div>
      <router-link to="/home" class="back"><img src="../../assets/img/Ellipsepanah.png"
      alt=""></router-link>
    </div>
  </div>

  <!-- Button trigger modal -->
  <button @click="deleteBook" type="button" class="btn btn-primary-delete bg-warning"
  data-toggle="modal" data-target="#exampleModalCenter">Delete</button>

  <!-- Modal Delete-->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1"
  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Book has been deleted!
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Edit Book-->
  <div>
    <button type="submit" class="btn btn-primary-edit bg-warning" data-toggle="modal"
    data-target=".bd-example-modal-lg" data-whatever="@mdo">Edit</button>

    <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog"
    aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Book</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form enctype="multipart/form-data" @submit="EditBook">
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
                <input type="text" class="form-control" id="image-book">
              </div>
              <div class="form-group">
                <label for="category-book" class="col-form-label">Category:</label>
                <select v-model="selected"  class="custom-select">
                  <option selected>Select Category</option>
                  <option value="1">Anak-Anak</option>
                  <option value="2">Agama</option>
                  <option value="3">Pengembangan Diri</option>
                  <option value="4">Komik</option>
                  <option value="5">Novel</option>
                </select>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary"
                  data-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Background',
  props: ['cover'],
  data () {
    return {
      title: '',
      author: '',
      image: '',
      category: '',
      description: '',
      selected: '',
      dataBook: {}
    }
  },
  mounted () {
    const backCover = document.querySelector('.background')
    backCover.style.backgroundImage = `url("${this.cover}")`
  },
  methods: {
    addBook () {
      Axios.patch(`http://localhost:8000/api/v1/book/${localStorage.id_book}`, {
        title: this.title,
        description: this.description,
        author: this.author,
        category: this.category
      })
        .then((res) => {
          this.dataBook = res.data
          console.log(this.dataBook)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  deleteBook () {
    Axios.delete(`http://localhost:8000/api/v1/book/${localStorage.id_book}`)
      .then((res) => {
        this.dataBook = res.data
        console.log(this.dataBook)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: "airbnb";
    src: url(../../assets/font/AirbnbCerealBold.ttf);
}

*{
  margin: 0;
  padding: 0;
}

.background {
    background-image: url(../../assets/img/coverdilan.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 454px;
}

.back {
  position: absolute;
  top: 25px;
  left: 15px;
  width: 10%;
  height: 10%;
  display: block;
}

.bg-warning {
  border-color: none;
  box-shadow: rgba(0, 0, 0, 0.2);
}

.btn-primary-edit {
  color: white;
  position: absolute;
  left: 1095px;
  top: 40px;
  width: 90px;
  font-family: airbnb;
}

.btn-primary-delete {
  color: white;
  position: absolute;
  left: 1193px;
  top: 40px;
  width: 90px;
  font-family: airbnb;
}

.bd-example-modal-lg{
  margin-top: 20px;
  margin-left: 280px;
}

.modal-header{
  h5{
    margin: 30px 30px 10px 30px;
  }
  button{
    margin: 20px 10px 0px 30px;
  }
}

.form-group{
  margin: 30px;
}

.modal-footer{
  button{
    margin: 20px 0 0 20px;
    padding: 5px;
  }
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
}
</style>
