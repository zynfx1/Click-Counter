<script setup lang="ts">
import { ref } from "vue";

interface Groceries {
  id: number;
  item: string;
  price: number;
}

const groceries = ref<Groceries[]>([
  {id: 1, item: "Apples", price: 3},
  {id: 2, item: "Bananas", price: 1},
  {id: 3, item: "Carrots", price: 2},
]);

</script>

<template>
  <div class="bg-jungle-green-900 max-w-screen max-h-screen text-white">
    <header class="bg-jungle-green-950 w-full h-20 flex items-center justify-between px-10">
      <img src="./logo5.png" alt="Logo" class="h-full py-1" />
      <nav>
        <ul>
          <li class="flex gap-10">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>

    <section

      class="bg-jungle-green-800 w-full h-screen text-center flex items-center justify-center font-poppins text-2xl"
       >
       <div class="bg-jungle-green-700 flex flex-col items-center justify-center p-5 rounded-lg shadow-lg ">
      <h1 class="font-bold bg-jungle-green-900 w-full">Grocery List</h1>
      <ul>
        <li v-for="item in groceries" :key="item.id">
         {{ item.item }} - ${{ item.price }}
        </li>
      </ul>
      </div>
    </section>

    <section
      class="bg-jungle-green-700 w-full h-screen flex items-center justify-center font-poppins text-2xl"
    >
    <h1 class="text-5xl text-gray-100 font-extrabold mx-5 animate-bounce"> </h1>
    </section>

    <footer
      class="w-full h-20 bg-jungle-green-950 flex items-center justify-center font-poppins text-lg"
    >
      My Vue App Footer
    </footer>
  </div>
</template>
