<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Input from '@/components/Input.vue'
import { ref } from 'vue'

const searchInput = ref('')

const menuItems = [
  { name: 'Your profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '#' }
]
</script>

<template>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="border-b shadow-md border-b-slate-200">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16 gap-24">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
              <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          <!-- Logo & Search input -->
          <div
            class="flex items-center justify-between flex-1 w-full gap-24 sm:items-stretch sm:justify-start"
          >
            <div class="flex items-center flex-shrink-0">
              <img
                class="block w-auto h-8 lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Vue3 Blog"
              />
              <img
                class="hidden w-auto h-8 lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Vue3 Blog"
              />
            </div>

            <Input placeholder="Search anything..." v-model="searchInput" />
          </div>

          <!-- Notification, User menu -->
          <div
            class="absolute inset-y-0 right-0 flex items-center gap-8 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              type="button"
              class="p-1 text-gray-500 bg-white rounded-full hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="w-6 h-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <div>
                <MenuButton
                  class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem :key="item.name" v-for="item in menuItems">
                    <a :href="item.href" class="block px-4 py-2 text-sm text-gray-700">{{
                      item.name
                    }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>

            <button
              class="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-800"
            >
              New Post
            </button>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>
