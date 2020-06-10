<template>
<!-- Carousel -->
    <div class="daftarcarousel">
        <div class="carousel">
            <div class="carousel1">
                <h3>Dilan 1990</h3>
                <h6>Pidi Baiq</h6>
            </div>

            <div class="carousel2">
                <h3>Ubur-ubur Lembur</h3>
                <h6>Raditya Dika</h6>
            </div>

            <div class="carousel3">
                <h3 class="laskarpelangi">Laskar Pelangi</h3>
                <h6 class="andrea">Andrea Hirata</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
.daftarcarousel {
  background-color: white;
  margin-left: 135px;
  position: absolute;
  width: 1000px;
  height: 420px;
  top: 80px;
  left: 100px;
  z-index: -100;
}

.carousel {
  display: flex;
  align-items: flex-start;
}

.carousel1 {
  margin-right: 20px;
  margin-left: -100px;
  margin-top: 130px;
  background-image: url(../../assets/img/coverdilan.jpg);
  background-size: 240px 180px;
  width: 2400px;
  height: 180px;
  background-color: darkgoldenrod;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
}

.carousel1 h3 {
  color: white;
  padding-left: 30px;
  padding-bottom: 60px;
  padding-right: 88px;
  font-family: airbnb;
  font-size: 25px;
  position: absolute;
  top: 218px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 15px 15px;
}

.carousel1 h6 {
  color: white;
  padding-top: 10px;
  padding-left: 30px;
  font-family: airbnb;
  font-size: 17px;
  position: absolute;
  top: 250px;
}

.carousel2 {
  position: relative;
  margin-right: 20px;
  margin-left: 50px;
  margin-top: 90px;
  background-image: url(../../assets/img/coverlembur.png);
  background-size: 480px 260px;
  background-color: darkcyan;
  background-repeat: no-repeat;
  width: 4800px;
  height: 260px;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
}

.carousel2 h3 {
  color: white;
  padding-bottom: 60px;
  padding-right: 140px;
  position: absolute;
  top: 155px;
  padding-left: 30px;
  font-family: airbnb;
  font-size: 35px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 15px 15px;
}

.carousel2 h6 {
  color: white;
  padding-top: 0px;
  padding-left: 30px;
  font-family: airbnb;
  font-size: 17px;
  position: absolute;
  top: 210px;
}

.carousel3 {
  margin-right: 0px;
  margin-left: 50px;
  margin-top: 130px;
  background-image: url(../../assets/img/laskarpelangi.jpg);
  background-repeat: no-repeat;
  background-size: 240px 180px;
  background-color: darkkhaki;
  width: 2400px;
  height: 180px;
  border-radius: 10px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
}

.carousel3 h3 {
  color: white;
  position: absolute;
  top: 218px;
  padding-left: 30px;
  padding-bottom: 50px;
  font-family: airbnb;
  font-size: 25px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 15px 15px;
}

.carousel3 h6 {
  color: white;
  padding-top: 10px;
  padding-left: 30px;
  font-family: airbnb;
  font-size: 17px;
  position: absolute;
  top: 250px;
}

/* images carousel */
.uburubur {
  width: 400px;
  height: 200px;
}

.dilan {
  width: 400px;
  height: 150px;

}

.laskar {
  width: 400px;
  height: 150px;
}
</style>
