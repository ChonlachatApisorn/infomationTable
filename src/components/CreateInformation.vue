<template>
<section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div class="flex flex-col justify-center h-full">
        <div class="w-full max-w-xl mx-auto bg-gray-50 shadow-lg rounded-sm border border-gray-200">
            <div class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Add Information</h2>
            </div>
            <form action="" class="flex justify-center w-full h-96">
                <div class="flex justify-center h-96 p-3 w-full">
                    <div class="">
                        <div class="flex flex-col">
                            <div class="flex flex-col w-full m-3">
                                <label for="name" class="text-xs text-gray-400 font-semibold uppercase mb-2 ml-1">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    class="focus:outline-none p-2 text-sm w-full h-7 drop-shadow-md border-gray-100"
                                    placeholder="username"
                                >
                            </div>
                            <div class="flex flex-col w-full m-3">
                                <label 
                                    for="name" 
                                    class="text-xs text-gray-400 font-semibold uppercase mb-2 ml-1"
                                >
                                    Email
                                </label>
                                <input 
                                    type="text" 
                                    class="focus:outline-none p-2 text-sm w-full h-7 drop-shadow-md border-gray-100"
                                    placeholder="example@example.com"
                                >
                            </div>
                            <div class="flex flex-col w-full m-3">
                                <label 
                                    for="name" 
                                    class="text-xs text-gray-400 font-semibold uppercasemb-2 ml-1"
                                >
                                    Birthday
                                </label>
                                <input 
                                    type="date" 
                                    class="focus:outline-none p-2 text-sm w-full h-7 drop-shadow-md border-gray-100"
                                >
                            </div>
                        </div>
                        <div class="flex justify-end items-center -mr-40 mt-20">
                            <router-link 
                                to="/information" 
                                class="mr-5 text-sm hover:underline drop-shadow-md"
                            >
                                back
                            </router-link>
                            <button
                                type="submit"
                                class="border w-28 -mr-3 mt-2 drop-shadow-md border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
</template>

<script>
export default {
name: 'CreateInforation',
}
</script>
