export class Category {
  constructor(
    public category_id: number,
    public category_name: string,
    public fk_cat_id: number,
    public cat_img: string
  ) {}
}
