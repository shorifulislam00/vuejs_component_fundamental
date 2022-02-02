Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data (){
        return {
            plans: ['The hacker', 'The single', 'The Curious', 'The Addict']
        }
    }
})

Vue.component('plan', {
    template: '#plan-template',
    props: ['name']
})

new Vue({
    el: "#app"
})
