Vue.component('plan', {
    template: '#plan-template',
    props: ['name']
})

new Vue({
    el: "#app",
    data: {
        plans: ['The hacker', 'The single', 'The Curious', 'The Addict']
    }
})
