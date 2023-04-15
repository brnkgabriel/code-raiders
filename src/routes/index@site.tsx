import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city'; 

export default component$(() => {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home Page',
  meta: [
    {
      name: 'description',
      content: 'Hello my homepage',
    },
  ],
};
