<template>
    <div class="home">
        <HelloWorld msg="Welcome to the Grand Exchange!"/>
        <br>
        <h5>Select the category the item you're looking for belongs to</h5>
        <div class="wrapper">
            <div class="categories">
                <router-link v-for="(category, index) in categories" :key="index" :to="{ name: 'category', params: {name: category.toLowerCase()}}" @click.native="selectCategory(category, index)">
                    <div class="category">
                        <p>{{category}}</p>
                    </div>
                </router-link>

            </div>
        </div>
      <div class="items">
          <div class="item" v-for="item in items" :key="item.id">
            <p>{{item.name}}</p>
          </div>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        data() {
            return {
              searchText: '',
            }
        },
      computed:{
          categories() {
            return this.$root.$data.categories;
          }
      },
        methods: {
            selectCategory(category, index) {
                this.$root.$data.selectedCategory = category;
                this.$root.$data.selectedCategoryIndex = index;
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .category {
        margin-top: 20px;
        padding-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        color: white;
        vertical-align: middle !important;
        horiz-align: center;
        background: url("https://www.runescape.com/img/rsp777/grand_exchange/overview-button.gif");
        height: 115px !important;
    }

    .category {
        width: 200px;
    }

</style>
