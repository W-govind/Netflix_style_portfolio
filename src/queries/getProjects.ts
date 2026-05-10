// queries/getProjects.ts
import { Project } from '../types';
import { projectsData } from '../data';

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
