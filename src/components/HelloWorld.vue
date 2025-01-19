<template>
    <h1>{{ msg }}</h1>
    <h1>{{ garling }}</h1>
    <h1>{{ halo }}</h1>
    <h2>{{ count }}</h2>
    <button @click="tambah">+</button>
    {{ count }}
    <button @click="kurang">-</button>
    <button @click="muncul">{{  tekan}}</button>
    <h1 v-if="invis">AKU MUNCUL</h1>
    <button @click="idup">{{ tekan1 }}</button>
   
    <h1 v-show="lampu">aku ganteng</h1>
    <h2 v-text="hai"></h2>
    <span v-if="nilai >70">
      bagus
    </span>
    <span v-else-if="nilai <= 70 && nilai >60">
      predikat b
    </span>
    <span v-else>
      predikat c
    </span>

    <h1 v-html="ini"></h1>
    <ul v-for="(jenis,Index) in buah" :key="`${jenis},${Index}`">
      <li>{{ jenis}} {{ Index }}</li>
    </ul>
    <ul v-for="(pemain,Index) in footBall" :key="`${pemain},${Index}`">
      <li>{{ pemain.nama}} - {{ pemain.klub }} - {{ Index }}</li>
    </ul>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  
  data() {
    return {
      garling: "Hello World!",
      tekan : "button",
      hai: "hello",
      halo: "jadi gini le",
      invis: false,
      count: 0,
      tekan1:"tekan1",
      lampu:false,
      nilai:60,
      buah:['nanas','mangga','jamur'],
      footBall:
      [{nama:"CR7",posisi:"RW",klub:"Al Nasser"},
      {nama:"LM10",posisi:"RW",klub:"Inter Miami"},
      {nama:"NJ11",posisi:"LW",klub:"Al Hilal"},
      {nama:"SUAREZ9",posisi:"CF",klub:"Inter Miami"}
      ]
    }
  },
    
  methods: {
    muncul() {
      this.invis = !this.invis
    },
      tambah(){
           this.count++
      },
    kurang(){
      this.count--
    },
    idup(){
      this.lampu = !this.lampu
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
