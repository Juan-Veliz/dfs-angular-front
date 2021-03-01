import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/_class/item';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.scss']
})
export class ItemsFormComponent implements OnInit {

  constructor() { }
  @Input() itemSelected:Item = new Item();
  @Output() close = new EventEmitter();
  @Output() sendData = new EventEmitter();
  form:FormGroup = new FormGroup({});
  // form = new FormGroup({
  //   name: new FormControl('sin nombre...', Validators.minLength(2)),
  //   // last: new FormControl('Drew'),
  // });

  ngOnInit(): void {
    this.form = Item.formControl(this.itemSelected);
  }

  onSubmit(){
    console.log(this.form)
    let model = new Item(this.form.value)
    console.log(model)
  }

}
