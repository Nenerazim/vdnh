import type {EventModel} from '@app/models/Event';

export default defineEventHandler(() => {
  const data: EventModel[] = [
    {
      id: 1,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/1.png',
      description:
        'Постоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства'
    },
    {
      id: 2,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/2.png'
    },
    {
      id: 3,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/3.png'
    },
    {
      id: 4,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/4.png'
    },
    {
      id: 5,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/5.png',
      description:
        'Постоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства'
    },
    {
      id: 6,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/6.png'
    },
    {
      id: 7,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/7.png'
    },
    {
      id: 8,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/8.png'
    },
    {
      id: 9,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/9.png',
      isAds: true,
      description:
        'Постоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства МосквыПостоянная экспозиция Музея городского хозяйства'
    },
    {
      id: 10,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/10.png'
    },
    {
      id: 11,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/11.png'
    },
    {
      id: 12,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/12.png'
    },
    {
      id: 13,
      title: 'Постоянная экспозиция Музея городского хозяйства Москвы',
      type: 'экскурсия',
      date: '12 января в 14:00',
      img: '/images/events/13.png'
    }
  ];

  return data;
});
