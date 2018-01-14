<template>
    <div v-if="users_loaded" class="page">
        <pre>
            Хочу обратить внимание, серьезного оформления своей работы я не делал, 
            так как это тестовое задание и мне бы не хотелось на него тратить слишком много времени.
            В коде вы можете заметить, что я использую современный синтаксис css, но так же знаком и со старым(кросбраузерность).
            
            Есть проблема с пагинацией, так как не понятно как будут отдаваться "больше миллионов пользователей" 
            я сделал из расчета что этим управляет сервер(постраничной навигации и ее настройки в задании не предусматривалось)
        </pre>
        <div class="pagination">
            <div class="prev" @click="prev_page">Предыдущая страница</div>
            <div class="next" @click="next_page">Следующая страница</div>
        </div>
        <div class="list">
            <router-link class="item" v-for="item in users" :key="item.id" :to="{name: 'users_edit', params: {id: item.id}}">
                <span class="avatar">
                    <img v-if="item.avatarUrl" :src="item.avatarUrl" alt="img">
                </span>
                <span class="name">{{item.name}}</span>
            </router-link>
        </div>
        <div class="pagination">
            <div class="prev" @click="prev_page">Предыдущая страница</div>
            <div class="next" @click="next_page">Следующая страница</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wrapper',
    data() {return {}},
    computed: {
        users() {return this.$store.getters['users/list']},
        users_loaded() {return !this.$store.getters['users/loading']}
    },
    methods: {
        prev_page() {
            this.$store.dispatch('users/load', 'prev')
        },
        next_page() {
            this.$store.dispatch('users/load', 'next')
        }
    },
    mounted() {
        this.$store.dispatch('users/load')
    },
}
</script>

<style src="./style.css" scoped></style>