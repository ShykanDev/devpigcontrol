import { IExpense } from "@/interface/IExpense";
import { INewEarn } from "@/interface/INewEarn";
import { ISaleHistory } from "@/interface/ISaleHistoryISummary";
import ISummary from "@/interface/ISummary";
import { defineStore } from "pinia";

export const UseSalesStore = defineStore('UseSalesStore', {

    state: () => {  
        return{
            salesHistory:[]as Array<ISaleHistory | ISummary>,
            totalEarnedHistory: [] as Array<INewEarn>, 
            totalEarned: 0,
            userExpenses:[]as Array<IExpense>,
            userExpensesToBackup:[]as Array<IExpense> ,
            expenseTotal: 0,
            expensesReduced: 0,
            totalExpenses: 0,
            totalFinancialHistory: [] as Array<object>,
        }
    },
    getters:{
        getSalesHistory(): Array<object>{
            return this.salesHistory;
        },
        getTotalEarned(): number{
            return this.totalEarnedHistory.reduce((a, b) => a + b.itemSutotal, 0);
        },
        getExpensesReduced(): number{
            return this.userExpenses.reduce((a, b) => a + b.expenseAmount, 0);
        },
        getExpense(): number{ 
            return this.expenseTotal;
        },
        getUserExpenses(): Array<object>{
            return this.userExpenses;
        },
        getUserExpensesToBackup(): Array<IExpense>{
            return this.userExpensesToBackup;
        },
        getTotalFinancialHistory(): Array<object>{
            return this.totalFinancialHistory;
        }
    },
    actions:{
        addSaleHistory(newSale: ISaleHistory): void{
            this.salesHistory.unshift (newSale);
        },
        pushNewEarn(newEarn: INewEarn): void{
            this.totalEarnedHistory.unshift(newEarn);
        },
        resetTotalEarned(): void{
            this.totalEarned = 0;
        },
        resetTotalEarnedHistory(): void{
            this.totalEarnedHistory = [];
        },
        setNewExpense(newExpensesTotal: number): void{
            this.expenseTotal = newExpensesTotal;
        },
        pushUserNewExpense(newUserExpenses: IExpense): void{
            this.userExpenses.unshift(newUserExpenses);
        },
        resetSalesHistory(): void{
            this.salesHistory = [];
        },
        resetUserExpenses(): void{
            this.userExpenses = [];
        },
        resetUserExpensesToBackup(): void{
            this.userExpensesToBackup = [];
        },
        pushNewBackupExpense(newBackup:IExpense):void{
            this.userExpensesToBackup.unshift(newBackup)
        },
        pushNewFinancialHistory(newBackup:object):void{
            this.totalFinancialHistory.unshift(newBackup)
        }
    },
    // persist: true
})