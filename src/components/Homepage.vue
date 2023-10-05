<template>
  <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div class="flex flex-col justify-center h-full">
      <div class="flex justify-center">
        <div class="flex justify-end mb-5 w-full max-w-2xl">
          <router-link to="/create">
            <button
              type="submit"
              class="border w-28 mt-2 drop-shadow-md border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
            >
              Add +
            </button>
          </router-link>
        </div>
      </div>
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Information</h2>
            </div>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Name</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Email</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Birthday</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(user, index) in userData" :key="index">
                            <td class="p-2 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="font-medium text-gray-800">{{ user.name }}</div>
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-left">{{ user.email }}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-left font-medium text-green-500">{{ user.birthday }}</div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-lg text-center">??</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import { userDatas } from '../assets/data'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },

  data() {
    return {
      userData: userDatas
    };
  }
}
</script>
