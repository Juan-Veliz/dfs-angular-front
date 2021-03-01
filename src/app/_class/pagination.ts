export class Pagination{
    public expand?: String;
    public filter?:[];
    public page?:Number;
    public perPage?:Number;
    // public fields?:[];

    constructor(expand?:any, filter?:any, page?:Number, perPage?:Number){
        this.expand = this.arrayToString(expand) || '';
        this.filter = filter || [];
        this.page = page || 1;
        this.perPage = perPage || 20;
        // this.fields = [];
    }

    arrayToString(array:[]){
        let concat = ''
        array.forEach((element, key) => {
            if(key >= (array.length-1)){
                concat+=element;
            }else{
                concat+=`${element},`
            }
        });
        if(concat === '') return '';
        return concat;
    }
}
