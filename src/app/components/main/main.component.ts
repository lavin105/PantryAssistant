import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  pantrylist: string[];
  shoppinglist: string[];

  constructor() {}

  ngOnInit() {
    this.pantrylist = ["test1", "test2", "test3"];
    this.shoppinglist = ["test1", "test2", "test3"];
  }

  addShoppingItem(s) {
    this.shoppinglist.push(s);
  }

  addPantryItem(p) {
    this.pantrylist.push(p);
  }
  removePantryItem(p){
    for(let i=0; i<this.pantrylist.length; i++){
      if(this.pantrylist[i]==p){
        this.pantrylist.splice(i, 1);
      }
    }


  }
  removeShoppingItem(s){
    for(let i=0; i<this.shoppinglist.length; i++){
      if(this.shoppinglist[i]==s){
        this.shoppinglist.splice(i, 1);
      }
    }
  
  
  }
  purchasedItem(s){
    for(let i=0; i<this.shoppinglist.length; i++){
      if(this.shoppinglist[i]==s){
        this.pantrylist.push(this.shoppinglist[i]);
        this.shoppinglist.splice(i, 1);
      }
    }
  
  
  }
  depleatedItem(p){
    for(let i=0; i<this.pantrylist.length; i++){
      if(this.pantrylist[i]==p){
        this.shoppinglist.push(this.pantrylist[i]);
        this.pantrylist.splice(i, 1);
      }
    }
  
  
  }
}


