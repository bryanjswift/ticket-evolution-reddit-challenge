import React, { FormEvent, useRef, useState } from 'react';
import { Action } from '../Action';
import { fetchPosts } from '../Api';

export function SubredditSelector() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  async function onSelectorSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputEl.current === null || inputEl.current.value === '') {
      setErrors(['Subreddit must have a value']);
    } else {
      try {
        const posts = await fetchPosts({ name: inputEl.current.value });
        console.log(posts);
      } catch (e) {
        setErrors([e.message]);
      }
    }
  }
  return (
    <form action="/" method="POST" onSubmit={onSelectorSubmit}>
      <Errors messages={errors} />
      <label>
        <span>Subreddit</span>
        <input ref={inputEl} type="text" name="subreddit" />
      </label>
      <button type="submit">Go</button>
    </form>
  );
}

function Errors(props: { messages: string[] }) {
  const { messages } = props;
  if (messages.length > 1) {
    return (
      <>
        {messages.map(m => <span key={m}>{m}</span>)}
      </>
    );
  } else {
    return null;
  }
}
