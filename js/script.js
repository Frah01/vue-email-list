const {createApp} = Vue

createApp({
    data(){
        return{
            arrayNumber: []
        }
    },
    methods: {
        getEmails(){
            for(let i=0; i>10 ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                    this.arrayNumber.push(result.data.response)
                })
                console.log(arrayNumber)
            }
        }
    },
}).mount('#app')