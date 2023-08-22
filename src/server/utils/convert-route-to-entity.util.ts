const mapping: Record<string, string> = {
  educations: 'education',
  experiences: 'experience',
  organizations: 'organization',
  resumes: 'resume',
  templates: 'template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
