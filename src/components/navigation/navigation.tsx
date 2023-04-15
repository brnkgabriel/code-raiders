import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Navigation = component$(() => {
  return (
    <div class="flex justify-between items-center bg-white shadow-xl px-2">
      <div class="flex justify-center items-center">LOGO</div>
      <div>
        <ul class="flex gap-x-2">
          <li class='flex justify-center items-center'>
            <Link class='h-full flex py-4' href='/'>Home</Link>
          </li>
          <li class='flex justify-center items-center'>
            <Link class='h-full flex py-4' href='/tester'>Tester</Link>
          </li>
        </ul>
      </div>
    </div>
  )
});