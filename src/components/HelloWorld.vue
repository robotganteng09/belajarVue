<template>
  <body>
    
  </body>
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
    >
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
    <button v-on:click="count1++">+</button>
    <span>{{ count1 }}</span>
    <button v-on:click="count1--">-</button>
    <br>
    <button @click="sayHello(`masGarling`)">sayHello</button>
    <input type="text" v-on:keydown.enter="sayHello(`masGarling`)">
    <div>
    
      <a v-bind:href="URL">fajrul</a>
    </div>
    <div>
      <img src="@/assets/download.jpeg" alt="">
    </div>
   <div>
   <img :src="gambarLokal" alt="" >
   </div>
</template>
  
<script>
import gambarLokal from "@/assets/download.jpeg";

  
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
      count1:0,
      tekan1:"tekan1",
      lampu:false,
      nilai:100,
      buah:['nanas','mangga','jamur'],
      
      footBall:
      [{nama:"CR7",posisi:"RW",klub:"Al Nasser"},
      {nama:"LM10",posisi:"RW",klub:"Inter Miami"},
      {nama:"NJ11",posisi:"LW",klub:"Al Hilal"},
      {nama:"SUAREZ9",posisi:"CF",klub:"Inter Miami"}
      ],
      URL:"https://www.youtube.com/watch?v=rz6tWraWi00&t=345s",
      gambarLokal 
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
    },
    sayHello(apasaja){
      alert('halo'+apasaja)
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
