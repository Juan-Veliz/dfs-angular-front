import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Category {
    public id?:number;
    public class_id?:number;
    public name?:string;
    public created?:string;
    public modified?:string;

    constructor(model:any = null){
        this.id = model?.id;
        this.class_id = model?.class_id;
        this.name = model?.name;
        this.created = model?.created;
        this.modified = model?.modified;
    }

    static formControl(item:Category){
        return new FormGroup({
            id: new FormControl(item.id, Validators.min(0)),
            name: new FormControl(item.name, [Validators.minLength(2), Validators.maxLength(45), Validators.required]),
            class_id: new FormControl(item.class_id, [ Validators.required, Validators.min(0) ]),
            created: new FormControl(item.created),
            modified: new FormControl(item.modified),
          });
    }


}
