<template>
    <div class="shop-wrapper" v-if="starships.length > 0">
        <starship
            v-for="(starship, index) in starships"
            :key="`${index}`"
            :starship="starship"/>
    </div>
</template>
<script>
import Starship from '@/components/Starship'

import * as types from '@/store/types'

export default {
    components: {
        'starship': Starship
    },
    mounted () {
        this.$store.dispatch(types['GET_ALL_STARSHIPS'])
        .then((data) => {
            this.starships = data
        })
    },
    data () {
        return {
            starships: []
        }
    }
}
</script>
<style>

</style>
