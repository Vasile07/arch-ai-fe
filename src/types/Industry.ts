export const Industry = {
  AI: "AI",
  Healthcare: "Healthcare",
  Finance: "Finance",
  Education: "Education",
  ECommerce: "ECommerce",
} as const;

export type Industry = typeof Industry[keyof typeof Industry];