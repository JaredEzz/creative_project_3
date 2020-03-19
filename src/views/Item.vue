<template>
  <div class="item">
    <h2>{{this.itemData.name}}</h2>
    <img v-bind:src="this.itemData.icon_large"/>
    <h4>Type: {{itemData.type}}</h4>
    <h5>{{itemData.description}}</h5>
    <br>
    <p>Current Price — {{this.itemData.current.price}} gp</p>
    <p>Members Item? {{this.itemData.members ? "Yes" : "No"}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      itemData() {
        return this.$root.$data.itemData.items[0];
      },
    },
  }
</script>
