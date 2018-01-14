<template>
    <div v-if="user_loaded" class="page">
        <span class="avatar">
            <img v-if="user.avatar !== ''" :src="user.avatar" alt="img">
        </span>
        <input type="text" :value="user.name" @input="set_username($event.target.value)" class="name">
        <button @click="save" class="save">Сохранить</button>
    </div>
</template>

<script>
export default {
    name: 'wrapper',
    props: ['id'],
    data() {return {}},
    computed: {
        user() {return this.$store.getters['user/item']},
        user_loaded() {return !this.$store.getters['user/loading']}
    },  
    methods: {
        set_username(v) {
            this.$store.commit('user/set_name', v);
        },
        save() {
            this.$store.dispatch('user/save').then(()=>{
                this.$router.push({name: 'users'})
            }).catch(()=>{
                console.log('что то сломалось')
            });
        }
    },
    mounted() {
        this.$store.dispatch('user/load', this.id)
    },
}
</script>

<style src="./style.css" scoped></style>