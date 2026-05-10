// queries/getContactMe.ts
import { ContactMe } from '../types';
import { contactMeData } from '../data';

export async function getContactMe(): Promise<ContactMe> {
  return contactMeData;
}
