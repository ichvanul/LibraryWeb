<template>
  <div class="listContent">
    <div class="mainContent">
      <h4>List Book</h4>
    </div>

    <div class="cardHeader">
      <div class="cardContent" v-for="mainCard in books" :key="mainCard.result">
        <img :src="mainCard.image" class="cardImage" alt="...">
        <h3 class="cardTitle"><router-link :to="'/detail/'+mainCard.id_book">
        {{mainCard.title}}</router-link></h3>
        <p class="cardText">{{mainCard.description}}</p>
      </div>
    </div>

    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
          <a class="page-link" style="cursor:pointer" @click="prevPages">Previous</a>
          </li>
          <li class="page-item" v-for="pagination in totalPage" :key="pagination">
            <a class="page-link" style="cursor:pointer"
          @click="pages(pagination)"  >{{pagination}}</a></li>
          <li class="page-item next">
          <a class="page-link" style="cursor:pointer" @click="nextPages">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',
  props: ['book'],
  // methods: {
  //   addBooks(newBook) {
  //     this.books = [...this.books, newBook];
  //   },
  // },
  data () {
    return {
      books: [],
      container: '',
      currentPage: 1,
      totalPage: [],
      url: 'http://localhost:8000/api/v1/book?page='
    }
  },
  methods: {
    pages (id) {
      this.currentPage = 0 + id
      axios.get(`http://localhost:8000/api/v1/book?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.books = res.data.result[3]
        })
    },
    nextPages () {
      if (this.currentPage === this.totalPage) {
        this.currentPage = this.totalPage
      } else {
        this.currentPage += 1
      }
      axios.get(`http://localhost:8000/api/v1/book?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.books = res.data.result[3]
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0]
        })
        .catch((err) => {
          console.log(err)
        })
    },
    prevPages () {
      if (this.currentPage === 1) {
        this.currentPage = 1
      } else {
        this.currentPage -= 1
      }
      axios.get(`http://localhost:8000/api/v1/book?page=${this.currentPage}`)
        .then((res) => {
          // eslint-disable-next-line prefer-destructuring
          this.books = res.data.result[3]
          // eslint-disable-next-line prefer-destructuring
          this.totalPage = res.data.result[0]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    axios.get(`http://localhost:8000/api/v1/book?page=${this.currentPage}`)
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        this.books = res.data.result[3]
        console.log(res)
        // eslint-disable-next-line prefer-destructuring
        this.totalPage = res.data.result[0]
      })
  }
  // mounted() {
  //   axios.get('http://localhost:8000/api/v1/book/')
  //     .then((res) => {
  //       this.books = res.data;
  //       console.log(res.data);
  //     });
  // },
}
</script>

<style scoped>
/* Card List */
.listContent {
  background-color: white;
  width: 1345px;
  height: 524px;
  position: absolute;
  top: 500px;
  left: 0px;
}

/* Card Content */
.mainContent {
  background-color:white;
  margin-bottom: 50px;
  margin-top: 50px;
}

.mainContent h4 {
  margin-left: 380px;
  font-family: airbnb;
  font-size: 25px;
  line-height: 33px;
}

/* Card Body */
.cardHeader {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 1348px;
  /* background-color: blue; */
}

.cardContent {
  width: 280px;
  height: 380px;
  margin-left: 40px;
  margin-right: 12px;
  margin-bottom: 35px;
  border-radius: 10px;
  overflow: hidden;
  /*background-color: blue;*/
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
}

.cardImage {
  width: 280px;
  height: 160px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
}

.cardTitle {
  font-size: 20px;
  padding: 7px 5px;
  text-align: center;
  font-family: airbnb;
}

.cardText {
  font-size: 12px;
  padding-left: 15px;
  padding-right: 15px;
  color: black;
  align-content: center;
  font-family: airbnb;
  height: 28%;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
