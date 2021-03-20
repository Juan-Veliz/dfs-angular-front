import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/_class/category';
import { Class } from 'src/app/_class/class';
import { Item } from 'src/app/_class/item';
import { Pagination } from 'src/app/_class/pagination';
import { CategoryService } from 'src/app/_service/category.service';
import { ClassService } from 'src/app/_service/class.service';
import { ItemService } from 'src/app/_service/item.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(
    private itemService:ItemService,
    private classService: ClassService,
    private categoryService:CategoryService,
    private modalService:NgbModal
  ) { }
  itemSelected:Item = new Item();
  items:Item[] = [];
  expand = ['categoria','clase', 'recipe'];
  pagination:Pagination = new Pagination(this.expand);
  modal:NgbModalRef | undefined;
  categories:Category[]=[];
  classes:Class[]=[];
  collapse = true;
  ngOnInit(): void {
    this.init()
  }

  async init(){
    this.getItems();
    this.listCategories();
    this.listClasses();
  }

  listCategories(){
    return this.categoryService.listCategory()
    .subscribe(data=>{
      this.categories = data;
    });
  }

  listClasses(){
    return this.classService.listClass()
    .subscribe(data=>{
      this.classes = data;
    });
  }

  getItems(){
    this.itemService.getItems(this.pagination)
      .subscribe(data=>{
        this.items = data
      })
  }

  getImage(id:any){
    return `assets/images/items/${id}.png`;
  }

  open(content:any, item:Item){
    this.itemSelected = item;
    this.modal = this.modalService.open(content, {size:'xl'});
  }

  close(){
    this.modal?.close();
  }

  resolveItem(event:Item){
    if(event.id!=null){
      this.itemService.updateItem(event, event.id)
        .subscribe(data=>{
          // console.log(data);
          this.init();
          this.close()
        })
    }
    else{
      this.itemService.createItem(event)
        .subscribe(data=>{
          this.init();
          this.close()
        })
    }
  }

  search(event: any){
    console.log(event)
  }

}
