<template>
  <div class="movie-list">
      <Movie class="movie" :movie="movie" v-for="movie in movieList" :key="movie.id"/>
  </div>
</template>

<script>
import Movie from './Movie'
import { mapState } from 'vuex'

export default {
  name: 'MovieList',
  components: {
    Movie
  },
  data: () => {
    return {

    }
  },
  computed: {
    ...mapState(['movieList'])
  }
};
</script>

<style lang="scss" scoped>
  // .movie-list{
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   align-items: center;
  // }
</style>
