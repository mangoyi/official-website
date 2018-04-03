<template>
  <div>
    <new-header></new-header>
  </div>
</template>

<script>
    import NewHeader from '@/components/NewHeader.vue';

    export default {
        data() {
            return {
                msg: 'hello yc'
            }
        },
        components: {
            NewHeader: NewHeader
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
