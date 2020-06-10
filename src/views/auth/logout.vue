<script>
export default {
  name: 'Logout',
  created () {
    delete localStorage.email
    delete localStorage.idUser
    this.$router.push('/')
  }
}
</script>
