import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { Navigation } from '~/components/navigation/navigation';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <Navigation />
      <main> 
        <Slot />
      </main>
      <footer class="bg-gray-900 text-white py-14 text-center">
        This is my footer
      </footer>
    </div>
  );
});
