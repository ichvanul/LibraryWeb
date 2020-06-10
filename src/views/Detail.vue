<template>
  <div class="containerTop">
    <Background v-bind:cover="idBooks.result[0].image"/>
    <div>
      <div>
        <content-detail v-bind:dataBook="idBooks.result[0]"/>
      </div>
      <div class="rightContent">
        <div class="column5">
          <a href="#" class="btn-primary" role="button" aria-pressed="true">Borrow</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ContentDetail from '../components/_module/ContentDetail.vue'
import Background from '../components/_module/Backgorund.vue'

export default {
  name: 'Detail',
  components: {
    ContentDetail,
    Background
  },
  props: ['id_book', 'cover'],
  data () {
    return {
      idBooks: {}
    }
  },
  mounted () {
    axios.get(`http://localhost:8000/api/v1/book/${this.id_book}`)
      .then((res) => {
        this.idBooks = res.data
        console.log(res.data)
      })
  }
}
</script>

<style scoped>
.containerTop {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.btn-primary {
    position: absolute;
    left: 1040px;
    top: 870px;
    padding: 15px 65px;
    width: 240px;
    height: 74px;
    color: white;
    font-family: airbnb;
    font-size: 30px;
    line-height: 39px;
    border-radius: 10px;
    background: orange;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.rightContent {
    background: orchid;
}

</style>
