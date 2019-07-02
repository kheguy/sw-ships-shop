<template>
    <div
        @click.self="click()"
        class="starship-wrapper">
        <div
            v-if="showFull"
            key="full">
            <h3>
                {{ starship.name }}
            </h3>
            <ul class="details-list">
                <li>{{ starship.model }}</li>
                <li>{{ starship.manufacturer }}</li>
                <li>{{ starship.cost_in_credits }}</li>
                <li>{{ starship.length }}</li>
                <li>{{ starship.starship_class }}</li>
            </ul>
        </div>
        <div
            v-else
            key="short">
            <h3>
                {{ starship.name }}
            </h3>
        </div>
        <div class="shop-button-wrapper">
            <button
                v-if="isPuchased"
                @click.self="removeStarship()"
                class="button remove">
                Remove
            </button>
            <button
                v-else
                @click.self="buyStarship()"
                class="button buy">
                Buy
            </button>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    starship: {
      type: Object,
      required: false
    },
    isPuchased: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showFull: false
    }
  },
  methods: {
    click () {
      this.showFull = !this.showFull
    },
    buyStarship () {
      this.$emit('buy-button-click', this.starship.model)
    },
    removeStarship () {
      this.$emit('remove-button-click', this.starship.model)
    }
  }
}
</script>
<style scoped>
    .starship-wrapper {
        padding: 0.5em;
        border: 1px solid #CCC;
        transition: all 0.5s linear;
    }

    .starship-wrapper:hover {
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .shop-button {
        border: 1px s
    }
    .details-list {
        text-align: left;
    }
    .shop-button-wrapper {
        width: 50px;
        position: relative;
        top: -25px;
        left: calc(100% + 5px);
    }

    .button {
        color: #FFF;
        width: 100px;
        border: none;
        outline: none;
        padding: 0.5em;
    }
    .button:hover {
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    .buy {
        background-color: #0F0;
    }

    .remove {
        background-color: #F00;
    }
</style>
