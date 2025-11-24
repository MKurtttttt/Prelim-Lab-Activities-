import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demo";
  title = " My First App!";
  description:string = "This is my new Angular Application";


  // Property Binding

  imageUrl = 'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg';
  w = 120;
  h = 130;
  textColor = 'Purple';
  altText = "Cute Cat"

  isHighlighted = true;

  yourName = "";

  count = 0;
  increment () {
    this.count++;
  }
  decrement () {
    this.count--;
  }
}
