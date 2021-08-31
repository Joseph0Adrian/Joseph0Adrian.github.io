<template>
  <div class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" on:submit={handleSubmit}>
          <input
            type="text"
            name="movie"
            v-model="searchTerm"
            placeholder="Search a movie"
            autocomplete="off"
          />
          <input 
            type="submit" 
            class="form-control form-control-dark"
            value=""
            v-on:click="search"
          />
        </form>

        <div class="text-end">
          <!-- <input type="submit" class="btn btn-outline-light me-2" value="Search" v-on:click="search"/> -->
          <!-- <button type="button" class="btn btn-outline-light me-2">Search</button> -->
          <!-- <button type="button" class="btn btn-warning">Sign-up</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            searchTerm:'',
        }
    },
    methods: {
        search (e) {
            e.preventDefault()
            const searchTerm = this.searchTerm
            const movieName = window.isNaN(parseInt(searchTerm)) ? searchTerm.toLowerCase() : searchTerm
            this.$emit('submit', movieName)
        },
    },
}
</script>
