export class currentUser{
    constructor(public email:string ,private _token :string , private _expriresIn : Date) {}

    get token(){
        if(!this._expriresIn || new Date() > this._expriresIn){
          return null;
        }
        return this._token;
       }
}
