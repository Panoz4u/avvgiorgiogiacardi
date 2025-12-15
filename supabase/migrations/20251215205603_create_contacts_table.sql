/*
  # Create contacts table for law firm contact form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Contact person's full name
      - `email` (text) - Contact person's email address
      - `phone` (text, nullable) - Optional phone number
      - `message` (text) - The message content
      - `lang` (text) - Language preference (it/fr/en)
      - `created_at` (timestamptz) - Timestamp of submission
      - `read` (boolean) - Whether the message has been read by admin
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for authenticated admins to read all contacts
    - Add policy for public users to insert their own contacts
  
  3. Indexes
    - Index on created_at for sorting by date
    - Index on email for lookups
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  lang text DEFAULT 'it',
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact forms (public submission)
CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admins) to view all contacts
CREATE POLICY "Authenticated users can view all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admins) to update contacts (mark as read)
CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
