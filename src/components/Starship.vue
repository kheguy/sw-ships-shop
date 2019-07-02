<template>
    <div
        @click="click()"
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

    </div>
</template>
<script>
export default {
  props: {
    starship: {
      type: Object,
      required: true
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
    }
  }
}
</script>
<style>
    .starship-wrapper {
        padding: 0.5em;
        border: 1px solid #CCC;
        transition: all 0.5s linear;
    }

    .starship-wrapper:hover {
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    .details-list {
        text-align: left;
    }
</style>
