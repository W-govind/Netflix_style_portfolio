// queries/getTimeline.ts
import { TimelineItem } from '../types';
import { timelineData } from '../data';

export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineData;
}
