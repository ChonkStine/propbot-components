import React from 'react'

function Signup() {
    const product = 'Product Name'
  return (
    <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
  <div>
    <label for="first-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name*</label>
    <input name="first-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
  </div>

  <div>
    <label for="last-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name*</label>
    <input name="last-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
  </div>

  <div class="sm:col-span-2">
    <label for="company" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Company</label>
    <input name="company" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
  </div>

  <div class="sm:col-span-2">
    <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
    <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
  </div>

  <div class="sm:col-span-2">
    <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password*</label>
    <input name="password" type="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
  </div>

  <div class="sm:col-span-2">
    <label for="confirm-password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Confirm Password*</label>
    <input name="confirm-password" type="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
  </div>

  <div class="flex items-center sm:col-span-2">
    <input type="checkbox" class="mr-2" />
    <label for="agree-to-terms" class="inline-block text-sm text-gray-800 sm:text-base">
      I agree to the <a href="/" class="text-blue-700 underline">terms and conditions</a>.
    </label>
  </div>

  <div class="sm:col-span-2">
    <button class="w-full inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
      Create Account
    </button>
  </div>
</form>

  )
}

export default Signup