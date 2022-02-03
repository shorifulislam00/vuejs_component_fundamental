let githubUserComponent = {
    template: '#github-user-template',
    props: {
        username: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            user: {}
        }
    },
    created() {
        fetch(`https://api.github.com/users/${this.username}`)
            .then(response => response.text())
            .then(data => {
                // console.log(JSON.parse(data))
                this.user = JSON.parse(data)
            })
    }
}

new Vue({
    el: "#app",
    components: {
        githubUser: githubUserComponent
    },
    data () {
        return {
            users: ['shorifulislam00', 'TusharSahaTonoy', 'mddider312']
        }
    }
})
