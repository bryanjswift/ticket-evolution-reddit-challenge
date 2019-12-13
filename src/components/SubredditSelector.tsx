import React from 'react';

export function SubredditSelector() {
  return (
    <form>
      <label>
        <span>Subreddit</span>
        <input type="text" name="subreddit" />
      </label>
      <button type="submit">Go</button>
    </form>
  );
}