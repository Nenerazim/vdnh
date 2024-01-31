export class Calendar {
  private static dayAssociations: Record<number, string> = {
    0: 'Пн',
    1: 'Вт',
    2: 'Ср',
    3: 'Чт',
    4: 'Пт',
    5: 'Сб',
    6: 'Вс'
  };

  private static monthAssociations: Record<number, string> = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
  };

  public static generateCalendarArray(month: number, year: number) {
    const calendar: {month: string; days: {dayOfWeek: string; dayOfMonth: number; date: string}[]} = {
      month: this.monthAssociations[month],
      days: []
    };

    const lastDay = new Date(year, month + 1, 0);
    const numDays = lastDay.getDate();

    for (let i = 1; i <= numDays; i++) {
      const dayOfWeek = new Date(year, month, i).getDay();

      calendar.days.push({
        dayOfWeek: this.dayAssociations[dayOfWeek],
        dayOfMonth: i,
        date: `${i}.${month + 1}.${year}`
      });
    }

    return calendar;
  }
}
