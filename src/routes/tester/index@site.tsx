import { $, component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city'; 
import { Button } from '~/components/button';

export default component$(() => {

  const state = useStore({ name: 'unassigned' })
  const handleName = $(() => {
    state.name = 'Elephants'
  })
  return (
    <>
      <h1>Test Page</h1>
      <Button handleFunction={handleName} />
      <div>
        Name: { state.name }
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Test Page',
  meta: [
    {
      name: 'description',
      content: 'Hello my test page',
    },
  ],
};
