<template>
  <div class="container-book">
    <div class="left-book">
      <div class="category-book">
        <h2>{{dataBook.category}}</h2>
      </div>
      <div class="header-book">
        <div class="title-book">
          <h1>{{dataBook.title}}</h1>
        </div>
        <div class="stock-book" v-if="dataBook.status === 1">
          <h1>Available</h1>
        </div>
        <div class="stock-book" v-else>
          <h1>Not Available</h1>
        </div>
      </div>
      <div class="release-book">
        <h2>30 Juni 2019</h2>
      </div>
      <div class="desc-book">
        <p>{{dataBook.description}}</p>
      </div>
    </div>
    <div class="right-side">
      <div class="img-book">
        <img :src="dataBook.image" alt="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentDetail',
  props: ['dataBook']
}
</script>

<style lang="scss" scoped>
@font-face{
  font-family: "airbnb";
  src: url('../../assets/font/AirbnbCerealBold.ttf');
}

@font-face{
  font-family: "airbnb-book";
  src: url('../../assets/font/AirbnbCerealBook.ttf');
}

*{
  padding: 0;
  margin: 0;
  font-family: airbnb;
}

.container-book{
  display: flex;
  flex-direction: column;
  background-color: none;
  margin-top: 40px;
  margin-left: 70px;
  width: 60vw;
  height: 600px;
  .left-book{
    .category-book{
      width: 205px;
      height: 30px;
      h2{
        background: #FBCC38;
        border-radius: 15px;
        font-family: airbnb;
        font-size: 17px;
        line-height: 22px;
        color: white;
        text-align: center;
        padding: 5px;
      }
    }
    .header-book{
      display: flex;
      margin: 30px 0 0 0;
      .title-book{
        h1{
          font-family: airbnb;
          font-size: 50px;
          line-height: 65px;
        }
      }
      .stock-book{
        h1{
          font-family: airbnb;
          font-size: 30px;
          line-height: 39px;
          color: #99D815;
        }
      }
    }
    .release-book{
      margin: 10px 0 0 0;
      h2{
        font-family: airbnb;
        font-size: 20px;
        line-height: 26px;
      }
    }
    .desc-book{
      margin: 40px 0 100px;
      p{
        font-family: airbnb-book;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        color: #000000;
      }
    }
  }
  .right-side{
    .img-book{
      img{
        position: absolute;
        right: 70px;
        top: 300px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        width: 200px;
        height: 288.81px;
      }
    }
  }
}
</style>
