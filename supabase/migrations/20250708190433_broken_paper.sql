/*
  # Create quiz_responses table

  1. New Tables
    - `quiz_responses`
      - `id` (uuid, primary key)
      - `email` (varchar, not null)
      - `name` (varchar)
      - `responses` (jsonb, not null)
      - `clinic_matches` (jsonb)
      - `created_at` (timestamptz)
  2. Indexes
    - Index on `email` for efficient lookups
    - Index on `created_at` for time-based queries
*/

CREATE TABLE IF NOT EXISTS quiz_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR NOT NULL,
  name VARCHAR,
  responses JSONB NOT NULL,
  clinic_matches JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quiz_responses_email ON quiz_responses(email);
CREATE INDEX IF NOT EXISTS idx_quiz_responses_created_at ON quiz_responses(created_at);