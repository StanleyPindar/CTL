# Clinic Reviews Content

This directory contains long-form clinic review content in Markdown format.

## File Structure

Each clinic review should be a separate `.md` file with the following naming convention:
- `{clinic-name}-review.md` (e.g., `mamedica-review.md`)

## Front Matter Structure

Each review file must include YAML front matter with the following fields:

```yaml
---
slug: clinic-name-review
clinicId: clinic-id-from-data
title: "Clinic Name Review: Descriptive Subtitle"
excerpt: "Brief summary of the review for listings and SEO"
author: "CompareTheLeaf Review Team"
date: "2025-01-18"
lastUpdated: "2025-01-18"
rating: 4.7
reviewType: "comprehensive"
tags: ["clinic-review", "medical-cannabis", "uk"]
---
```

## Content Guidelines

- Use standard Markdown syntax
- Include clear section headings (##)
- Use bullet points for pros/cons
- Include pricing tables where relevant
- Add call-to-action sections
- End with medical disclaimer reference

## Example Sections

1. **Introduction & Overview**
2. **Services & Specializations**
3. **Pricing Analysis**
4. **Patient Experience**
5. **Pros & Cons**
6. **Pharmacy & Prescription Management**
7. **Regulatory Compliance**
8. **Final Verdict & Recommendations**