<template>
    <div>
        <h3>{{this.category}}</h3>
        <br>
        <div class="alpha" v-for="letter in this.typeData[this.index].alpha" :key="letter">
            <router-link to="/item">
                <p style="color: #c2b7a9">{{letter.letter}} — {{letter.items}} items</p>
            </router-link>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
            }
        },
        computed: {
            category() {
                return this.$root.$data.selectedCategory;
            },
            typeData() {
                return this.$root.$data.typeData;
            },
            index() {

                return this.$root.$data.selectedCategoryIndex;
            }
        },
        created() {
        },
        methods: {

        }
    }
</script>

