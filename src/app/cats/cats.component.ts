import { Component, OnInit } from '@angular/core';
import { Cat } from '../cats';
import {CATS} from "../mock-cats";
import * as _ from 'lodash';

selectedCat: Cat;

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats = CATS;
  showDetails!: boolean;
  selectedCat: any;
  constructor() { }

  ngOnInit(): void {
  }
  getCatById(id: number) {
    let index = _.findIndex(this.cats, (c: Cat) => {
      return c.id === id;
      });
      this.selectedCat = this.cats[index];
      console.log(this.selectedCat);
  }
}
