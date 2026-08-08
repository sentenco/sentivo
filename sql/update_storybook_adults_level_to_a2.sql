-- Moves the 6 Adults-track Story Books (Books 7-12) from level A1 to A2,
-- per the user's request: only Kids/Teens stories stay at A1, Adults
-- stories start at A2. The individual add_storybookN_tool_card.sql files
-- (7-12) were also updated to 'A2' for consistency, but running this
-- single UPDATE is simpler than re-running all 6 upserts.

update tools set level = 'A2'
where id in (
  'storybook-7',
  'storybook-8',
  'storybook-9',
  'storybook-10',
  'storybook-11',
  'storybook-12'
);
