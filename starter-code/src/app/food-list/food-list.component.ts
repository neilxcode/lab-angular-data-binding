import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[];
  newFood: any = {};

  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  addFood(){
    console.log("Add food has been called");
    // add contact to contacts list
    const addFood = {name: this.newFood.name, calories: this.newFood.calories, image: this.newFood.image, quantity: this.newFood.quantity}
    this.foodsList.push(addFood);
    // clear inputs
    this.newFood.name = "";
    this.newFood.calories = "";
    this.newFood.image = "";
    this.newFood.quantity = "";
  }



}
