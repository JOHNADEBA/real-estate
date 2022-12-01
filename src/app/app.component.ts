import { Component } from '@angular/core';
import {allHouses} from '../assets/data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'realEstate';
  allProducts: any

  
  ngOnInit(): void {
    
    this.allProducts = allHouses
    // this.allProducts = [allHouses]
    
  }
}
