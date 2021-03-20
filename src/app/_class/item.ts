import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Item {
    public id?:number;
    public cat_id?:number;
    public name?:string;
    public level?:number;
    public description?:string;
    public image?:string;
    public created?:string;
    public modified?:string;
    public category?:any;
    public class?:any;
    public recipe?:any;
    constructor(model:any = null){
        this.id = model?.id;
        this.cat_id = model?.cat_id;
        this.name = model?.name;
        this.level = model?.level;
        this.description = model?.description;
        this.image = model?.image;
        this.created = model?.created;
        this.modified = model?.modified;
    }

    static formControl(item:Item){
        return new FormGroup({
            id: new FormControl(item.id, Validators.min(0)),
            name: new FormControl(item.name, [Validators.minLength(2), Validators.maxLength(45), Validators.required]),
            cat_id: new FormControl(item.cat_id, [ Validators.required, Validators.min(0) ]),
            level: new FormControl(item.level, [Validators.min(1), Validators.max(200), Validators.required]),
            description: new FormControl(item.description),
            image: new FormControl(item.image),
            created: new FormControl(item.created),
            modified: new FormControl(item.modified),
          });
    }


}
