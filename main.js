'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        };
    },
    methods: {
        getEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiUrl).then((response) => {
                    this.emails.push(response.data.response);
                });
            }
        }
    },
    mounted() {
        this.getEmails();
    },
}).mount('#app');



// const emails = axios.get(
//     'https://flynn.boolean.careers/exercises/api/random/mail'
//     ).then ((response) => 
//     console.log(response.data.response));