-- Lets teachers attach an image to any post, and a file (for Resource
-- posts) via a new "community-uploads" storage bucket. Run once in the
-- Supabase SQL editor.

alter table community_posts add column if not exists image_url text;
alter table community_posts add column if not exists file_url text;
alter table community_posts add column if not exists file_name text;

insert into storage.buckets (id, name, public)
values ('community-uploads', 'community-uploads', true)
on conflict (id) do nothing;

-- Bucket is public so images/files render and download without a signed URL.
create policy "Public can view community uploads"
  on storage.objects for select
  using (bucket_id = 'community-uploads');

-- A teacher can only upload into their own folder: community-uploads/<user_id>/...
create policy "Users can upload their own community files"
  on storage.objects for insert
  with check (
    bucket_id = 'community-uploads'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Users can delete their own community files"
  on storage.objects for delete
  using (
    bucket_id = 'community-uploads'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
