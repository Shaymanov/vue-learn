<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<!-- eslint-disable no-unused-vars -->
<template>
  <h1>Second Components</h1>
  <p><a href="http://localhost:8080">home</a></p>
  <p><a href="http://localhost:8080/first">first</a></p>
  <p>x <input v-model="x"></p>
    <p>y <input v-model="y"></p>
    <p>---------------------</p>
    <p>= <span v-text="result"></span></p>
</template>

<script>
function isNotNumericValue(value) {
    return isNaN(value) || !isFinite(value);
  }

export default {
  data: function() {
    return { x: 0, y: 0, lastResult: 0 };
  },
      computed: {
        result: function() {
          let x = parseFloat(this.x);
          if(isNotNumericValue(x))
          return this.lastResult;

          let y = parseFloat(this.y);
          if(isNotNumericValue(y))
          return this.lastResult;
          
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.lastResult = x + y;

          return this.lastResult;
        } 
}
}

  
</script>

<style scoped>

p, input { font-family: monospace; }
p { white-space: pre; }

</style>