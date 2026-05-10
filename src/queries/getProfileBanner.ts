// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
import { profileBannerData } from '../data';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBannerData;
}
