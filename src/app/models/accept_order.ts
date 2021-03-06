export class AcceptOrders {
  constructor(
    public product_id: number,
    public product_name: string,
    public product_price: number,
    public product_color: string,
    public product_warranty: string,
    public product_specification: string,
    public fk_category_id: number,
    public product_img: string,
    public order_id: number,
    public customer_id: number,
    public product_quantity: number,
    public retailer_id: number,
    public date: string,
    public customer_otp: number,
    public verified: number,
    public verified_by_retailer: number,
    public retailer_email: string,
    public retailer_password: string,
    public retailer_name: string,
    public retailer_city: string,
    public retailer_mobile: number,
    public retailer_pincode: number
  ) {}
}
