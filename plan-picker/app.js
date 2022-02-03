let planComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected(){
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select(){
            this.$emit('select', this.name)
            // this.selected = true
        }
    }
}

let planPickerComponent = {
    template: '#plan-picker-template',
    components: {
        plan: planComponent
    },
    data (){
        return {
            plans: ['The hacker', 'The single', 'The Curious', 'The Addict'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan){
            this.selectedPlan = plan
        }
    }
}



new Vue({
    el: "#app",
    components: {
        planPicker: planPickerComponent
    }
})
