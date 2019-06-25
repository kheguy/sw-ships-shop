<template>
    <div>
        <span>
            {{ starship.name }}
        </span>
    </div>
</template>
<script>
export default {
    props: {
        starship: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>

</style>
