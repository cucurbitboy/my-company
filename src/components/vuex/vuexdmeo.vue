<template>
    <div class="page">
        <div v-text="msg"></div>
        <div>{{this.$store.state.count}}</div>
        <div>getters获取计算后的值：{{this.$store.getters.getcount}}</div>

        <div>
            <!-- <button @click="removeCount">-</button> -->
            <button @click="removeFun">-</button>
            <div><input type="text" name="" v-model="this.$store.state.count"></div>
            <!-- <button @click="addCount">+</button> -->
            <button @click="addFun">+</button>
        </div>
        <div>简短表示{{count1}}</div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
export default {
    name: 'vuexdemo',
    data(){
        return {
            msg: 'aaa'
        }
    },
    methods: {
        addCount(){
            this.$store.commit("add")
        },
        removeCount: function(){
            this.$store.commit("remove")
        },
        // 官方建议用法
        addFun(){
            let n = 2;
            this.$store.dispatch("addFun", n)
        },
        removeFun(){
            this.$store.dispatch("removeFun")
        }
    },
    computed: {
        ...mapState({
            count1: state => state.count
        })
    }
}
</script>

<style>

</style>
