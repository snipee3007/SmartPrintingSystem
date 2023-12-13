<template>
    <div class="w-screen mr-auto ml-auto bg-gray-100 max-w-6xl">
        <div class = "p-12">
            <div class="flex items-center mr-1">
                <button class="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <h3 class="flex items-strech items-center mb-0 font-semibold text-xl">
                        Tuỳ chỉnh thông số in
                    </h3>
                </button>
            </div>
        </div>
        <!--first row-->
        <div class = "flex">
            <div class = "flex-1  ml-12 relative w-500 h-700">
                <div class = "flex flex-wrap ">
                    <div class="flex pt-1.5 pl-6 w-1/4">
                        <p>Tập tin</p>
                    </div>
                    <button
                        class="custom-button bg-gray-200 border border-black rounded-lg flex justify-between items-center"
                        @click="isOptionsExpanded = !isOptionsExpanded"
                        @blur="isOptionsExpanded = false"
                        :class="{ 'expanded': isOptionsExpanded }"
                    >
                        <span class="text-sm mx-auto">{{ selectedOption }}</span>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-3 w-3 transform transition-transform duration-200 ease-in-out"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                    >
                        <ul
                            v-show="isOptionsExpanded"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 30px; max-height: 200px; overflow-y: auto; max-width: 50%; left: 25%;"
                        >
                            <li
                                v-for="(option, index) in options"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption(option)"
                            >
                                {{ option }}
                            </li>
                        </ul>
                    </transition>


                </div>

                <div>
                    <button                         
                        class="option-button bg-white border border-black rounded flex justify-between items-center"
                        @click="isOptionsExpanded2 = !isOptionsExpanded2"
                        @blur="isOptionsExpanded2 = false"
                        :class="{ 'expanded': isOptionsExpanded2 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption2.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                        <span class="text-sm mx-auto">{{ selectedOption2.label }}</span>
                        </div>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-3 w-3 transform transition-transform duration-200 ease-in-out"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                    >
                        <ul
                            v-show="isOptionsExpanded2"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 100px; max-height: 200px; overflow-y: auto; max-width: 56%; left: 4%; "
                        >
                            <li
                                v-for="(option2, index) in options2"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption2(option2)"
                                >
                                <div class="flex items-center">
                                    <img :src="option2.image" alt="Option Image" class="h-6 w-6 mr-2 " />
                                    <span>{{ option2.label }}</span>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>

                <div>
                    <button                         
                        class="option-button bg-white border border-black rounded flex justify-between items-center"
                        @click="isOptionsExpanded2 = !isOptionsExpanded2"
                        @blur="isOptionsExpanded2 = false"
                        :class="{ 'expanded': isOptionsExpanded2 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption2.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                        <span class="text-sm mx-auto">{{ selectedOption2.label }}</span>
                        </div>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-3 w-3 transform transition-transform duration-200 ease-in-out"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                    >
                        <ul
                            v-show="isOptionsExpanded2"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 100px; max-height: 200px; overflow-y: auto; max-width: 56%; left: 4%; "
                        >
                            <li
                                v-for="(option2, index) in options2"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption2(option2)"
                                >
                                <div class="flex items-center">
                                    <img :src="option2.image" alt="Option Image" class="h-6 w-6 mr-2 " />
                                    <span>{{ option2.label }}</span>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>

                <div>
                    <button                         
                        class="option-button bg-white border border-black rounded flex justify-between items-center"
                        @click="isOptionsExpanded2 = !isOptionsExpanded2"
                        @blur="isOptionsExpanded2 = false"
                        :class="{ 'expanded': isOptionsExpanded2 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption2.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                        <span class="text-sm mx-auto">{{ selectedOption2.label }}</span>
                        </div>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-3 w-3 transform transition-transform duration-200 ease-in-out"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                    >
                        <ul
                            v-show="isOptionsExpanded2"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 100px; max-height: 200px; overflow-y: auto; max-width: 56%; left: 4%; "
                        >
                            <li
                                v-for="(option2, index) in options2"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption2(option2)"
                                >
                                <div class="flex items-center">
                                    <img :src="option2.image" alt="Option Image" class="h-6 w-6 mr-2 " />
                                    <span>{{ option2.label }}</span>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>

                <div>
                    <button                         
                        class="option-button bg-white border border-black rounded flex justify-between items-center"
                        @click="isOptionsExpanded2 = !isOptionsExpanded2"
                        @blur="isOptionsExpanded2 = false"
                        :class="{ 'expanded': isOptionsExpanded2 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption2.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                        <span class="text-sm mx-auto">{{ selectedOption2.label }}</span>
                        </div>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-3 w-3 transform transition-transform duration-200 ease-in-out"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100 origin-top"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0 origin-top"
                    >
                        <ul
                            v-show="isOptionsExpanded2"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 100px; max-height: 200px; overflow-y: auto; max-width: 56%; left: 4%; "
                        >
                            <li
                                v-for="(option2, index) in options2"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption2(option2)"
                                >
                                <div class="flex items-center">
                                    <img :src="option2.image" alt="Option Image" class="h-6 w-6 mr-2 " />
                                    <span>{{ option2.label }}</span>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>
            </div>
            
            <div class="flex-1 border-solid border-2 rounded border-black relative overflow-hidden">
                <!-- Slide show images -->
                <img
                    v-for="(image, index) in slideshowImages"
                    :key="index"
                    :src="image"
                    :class="{ 'hidden': currentIndex !== index }"
                    class="w-full h-auto my-custom-image-size mx-auto"
                    alt="Slide"
                />

                <!-- Navigation arrows and input -->
                <div class="flex justify-center mt-4">
                    <button @click="prevSlide" class="mr-2" style="margin-bottom: 10px;">&lt;</button>
                    <input
                    v-model="pageNumber"
                    type="number"
                    class="mx-1 p-1 w-16 border border-gray-300 rounded"
                    placeholder="Page"
                    style="margin-bottom: 10px;"
                    />
                    <button @click="nextSlide" style="margin-bottom: 10px;">&gt;</button>
                </div>
            </div>

        </div>
        <!--second row-->
    </div>
