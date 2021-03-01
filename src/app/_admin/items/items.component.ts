import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/_class/item';
import { Pagination } from 'src/app/_class/pagination';
import { ItemService } from 'src/app/_service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(
    private itemService:ItemService,
    private modalService:NgbModal
  ) { }
  itemSelected:Item = new Item();
  items:Item[] = [];
  expand = ['categoria','clase'];
  pagination:Pagination = new Pagination(this.expand);
  modal:NgbModalRef | undefined;

  ngOnInit(): void {
    this.getItems();
  }


  getItems(){
    this.itemService.getItems(this.pagination)
      .subscribe(data=>{
        console.log(data)
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
    console.log(event);

    this.close()
  }

}
