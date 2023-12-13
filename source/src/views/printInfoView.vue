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
                        class="option-button bg-white border border-black flex justify-between items-center"
                        @click="isOptionsExpanded2 = !isOptionsExpanded2"
                        @blur="isOptionsExpanded2 = false"
                        :class="{ 'expanded': isOptionsExpanded2 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption2.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                            <div>
                                <strong class="text-sm flex block">{{ selectedOption2.label.split('<br>')[0] }}</strong>
                                <span class="text-sm flex block">{{ selectedOption2.label.split('<br>')[1] }}</span>
                            </div>
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
                                    <div>
                                        <strong class="text-sm flex block">{{ option2.label.split('<br>')[0] }}</strong>
                                        <span class="text-sm flex block">{{ option2.label.split('<br>')[1] }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </transition>
                    

                </div>

                <div class = "flex flex-wrap ">
                    <div class="flex pt-1.5 pl-6 w-1/4">
                        <p>Trang:</p>
                    </div>
                    <input
                        id="customizeInput"
                        v-model="customizeInput"
                        :style="{
                            'pointer-events': !selectedOption2.label.includes('In trang tùy chỉnh') ? 'none' : 'auto',
                            'background-color': !selectedOption2.label.includes('In trang tùy chỉnh') ? '#ccc' : 'white',
                            'margin-top': '8px'  
                        }"
                    />
                </div> 

                <div>
                    <button                         
                        class="option-button bg-white border border-black flex justify-between items-center"
                        @click="isOptionsExpanded3 = !isOptionsExpanded3"
                        @blur="isOptionsExpanded3 = false"
                        :class="{ 'expanded': isOptionsExpanded3 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption3.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                            <div>
                                <strong class="text-sm flex block">{{ selectedOption3.label.split('<br>')[0] }}</strong>
                                <span class="text-sm flex block">{{ selectedOption3.label.split('<br>')[1] }}</span>
                            </div>
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
                            v-show="isOptionsExpanded3"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 202px; max-height: 200px; overflow-y: auto; max-width: 56%; left: 4%; "
                        >
                            <li
                                v-for="(option3, index) in options3"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption3(option3)"
                                >
                                <div class="flex items-center">
                                    <img :src="option3.image" alt="Option Image" class="h-6 w-6 mr-2 " />
                                    <div>
                                        <strong class="text-sm flex block">{{ option3.label.split('<br>')[0] }}</strong>
                                        <span class="text-sm flex block">{{ option3.label.split('<br>')[1] }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>

                <div>
                    <button                         
                        class="option-button bg-white border border-black  flex justify-between items-center"
                        @click="isOptionsExpanded4 = !isOptionsExpanded4"
                        @blur="isOptionsExpanded4 = false"
                        :class="{ 'expanded': isOptionsExpanded4 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption4.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                            <div>
                                <strong class="text-sm flex block">{{ selectedOption4.label.split('<br>')[0] }}</strong>
                                <span class="text-sm flex block">{{ selectedOption4.label.split('<br>')[1] }}</span>
                            </div>
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
                            v-show="isOptionsExpanded4"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 272px; max-height: 200px; overflow-y: auto; max-width: 56%; left: 4%; "
                        >
                            <li
                                v-for="(option4, index) in options4"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption4(option4)"
                                >
                                <div class="flex items-center">
                                    <img :src="option4.image" alt="Option Image" class="h-6 w-6 mr-2 " />
                                    <div>
                                        <strong class="text-sm flex block">{{ option4.label.split('<br>')[0] }}</strong>
                                        <span class="text-sm flex block">{{ option4.label.split('<br>')[1] }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>

                <div>
                    <button                         
                        class="option-button bg-white border border-black flex justify-between items-center"
                        @click="isOptionsExpanded5 = !isOptionsExpanded5"
                        @blur="isOptionsExpanded5 = false"
                        :class="{ 'expanded': isOptionsExpanded5 }"
                        >
                        <div class="flex items-center">
                            <img :src="selectedOption5.image" alt="Option Image" class="h-6 w-6 ml-2 mr-2" />
                            <div>
                                <strong class="text-sm flex block">{{ selectedOption5.label.split('<br>')[0] }}</strong>
                                <span class="text-sm flex block">{{ selectedOption5.label.split('<br>')[1] }}</span>
                            </div>
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
                            v-show="isOptionsExpanded5"
                            class="flex-1 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden absolute"
                            style="top: 342px; max-height: 200px; overflow-y: auto; max-width: 56%; left: 4%; "
                        >
                            <li
                                v-for="(option5, index) in options5"
                                :key="index"
                                class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                @mousedown.prevent="setOption5(option5)"
                                >
                                <div class="flex items-center">
                                    <img :src="option5.image" alt="Option Image" class="h-6 w-6 mr-2 " />
                                    <div>
                                        <strong class="text-sm flex block">{{ option5.label.split('<br>')[0] }}</strong>
                                        <span class="text-sm flex block">{{ option5.label.split('<br>')[1] }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </transition>
                </div>
                <div class = "flex flex-wrap mt-10">
                    <div class="flex pl-5 w-1/3">
                        <p>Số lượng bản in:</p>
                    </div>
                    <input
                        v-model="numberCopies"
                        type="number"
                        class="p-1 border border-gray-300 "
                        style="width:55px; height: 32px;" 
                    />
                    <button class="print-button">
                        <img src="../assets/images/print icon.jpg" alt="Button Image">
                    </button>
                </div> 
            </div>
            
            <div class="flex-1 bg-white border-solid border-2 rounded border-black relative overflow-hidden">
                
                <img
                    v-for="(image, index) in slideshowImages"
                    :key="index"
                    :src="image"
                    :class="{ 'hidden': currentIndex !== index }"
                    class="w-full h-auto my-custom-image-size mx-auto"
                    alt="Slide"
                />

               
                <div class="flex justify-center mt-4">
                    <button @click="prevSlide" class="mr-2" style="margin-bottom: 10px;">&lt;</button>
                    <input
                        v-model="pageNumber"
                        type="number"
                        class="mx-1 p-1 w-16 border border-gray-300 rounded"
                        placeholder="Page"
                        @change="goToSlide"
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
      customizeInput: '',
      isOptionsExpanded: false,
      selectedOption: "MarugotoB1.pdf",
      options: ["MarugotoB1.pdf", "MarugotoB2.pdf", "MarugotoB3.pdf", "MarugotoB4.pdf"],
      isOptionsExpanded2: false,
      selectedOption2: { label: "In tất cả các trang<br>Tất cả mọi thứ", image: "src/assets/images/all page.jpg" },
      options2: [
      { label: "In tất cả các trang<br>Tất cả mọi thứ", image: "src/assets/images/all page.jpg" },
      { label: "In trang lẻ<br>Tất cả trang lẻ", image: "src/assets/images/odd page icon.jpg" },
      { label: "In trang chẳn<br>Tất cả trang chẳn", image: "src/assets/images/even page icon.jpg" },
      { label: "In trang tùy chỉnh<br>1,3,4,7,...", image: "src/assets/images/custom page icon.jpg" },
        ],
      isOptionsExpanded3: false,
      selectedOption3: { label: "In một mặt<br>Mỗi trang một tờ", image: "src/assets/images/one side.jpg" },
      options3: [
      { label: "In một mặt<br>Mỗi trang một tờ", image: "src/assets/images/one side.jpg" },
      { label: "In hai mặt<br>Hai trang một tờ", image: "src/assets/images/two side.jpg" },
        ],  
      isOptionsExpanded4: false,
      selectedOption4: { label: "In chiều dọc", image: "src/assets/images/portrait.png" },
      options4: [
      { label: "In chiều dọc", image: "src/assets/images/portrait.png" },
      { label: "In chiều ngang", image: "src/assets/images/landscape.jpg" },
        ],  
      isOptionsExpanded5: false,
      selectedOption5: { label: "A4<br>21 x 29,7", image: "src/assets/images/A4 icon.jpg" },
      options5: [
      { label: "A4<br>21 x 29,7", image: "src/assets/images/A4 icon.jpg" },
      { label: "A3<br>29,7 x 42", image: "src/assets/images/A3 icon.png" },
        ],  
      slideshowImages: [
        'src/assets/images/maguroto.png',
        'src/assets/images/maguroto.png',
        'src/assets/images/maguroto.png',
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
    setOption3(option) {
      this.selectedOption3 = option;
      this.isOptionsExpanded3 = false;
    },
    setOption4(option) {
      this.selectedOption4 = option;
      this.isOptionsExpanded4 = false;
    },
    setOption5(option) {
      this.selectedOption5 = option;
      this.isOptionsExpanded5 = false;
    },
    goToSlide() {
        // Ensure the entered page number is within bounds
        const validPageNumber = Math.max(1, Math.min(this.pageNumber, this.slideshowImages.length));
        this.currentIndex = validPageNumber - 1;
    },
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slideshowImages.length) % this.slideshowImages.length;
        this.pageNumber = this.currentIndex + 1;
    },
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slideshowImages.length;
        this.pageNumber = this.currentIndex + 1;
    }
  }
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
    width: 321px; 
    height: 420px; 
}

.option-button {
  margin-left: 25px;
  margin-top: 20px;
  width: 330px; 
  height: 50px;
  border: 1px solid #032b91; 
}

.print-button {
    width: 85px;
    height: 105px;
    background-color: white;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    margin-left: 60px;
}

.print-button img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>