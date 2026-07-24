export const ProjectSortCriteria = [
  "Last Updated",
  "Project Name (A-Z)",
  "Project Name (Z-A)",
  "Industry (A-Z)",
  "Industry (Z-A)",
  "Architecture (A-Z)",
  "Architecture (Z-A)",
  "AI Model (A-Z)",
  "AI Model (Z-A)",
] as const;

export type ProjectSortCriterion =
  typeof ProjectSortCriteria[number];