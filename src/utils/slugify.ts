// src/utils/slugify.ts
export const slugify = (s?: string) =>
  (s ?? '').trim().toLowerCase().replace(/\s+/g, '-');
