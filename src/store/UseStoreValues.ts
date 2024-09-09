import IItem from "@/interface/IItem";
import ISummary from "@/interface/ISummary";
import { defineStore } from "pinia";

export const UseUserStoreValues = defineStore("UseStoreValues", {
  state() {
    return {
      totalItems: [
        {
          itemName: "Tacos",
          itemPrice: 30,
          itemImage: require("../assets/img/items/taquito.png"),
          itemDescription: ['Maciza', 'Costilla con hueso', 'Falda de Costilla', 'Chamorro','Buche', 'Nana', 'Trompa', 'Oreja', 'Cachete', 'Lengua', 'Surtida', 'Cuero delgado', 'Cuero con Panza' ],
        },
        {
          itemName: "Gorditas Carnitas",
          itemPrice: 40,
          itemImage: require("@/assets/img/items/gorditaChicharron.png"),
          itemDescription:[]
        },   {
          itemName: "Tortas",
          itemPrice: 35,
          itemImage: require("@/assets/img/items/tortasimple.png"),
          itemDescription:[]
        },
        {
          itemName: "Quesadillas",
          itemPrice: 30,
          itemImage: require("@/assets/img/items/quesadillaSimple.png"),
          itemDescription:['Hongos', 'Chicharron', 'Pollo', 'Queso']
        },
          {
          itemName: "Refrescos Vidrio",
          itemPrice: 25,
          itemImage: require("@/assets/img/items/vidrio-min.png"),
          itemDescription:[]
        },
        {
          itemName: "Refrescos Desechable",
          itemPrice: 27,
          itemImage: require("@/assets/img/items/desechables-min.png"),
          itemDescription:[]
        },
        {
          itemName: "Queso Extra",
          itemPrice: 10,
          itemImage: require("@/assets/img/items/quesito.png"),
          itemDescription:[]
        },
        {
          itemName: "Gorditas Chicharron",
          itemPrice: 35,
          itemImage: require("@/assets/img/items/gorditas-min.png"),
          itemDescription:[]
        },
       
        {
          itemName: "Gorditas Chicharron Con Carnitas",
          itemPrice: 65,
          itemImage: require("@/assets/img/items/gorditasChicharronCarnitas.png"),
          itemDescription:[]
        },
        {
          itemName: "Tortas Carnitas",
          itemPrice: 35,
          itemImage: require("@/assets/img/items/torta.png"),
          itemDescription:[]
        },
        {
          itemName: "Quesadillas Carnitas",
          itemPrice: 40,
          itemImage: require("@/assets/img/items/carnitasQuesadilla.png"),
          itemDescription:[]
        },
    
        {
          itemName: "Chamorro Por Pieza",
          itemPrice: 150,
          itemImage: require("@/assets/img/items/chamorro.jpg"),
          itemDescription:[]
        },
        {
          itemName: "Kilo (1Kg)",
          itemPrice: 400,
          itemImage: require("@/assets/img/items/peso.png"),
          itemDescription:[]
        },
        {
          itemName: "Medio Kilo (1/2Kg)",
          itemPrice: 200,
          itemImage: require("@/assets/img/items/peso.png"),
          itemDescription:[]
        },
        {
          itemName: "Cuarto de Kilo (1/4Kg)",
          itemPrice: 100,
          itemImage: require("@/assets/img/items/peso.png"),
          itemDescription:[]
        },
        {
          itemName: "Otros",
          itemPrice: 1,
          itemImage: require("@/assets/img/items/financiero (3).png"),
          itemDescription:[]
        },
      ] as Array<IItem>,
      grandTotal: 0,
      sells: [] as Array<object>,
      summary: [] as Array<ISummary>,
    };
  },
  getters: {
    getGrandTotal(): number {
      return this.grandTotal;
    },
    getSells(): Array<any> {
      return this.sells;
    },
    getTotalItems(): Array<IItem> {
      return this.totalItems;
    },
    getSummary(): Array<ISummary> {
      return this.summary;
    },
  },
  actions: {
    updateGrandTotal(newGrandTotal: number) {
      this.grandTotal += newGrandTotal;
    },
    reduceGrandTotal(newGrandTotal: number) {
      this.grandTotal - newGrandTotal;
    },
    resetGrandTotal() {
      this.grandTotal = 0;
    },
    setNewSell(newSell: object): void {
      this.sells.push(newSell);
    },
    resetSells(): void {
      this.sells = [];
    },
    pushToSummary(valuesSummary: ISummary): void {
      this.summary.push(valuesSummary);
    },
    resetSummary(): void {
      this.summary = [];
    },
  },
}); 