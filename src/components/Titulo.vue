<template>
  <div>   
       <p :class="`text-center fs-${size}`">{{text}}</p>
  </div>

</template>

<script>
export default {
  props:['size', 'text']

}
</script>

<style>

</style>