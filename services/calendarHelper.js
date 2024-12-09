import { addEventToCalendar } from 'react-native-add-calendar-event';

/**
 * 调用原生界面或直接添加事件到本地日历
 * event: { summary, startDate: Date, endDate: Date }
 */
export async function addToCalendar({ summary, startDate, endDate }) {
  const eventConfig = {
    title: summary,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    timeZone: 'UTC' // 根据需要调整
  };

  return addEventToCalendar(eventConfig);
}
