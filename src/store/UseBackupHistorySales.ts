import { defineStore } from "pinia";

export const UseBackupHistorySales = defineStore('UseBackupHistorySales', {
    state() {
        return{
            allBackupsHistorySales: [] as Array<any>,
            allBackupsHistoryExpenses: [] as Array<any>
        }
    },
    getters:{
        getBackupsSalesHistory():Array<any>{
            return this.allBackupsHistorySales;
        },
        getBackupsExpensesHistory():Array<any>{
            return this.allBackupsHistoryExpenses;
        }
    },
    actions:{
        pushNewBackupSale(newBackup:object):void{
            this.allBackupsHistorySales.unshift(newBackup)
        },
        pushNewBackupExpense(newBackup:object):void{
            this.allBackupsHistoryExpenses.unshift(newBackup)
        }
    },
    // persist: true
})