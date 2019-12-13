import React, { Dispatch, FormEvent, useRef, useState } from 'react';
import { Action } from '../Action';

interface Props {
  dispatch: Dispatch<Action>;
}

export function SubredditSelector(props: Props) {
  const inputEl = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const { dispatch } = props;
  async function onSelectorSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputEl.current === null || inputEl.current.value === '') {
      setErrors(['Subreddit must have a value']);
    } else {
      dispatch({ type: 'SelectSubreddit', subreddit: inputEl.current.value });
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
