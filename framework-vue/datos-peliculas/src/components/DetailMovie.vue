<template>

  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{movie.Title}}</h5>
          <p class="card-text"></p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
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