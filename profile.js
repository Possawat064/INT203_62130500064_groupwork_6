const app = {
    data() {
        return {
            name: 'Possawat Tanam',
            country: 'Bangkok,Thailand',
            followers: '31M',
            projects: 'GroupWork 2',
            ranks: 25,
            profile: './images/1.jpg',
            cover: './images/2.jpg'
        }
    }

}
Vue.createApp(app).mount('#app')