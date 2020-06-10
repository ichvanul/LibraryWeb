<template>
    <div>
      <navbar/>
      <div>
        <SidebarNew/>
        <div>
          <modal/>
          <!-- <ContainerBook :books="books"/> -->
          <!-- <div><p>{{book.result}}</p></div> -->
        </div>
        <card/>
        <Carousel/>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/_module/Navbar.vue'
import SidebarNew from '../components/_module/Sidebar.vue'
import Card from '../components/_module/Card.vue'
import Carousel from '../components/_module/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    SidebarNew,
    Card
  },
  methods: {
    logout () {
      localStorage.removeItem('id_user')
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
