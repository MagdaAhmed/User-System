export class User {
public FristName:string;
public LastName:string;
public Email :string;
public Age: number;
public PhoneNumber:number;
    constructor(FristName:string ,LastName:string,Email :string, Age: number ,PhoneNumber:number) {
        this.FristName=FristName;
        this.LastName=LastName;
        this.Email=Email;
        this.Age=Age;
        this.PhoneNumber=PhoneNumber;
    }
  }