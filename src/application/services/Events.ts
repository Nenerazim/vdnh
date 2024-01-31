import type {EventModel} from '@app/models/Event';

export class EventsService {
  public static async getList(): Promise<EventModel[] | null> {
    const {data} = await useFetch('/api/events');
    return data.value;
  }
}
