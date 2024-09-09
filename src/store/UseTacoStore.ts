import { defineStore } from "pinia";

export const UseTacoStore = defineStore('UseTacoStore', {
    state() {
        return{
            tacosAmount:0,
            tacosPrice:30,
        }
    },
    getters:{
        getTacosAmount():number{
            return this.tacosAmount
        },

        getTacosPrice():number{
            return this.getTacosPrice
        },
    },
    actions:{
        setTacosAmount(newTacosAmount:number):void{
            this.tacosAmount = newTacosAmount;
        },
        setTacosPrice(newTacosPrice:number):void{
            this.tacosPrice = newTacosPrice;
        }
    },
    // persist: true
})