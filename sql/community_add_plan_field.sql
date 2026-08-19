-- Adds a subscription plan field to profiles, defaulting everyone to
-- "free". Nothing sets this to a paid value yet (no billing is wired up) --
-- it exists now so the Teacher's Desk engagement gate has something real to
-- check, and so a future Stripe webhook has a column to update. Run once in
-- the Supabase SQL editor, after sql/community_companies_and_profiles_setup.sql.

alter table profiles add column if not exists plan text not null default 'free' check (plan in ('free', 'pro', 'pro_plus'));
