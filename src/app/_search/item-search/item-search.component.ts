import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/_class/category';
import { Class } from 'src/app/_class/class';
import { Item } from 'src/app/_class/item';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {

  constructor() { }
  @Input() categories:Category[] = [];
  @Input() classes:Class[] = [];
  @Output() search = new EventEmitter();
  categoryList:Category[] = [];
  clase:Class = new Class();
  itemFilter:Item = new Item();
  classSelected = false;
  
  ngOnInit(): void {
  }

  onSubmit(){

  }

  onSelectClass(event:any){
    if(event!==''){
      this.classSelected = true;
    }
    else{
      this.classSelected = false;
    }
    // console.log(event==='')
    // console.log(event)
  }

}
