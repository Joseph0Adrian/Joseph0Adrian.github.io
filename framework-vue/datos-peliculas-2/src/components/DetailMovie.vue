<template>
  <div class="card mb-3">
    <img 
      v-bind:src="movie.Poster" 
      class="card-img-top" 
      v-bind:alt="movie.Title"
    >
    <div class="card-body">
      <h5 class="card-title">{{ movie.Title }}</h5>
      <p class="card-text">{{ movie.Plot }}</p>
      <p class="card-text">Director: {{ movie.Director }}</p>
      <p class="card-text">Writer: {{ movie.Writer }}</p>
      <p class="card-text">Actors: {{ movie.Actors }}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailMovie',
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
  },
}
</script>