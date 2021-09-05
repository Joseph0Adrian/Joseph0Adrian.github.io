<template>
  <div>
    <div>
      <Header
        v-on:submit="handleSubmit($event)"
      />
    </div>
    <div>
      <DetailMovie
        v-bind:movie="movie"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import DetailMovie from '@/components/DetailMovie.vue'

export default {
  name: 'Main',
  components: {
    Header,
    DetailMovie,
  },
  data () {
    return {
      movie: null,
      movieName: 'cars',
    }
  },
  created () {
    this.getMovie()
  },
  methods: {
    getMovie () {
      fetch(`http://www.omdbapi.com/?apikey=95edcade&t=${this.movieName}&plot=full`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.movie = data;
      })
      .catch(err => {
        console.log(err)
      })
    },
    handleSubmit (movieName) {
      if (movieName !== '') {
        this.movieName = movieName
        this.getMovie()
        return
      }
    },
  },
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
