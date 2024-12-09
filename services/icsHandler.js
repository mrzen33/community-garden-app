import ICAL from 'ical.js';

/**
 * 从给定 URL 下载 ICS 文件并解析出事件信息
 */
export async function handleIcsUrl(icsUrl) {
  const response = await fetch(icsUrl);
  const icsData = await response.text();
  return parseICS(icsData);
}

/**
 * 使用 ical.js 解析 ICS 数据
 * 返回对象: { summary, startDate, endDate }
 */
function parseICS(icsContent) {
  try {
    const parsed = ICAL.parse(icsContent);
    const comp = new ICAL.Component(parsed);
    const vevents = comp.getAllSubcomponents('vevent');
    if (vevents.length === 0) {
      return null;
    }

    // 获取第一个事件（可根据需要处理多个事件）
    const event = new ICAL.Event(vevents[0]);
    // event.startDate, event.endDate 是 ICAL.Time 对象
    // 使用 toJSDate() 转为 JavaScript Date 对象
    return {
      summary: event.summary,
      startDate: event.startDate.toJSDate(),
      endDate: event.endDate.toJSDate(),
    };
  } catch (error) {
    console.warn("ICS parsing error:", error);
    return null;
  }
}