</template>

<script>

export default {
  data() {
    return {
      isOptionsExpanded: false,
      selectedOption: "MarugotoB1.pdf",
      isOptionsExpanded2: false,
      selectedOption2: { label: "List", image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg" },
      options: ["MarugotoB1.pdf", "MarugotoB2.pdf", "MarugotoB3.pdf", "MarugotoB4.pdf"],
      options2: [
      { label: "MarugotoB1.pdf", image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg" },
      { label: "MarugotoB2.pdf", image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg" },
      { label: "MarugotoB3.pdf", image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg" },
      { label: "MarugotoB4.pdf", image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg" },
        ],
      slideshowImages: [
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg',
        '@/assets/images/print.png',
        '@/assets/images/print.png',
      ],
      currentIndex: 0,
      pageNumber: 1,
    };
  },
  methods: {
    setOption(option) {
      this.selectedOption = option;
      this.isOptionsExpanded = false;
    },
    setOption2(option) {
      this.selectedOption2 = option;
      this.isOptionsExpanded2 = false;
    },
    goToSlide() {
      // Ensure the entered page number is within bounds
      const validPageNumber = Math.max(1, Math.min(this.pageNumber, this.slideshowImages.length));
      this.currentIndex = validPageNumber - 1;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slideshowImages.length) % this.slideshowImages.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slideshowImages.length;
    },
    },
};
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
}

.custom-button {
  margin-top: 10px;
  width: 200px; 
  height: 20px;
}

.custom-button span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-button svg {
  margin-left: 5px; 
  transition: transform 200ms ease-in-out;
}

.custom-button.expanded svg {
  transform: rotate(90deg);
}

.my-custom-image-size {
    margin-top: 20px;
    width: 321px; /* Set your desired width */
    height: 420px; /* Maintain aspect ratio */
}

.option-button {
 margin-left: 25px;
  margin-top: 20px;
  width: 320px; 
  height: 50px;
}
</style>