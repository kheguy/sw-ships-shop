<template>
    <div class="shop-wrapper" v-if="isStarshipsExists">
        <starship
            v-for="(starship, index) in starships"
            :key="`${index}`"
            :starship="starship"/>
    </div>
</template>
<script>
import Starship from '@/components/Starship'

import * as types from '@/store/types'
import { setInterval, clearInterval } from 'timers'

export default {
  components: {
    'starship': Starship
  },
  created () {
    this.getStarships()
  },
  mounted () {
    this.timer = setInterval(() => {
      this.getStarships()
    }, 6000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  data () {
    return {
      starships: [],
      timer: null
    }
  },
  methods: {
    async getStarships (page) {
      this.$store.dispatch(types['GET_ALL_STARSHIPS'], {
        page
      }).then((starships) => {
        this.starships = starships
      })
    }
  },
  computed: {
    isStarshipsExists () {
      return this.starships.length > 0
    }
  }
}
</script>
<style>
    .shop-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .shop-wrapper div {
        width: 400px;
        margin-bottom: 1em;
    }
</style>
