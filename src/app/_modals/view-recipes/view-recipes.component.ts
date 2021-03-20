import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/_class/item';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.scss']
})
export class ViewRecipesComponent implements OnInit {

  constructor() { }
  @Input() itemSelected:Item = new Item();
  @Output() close = new EventEmitter();

  ngOnInit(): void {
    
  }

  getImage(id:any){
    return `assets/images/items/${id}.png`;
  }

}
