import { Component, OnInit } from '@angular/core';
import {allHouses} from '../../../assets/data'
import { AllPdts } from '../../model/all-pdts';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  allProducts: any // AllPdts | undefined;

  constructor() {}

  ngOnInit(): void {
    this.allProducts = allHouses
    // this.allProducts = [allHouses]
  }
}
