/* class User_Login {
  public constructor()
}
 */

export class SignUP {
  constructor(
    public retailer_id: number,
    public retailer_email: string,
    public retailer_password: string,
    public retailer_name: string,
    public retailer_city: string,
    public retailer_mobile: number,
    public retailer_pincode: number
  ) {}
}

// tslint:disable-next-line:class-name
export class SignUP_RS {
  constructor(
    public retailer_id: number,
    public retailer_email: string,
    public retailer_password: string,
    public retailer_name: string,
    public retailer_city: string,
    public retailer_mobile: number,
    public retailer_pincode: number,
    public service_id: number,
    public visiting_fees: number,
    public availability: number
  ) {}
}

export class LoginR {
  constructor(public retailer_email: string, retailer_password: string) {}
}
