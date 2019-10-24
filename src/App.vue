<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <h1 style="color:#41b883; font-weight: bold;">Vuenus Components</h1>
    <hr>
    <div class="container">
        <vuenus-table-list :columns="columns" :rows="rows"></vuenus-table-list>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
      return {
          columns: [
            {
                field: "title",
                label: "Title",
                type: "text"
            },
            {
                field: "img",
                label: "Thumbnail",
                type: "img",
                thClass: "gull-th-class",
                thStyle: "width:150px;",
                tdClass: "",
                tdStyle: ""
            }
          ],
          rows: [
            {
                id: 1,
                img: require("@/assets/images/products/speaker-1.jpg"),
                title: "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
                createdAt: "2018-10-29",
                checkbox: false
            }
          ]
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
