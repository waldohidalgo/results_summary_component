<script>
import { ref } from "vue";
import data from "./assets/data.json";

import Footer from "./components/Footer.vue";

// importar imagenes

export default {
  setup() {
    const items = ref(data);
    const colorsText = [
      "hsl(0, 100%, 67%)",
      "hsl(39, 100%, 56%)",
      "hsl(166, 100%, 37%)",
      "hsl(234, 85%, 45%)",
    ];
    const colorsBackground = [
      "hsl(0, 100%, 67%, 0.05)",
      "hsl(39, 100%, 56%, 0.05)",
      "hsl(166, 100%, 37%, 0.05)",
      "hsl(234, 85%, 45%, 0.05)",
    ];

    return { items, colorsText, colorsBackground };
  },

  components: { Footer },
};
</script>

<template>
  <main class="mx-auto w-full md:my-[284px]">
    <div
      class="mx-auto flex max-w-[735px] flex-col sm:overflow-hidden md:flex-row md:rounded-[35px] md:shadow"
    >
      <div
        class="flex w-full flex-col items-center rounded-b-[35px] bg-gradient-to-b from-gradientBackgroundStart to-gradientBackgroundEnd pb-[38px] sm:pb-[58px] md:basis-[368px] md:rounded-[35px]"
      >
        <div
          class="mt-[23px] text-[18px] font-bold text-lightLavender sm:ms-[-4px] sm:mt-[37px] sm:text-[25px] sm:font-medium"
        >
          Your Result
        </div>
        <div
          class="column mt-[21px] flex aspect-square w-[138px] flex-col justify-center rounded-full bg-gradient-to-b from-gradientCircleStart to-gradientCircleEnd sm:mt-[30px] sm:w-[198px]"
        >
          <div
            class="mt-[13px] text-center text-[55px] font-extrabold leading-[68px] text-white sm:text-[71px] sm:leading-[76px]"
          >
            76
          </div>
          <div class="text-center font-bold text-slate-400 sm:text-[18px]">
            of 100
          </div>
        </div>
        <div
          class="mt-[26px] text-center text-[24px] font-semibold tracking-[0.75px] text-white sm:text-[32px]"
        >
          Great
        </div>
        <p
          class="mt-1 px-[40px] text-center leading-[22px] text-lightLavender sm:mt-[13px] sm:px-[52px] sm:text-[18px]"
        >
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div class="flex-grow p-[23px_32px] sm:p-[37px_41px]">
        <div class="text-[18px] font-extrabold sm:text-[24px]">Summary</div>
        <ul class="mt-[22px] flex flex-col gap-[17px] sm:gap-[12px]">
          <li
            v-for="(item, index) in items"
            :key="item.category"
            class="rounded-[9px] bg-opacity-10 p-[16px_14px]"
            :style="`background-color: ${colorsBackground[index]}`"
          >
            <div class="flex">
              <div class="flex gap-[13px] sm:gap-[12px]">
                <img
                  :src="`/src/assets/${item.icon}`"
                  :alt="item.category"
                  class="w-[20px] sm:w-[22px]"
                />
                <div
                  :style="`color: ${colorsText[index]}`"
                  class="font-bold sm:text-[18px] sm:font-semibold"
                >
                  {{ item.category }}
                </div>
              </div>
              <div class="ms-auto flex gap-[8px] sm:gap-[9px]">
                <span class="font-bold sm:text-[19px]">{{ item.score }}</span>
                <span class="font-bold text-neutral-400 sm:text-[17px]"
                  >/ 100</span
                >
              </div>
            </div>
          </li>
        </ul>
        <button
          class="mt-[22px] w-full rounded-full bg-darkGrayBlue py-[16px] text-[18px] font-semibold text-white hover:bg-gradient-to-b hover:from-gradientBackgroundStart hover:to-gradientBackgroundEnd focus:bg-gradient-to-b focus:from-gradientBackgroundStart focus:to-gradientBackgroundEnd focus:outline-none sm:mt-[35px]"
        >
          Continue
        </button>
      </div>
    </div>
  </main>
  <Footer />
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
