<script setup lang="ts">
import type { userAcc } from '../user.ts';
import {computed, ref} from 'vue';
import SignIn from './SignIn.vue';

const isModalOpen = ref(false);

const toggleModal = ()=> {
  isModalOpen.value = !isModalOpen.value;
};


const props = defineProps<{
  accountList: userAcc[]
  user: userAcc | null
  isLoggedIn: string;
}>();



const emit = defineEmits<{
(e:'navigate', page: string): void
(e: 'logout'): void
(e:'handleDelete', name: string): void

}>();

const goToHome = ()=> {
  emit('navigate', 'home');
};

const goToSignUp = ()=> {
  emit('navigate', 'signup');
};

const goToSignIn =()=> {
  emit('navigate', 'signin');
};

const logout =()=> {
  emit('logout');
};

const requestDelAcc = (userName: string) => {
  emit('handleDelete', userName);
};

</script>
logout


<template >
  <div class="bg-baltic-blue-900 max-w-full h-screen font-poppins text-white body-div" >
    <header class=" bg-baltic-blue-950 w-f h-20 flex items-center justify-between px-4">
      <img class="w-18 h-18" src="/public/img/logo5.png" alt="">
      <nav>
        <ul>
          <li  class="flex items-center justify-center gap-10 text-lg" >
            <a  @click.prevent="goToHome" class="underline decoration-transparent decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-sky-500" href="">Home</a>
             <a v-if="props.isLoggedIn === 'loggedin'" @click.prevent="logout" class="underline decoration-transparent decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-sky-500" href="">Logout</a>
             <div v-else-if="props.isLoggedIn === 'logout'"  class="flex gap-10">
            <a class="underline decoration-transparent decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-sky-500" href="" @click.prevent="goToSignUp">Sign Up</a>
             <a class="underline decoration-transparent decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-sky-500" href="" @click.prevent="goToSignIn">Sign In</a>
             </div>
            <a href="#" class="flex items-center justify-center gap-5"><img class="w-10 h-10" src="/public/img/user.png" alt='user'><label v-if="props.user" >{{ props.user.name }}</label></a>
          </li>
        </ul>
      </nav>
    </header>
    <section class="bg-baltic-blue-900 w-full h-full flex flex-col items-center justify-center gap-2 ">
      <div class="bg-baltic-blue-600 flex flex-col items-center justify-center p-5 rounded-lg">
        <h1 class="text-2xl">Profile</h1>
        <br>
        <ul>
          <li v-if="props.user">
            <p>-------------------------------</p>
            <p>Welcome!, {{ props.user.name }}</p><br>
            <p>Email: {{props.user.email }}</p><br>
            <p>Pass: {{ props.user.password}}</p><br>
            <p>-------------------------------</p>
              <button @click="requestDelAcc(props.user.name)" class="w-30 h-20 rounded-lg bg-baltic-blue-800 hover:bg-baltic-blue-900 transition duration-300 cursor-pointer">Delete Account</button>
          </li>
        </ul>
      
      </div>
      <div class="flex items-center justify-center ">
          <button @click="toggleModal" class="w-30 h-20 rounded-lg bg-baltic-blue-800 hover:bg-baltic-blue-900 transition duration-300 cursor-pointer">Click Me</button>
          <Teleport to="body">
            <div v-if="isModalOpen" class="bg-amber-800/50 flex items-center justify-center fixed inset-3/12 z-999 ">
              <div class="flex flex-col items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Alias, quas recusandae? Aliquam illum ullam modi, 
                  quo laudantium itaque in doloremque? Unde veniam officiis quas reiciendis enim totam fugit eaque ab!</p>
                  <button @click="toggleModal" class="w-30 h-20 rounded-lg bg-baltic-blue-800 hover:bg-baltic-blue-900 transition duration-300 cursor-pointer">Click Me</button>
              </div>
            </div>
          </Teleport>
          
      </div>
    </section>
    <footer class=" bg-baltic-blue-950 w-full h-20">

    </footer>
  </div>
</template>


