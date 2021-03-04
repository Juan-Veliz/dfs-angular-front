import { Component, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/_class/category';
import { Class } from 'src/app/_class/class';
import { Item } from 'src/app/_class/item';
import * as _ from 'lodash';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.scss']
})
export class ItemsFormComponent implements OnInit {
  uploader:FileUploader;

  constructor (){
    this.uploader = new FileUploader({
      url: 'assets/images/items/',
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item:any) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: "item.png",
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
  }
  // @Directive({ selector: '[ng2FileSelect]' })
  
  @Input() itemSelected:Item = new Item();
  @Input() classes:Class[] = [];
  @Input() categories:Category[] = [];
  @Output() close = new EventEmitter();
  @Output() sendData = new EventEmitter();

  categoryList:Category[] = [];
  form:FormGroup = new FormGroup({});
  clase:Class = new Class();
  flags = { classSelected:false }

  ngOnInit(): void {
    this.form = Item.formControl(this.itemSelected);
    // console.log(this.form.controls.cat_id.value)
    if(this.form.controls.cat_id.value){
      this.findClassByCat(this.form.controls.cat_id.value)
    }
    this.categoryList = this.categories;

    
  }

  findClassByCat(id:number){
    _.each(this.categories, cat => {
      if(cat.id==id){
        _.each(this.classes, clas =>{
          if(cat.class_id == clas.id){
            this.clase = clas;
            this.flags.classSelected = true;
            return;
          }
        })
      }
    });
  }

  onSelectClass(id:any){
    this.flags.classSelected = true;
    this.form.controls.cat_id.reset();
    this.categoryList = _.filter(this.categories, (category)=>(category.class_id==id) )
  }



  onUpload(event:any){
    console.log(event.target.files[0]);
    let tipo = '';
    this.uploader.isFile(event);
    // let reader = new FileReader();
    this.uploader.queue.forEach(element =>{
      let reader = new FileReader();
      reader.readAsDataURL(element._file)
      reader.onload=(data)=>{
        if(element.file.type!=null)
        {
          tipo=element.file.type.split('/')[0];
        }
        else{
          tipo="file";
        }
        // this.multimediaNew.push({'nombre':fecha+i.toString()+"."+element.file.type.split('/')[1],'ase_id':this.asset.id,'tim_id':this.compareTipo(tipo),'estado':1,'value':reader.result.toString().split(',')[1]});
        // this.multimedia.push(this.multimediaNew[i]);
        // this.files.push({'name':fecha+i.toString()+"."+element.file.type.split('/')[1],'tipo':element.file.type,'value':reader.result.toString().split(',')[1]})
        // i=i+1;
      }
    })
    // this.uploader.uploadAll()
  }

  onSubmit(){
    let model = new Item(this.form.value)
    this.sendData.emit(model);
    // console.log(model)
  }

}
