import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Class {
    public id?:number;
    public name?:string;
    public created?:string;
    public modified?:string;

    constructor(model:any = null){
        this.id = model?.id;
        this.name = model?.name;
        this.created = model?.created;
        this.modified = model?.modified;
    }

    static formControl(item:Class){
        return new FormGroup({
            id: new FormControl(item.id, Validators.min(0)),
            name: new FormControl(item.name, [Validators.minLength(2), Validators.maxLength(45), Validators.required]),
            created: new FormControl(item.created),
            modified: new FormControl(item.modified),
          });
    }
}
