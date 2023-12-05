'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: '',
        };
    },
    methods: {
        
    },
    mounted() {
        axios.get(this.apiUrl).then((response) => {
            this.email = response.data.response;
    });
},
}).mount('#app');


// const emails = axios.get(
//     'https://flynn.boolean.careers/exercises/api/random/mail'
//     ).then ((response) => 
//     console.log(response.data.response));