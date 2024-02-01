export interface IEvent {
  id: number;
  type: string;
  title: string;
  img: string;
  date: string;
  description?: string | undefined;
  isAds?: boolean | undefined;
}

export abstract class EventModel implements IEvent {
  public id: number;
  public type: string;
  public title: string;
  public img: string;
  public date: string;
  public description?: string | undefined;
  public isAds?: boolean | undefined;

  protected constructor({id, type, title, img, date, description}: IEvent) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.img = img;
    this.date = date;
    this.description = description;
  }
}
