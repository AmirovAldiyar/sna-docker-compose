<template>
  <div class="content">
    <Quote :text="text" :author="author" />
    <button class="button" @click="getQuote">Get Quote</button>
    <div class="loading" v-if="loading">LOADING</div>
  </div>
</template>

<script>
import Quote from "@/components/Quote";
export default {
name: "RandomQuotes",
  components: {Quote},
  data () {
    return {
      author: '',
      text: '',
      loading: false,
      apiUrl: `http://${process.env.VUE_APP_API}/v1/randomtext`
    }
  },
  mounted() {
    fetch(this.apiUrl).then(res => {
      return res.json()
    }).then(result => {
      this.text = result.citation
      this.author = '- ' + result.author
    })
  },
  methods: {
    getQuote(){
      this.text = ""
      this.author = ""
      this.loading = true
      fetch(this.apiUrl).then(res => {
        return res.json()
      }).then(result => {
        this.text = result.citation
        this.author = '- ' + result.author
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.content {
  background-color: #e7e7fb;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.button {
  height: 50px;
  width: 200px;
  background-color: rgba(0,0,0,0.1);
  border: none;
  color: rgba(0,0,0,0.5) ;
  margin-top: 100px;
  font-size: 20px;
}
.button:hover {
  background-color: rgba(0,0,0,0.2);
  color: rgba(0,0,0,0.6) ;
}
.button:active {
  background-color: rgba(0,0,0,0.3);
  color: rgba(0,0,0,0.7) ;
}
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  font-size: 40px;
}
</style>