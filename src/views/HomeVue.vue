<template>
  <div>
    <h1>Cчетчик {{ counter }}</h1>
    <button class="btn btn-danger" v-on:click="decrease">Уменьшить</button>
    <button class="btn btn-success" v-on:click="encrease">Увеличить</button>
    <br>
    <button class="btn btn-primary" v-on:click="reset">Сбросить &#x466;</button>
    <br>
    <a v-bind:href="site" class="btn btn-primary">First</a>
    <input type="text" v-bind:placeholder="text" v-bind:value="valueInput" v-on:input="changeInput"
      class="btn btn-danger">
    <h1>Значение ввода: <span style="max-width: 100%; ">{{ valueInput }} </span></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'enter the text',
      counter: 0,
      site: 'http://localhost:8080/first',
      valueInput: 'enter the text'
    }
  },
  methods: {
    // названия методам даешь сам
    encrease() {
      this.counter++
    },
 
    decrease() {
      this.counter--
    },
    reset() {
      this.counter = 0
    },

    changeInput() {
      this.valueInput = event.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
$red: #ff0000cf;

.btn {
  margin: 5px;
}
</style>


