export class PendingOrder {
  constructor(
    public product_id: number,
    public product_name: string,
    public product_price: number,
    public product_color: string,
    public product_warranty: string,
    public product_specification: string,
    public fk_category_id: number,
    public product_img: string,
    public fk_retailer_id: number,
    public stock: number,
    public price: number,
    public delivery: number
  ) {}
}
