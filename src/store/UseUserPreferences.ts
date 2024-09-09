import { defineStore } from "pinia";

export const UseUserPreferences = defineStore('UseUserPreferences',{
    state() {
        return{
            showImages:true,
            isPaid:false,
        }
    },
    getters:{
        getShowImages():boolean{
            return this.showImages;
        },
        getIsPagePaid():boolean{
            return this.isPaid;
        }
    },
    actions:{
        setShowImages():void{
            this.showImages = !this.showImages;
        },
        setTrueShowImages():void{
            this.showImages = true;
        },
        setFalseShowImages():void{
            this.showImages = false;
        }
    }, 
    // persist: true

})