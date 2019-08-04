<template>
  <div class="card">
    <div class="card-image">
      <figure class="image 1by2" alt="placeholder image">
        <img :src="movie.image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ movie.title }}</p>
          <ul>
            <li><p class="subtitle is-7">Genre: {{ movie.genre.join(' | ') }}</p></li>
            <li><p class="subtitle is-7">Rating: {{ movie.rating }}</p></li>
            <li><p class="subtitle is-7">Release Date: {{ movie.releaseDate }}</p></li>
          </ul>
        </div>
      </div>
      <!-- <div class="content is-small">
        {{ movie.info }}
      </div> -->
    </div>
    <div class="card-footer">
      <a class="cart-footer-item button is-fullwidth is-dark is-outlined">Add to Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movie: Object
  },
  data: () => ({
    
  }),
};
</script>

<style lang="scss" scoped>
  
</style>
