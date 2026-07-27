-- Slide Deck Builder: image library storage.
-- Run this once in the Supabase SQL editor to create the bucket + policies.

insert into storage.buckets (id, name, public)
values ('slide-images', 'slide-images', true)
on conflict (id) do nothing;

-- Anyone can view (bucket is public so images render in the presenter/player).
create policy "Public can view slide images"
  on storage.objects for select
  using (bucket_id = 'slide-images');

-- A teacher can only upload into their own folder: slide-images/<user_id>/...
create policy "Users can upload their own slide images"
  on storage.objects for insert
  with check (
    bucket_id = 'slide-images'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "Users can delete their own slide images"
  on storage.objects for delete
  using (
    bucket_id = 'slide-images'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
