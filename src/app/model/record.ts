export class Record {
    constructor(
        public id:number,
        public value:number, 
        public date?:Date, 
        public comment?:object
        ){}
}