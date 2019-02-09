export class Advertises {
  constructor(
    public advertisement_id: number,
    public fk_user_id: number,
    public advertisement_title: string,
    public advertisement_img: string,
    public advertisement_desc: string,
    public advertisement_date: Date // public advertisement_id:number,
  ) {}
}
