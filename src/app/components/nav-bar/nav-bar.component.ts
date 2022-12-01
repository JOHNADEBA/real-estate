import { Component, OnInit } from '@angular/core';
import {allHouses} from '../../../assets/data'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
allMenu: any
faBars = faBars
faTimes = faTimes
showMenu:boolean = false
  constructor() { }

  ngOnInit(): void {
    this.getMenu()
  }
  getMenu(){
   const unsterilized = allHouses.map(menu => menu.wish) 
    this.allMenu = ['All', ...new Set(unsterilized)]
    console.log(this.allMenu);
    
  }

}
