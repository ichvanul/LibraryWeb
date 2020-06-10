<template>
    <div class="container">
        <div class="navbaratas">
            <div class="tulisan1">
                <!-- <input type="image" src="../../assets/img/menu.png" -->
                <!-- id="tombolmenu" class="menutombol"> -->
                <select class="kategori">
                    <option value="volvo">All Categories</option>
                    <option value="saab">Novel</option>
                </select>

                <select class="item">
                    <option value="volvo">All Time</option>
                    <option value="saab">History</option>
                </select>

                <input class="kolomcari" type="search" placeholder="Search Book" aria-label="Search"
                v-model="search" @input="searchBooks">
                <!-- <input type="image" src="../../assets/img/find.png" class="menufind"> -->
                <a href="#"><img src="../../assets/img/bookshelf.png" alt="bookshelf"></a>
                <a href="#"><h1>Library</h1></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbaratas {
  background-color: white;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 1366px;
  height: 80px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.kategori {
  position: absolute;
  left: 100px;
  top: 25px;
  border: none;
  font-family: airbnb;
  font-size: 17px;
}

.item {
  position: absolute;
  left: 300px;
  top: 25px;
  border: none;
  font-family: airbnb;
  font-size: 17px;
}

.kolomcari {
  position: absolute;
  top: 22px;
  left: 500px;
  border-radius: 20px;
  width: 550px;
  height: 30px;
  border: 1px solid;
  padding-left: 50px;
  font-family: airbnb;
}

.menufind {
  position: absolute;
  left: 520px;
  top: 29px;
}

.tulisan1 img {
  position: absolute;
  left: 1200px;
  top: 10px;
}

.tulisan1 h1 {
  position: absolute;
  left: 1255px;
  top: 20px;
  font-size: 23px;
  font-family: airbnb;
  color: black;
}

</style>
