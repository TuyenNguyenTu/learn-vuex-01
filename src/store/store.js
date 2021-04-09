import Vue from 'vue';
import Vuex from 'vuex'
import { setTimeout } from 'core-js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: [
            { id: 1, name: "Learn Vuex Tutorial", totalChap: 12, price: 300 },
            { id: 2, name: "Learn ASP.Net Core Tutorial", totalChap: 25, price: 400 },
            { id: 3, name: "Learn HTML Tutorial", totalChap: 8, price: 100 },
            { id: 4, name: "Learn Java Tutorial", totalChap: 20, price: 310 }
        ],
        title: 'Tuyen Nguyen Tu',
        obj: {
            id: 1,
            name: 'Tuyen Nguyen Tu',
            message: 'Tuyen say hello'
        },
        message: 'Hello Vuex',
        myInfo: {
            name: 'Tuyen',
            age: 22
        },
        contact: [{
            id: 1,
            address: 'Hà Nội'
        }, {
            id: 2,
            address: 'Thái Bình'
        }],
        increaseValue: 0
    },
    getters: {
        tutorialSale: state => {
            var tutorialSale = state.posts.map(tutorial => {
                return {
                    name: "** " + tutorial.name + " **",
                    price: tutorial.price / 2
                };
            });
            return tutorialSale;
        }
    },
    mutations: {
        reducePrices: (sate, payload) => {
            setTimeout(() => {
                sate.posts.forEach(item => {
                    item.price += payload;
                })
            }, 3000);

        },
        updateMessage(state, message) {
            state.obj.message = message;
        },
        ADD_ADDRESS(state, data) {
            state.contact.push({
                id: state.contact.length + 1,
                address: data
            });
            console.log(state.contact)
        },
        INCREASE(state) {
            state.increaseValue++;
        },
        CHANGE_NAME(state, name) {
            state.myInfo.name = name
        },
        CHANGE_AGE(state, age) {
            state.myInfo.age = age
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrices', payload)
            }, 2000);
        },
        addAdress: (context, data) => {
            context.commit('ADD_ADDRESS', data)
        },
        increase: (context) => {
            context.commit('INCREASE');
        }
    },
})