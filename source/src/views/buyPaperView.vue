<template>

    <div class="w-screen mr-auto ml-auto bg-gray-100 max-w-6xl py-10 px-20">
        <div class="font-bold	">Mua giấy in</div>
        <div class="flex rounded border	border-black border-solid my-10	py-10 px-20 " >
            <div class="border-gray-400 border rounded-lg">
                <img src="../assets/images/print.png" class="w-96 h-80">
                <div class = "flex m-6 justify-between">
                    <div class="text-gray-400 pt-2">Số lượng:</div>  
                    <div class = "flex border-black border-solid border rounded">
                        <button class="text-xl text-center border-black border-solid border-r w-8 px-1 py-1" @click="subNum">
                            -
                        </button>
                        <div class="text-sm text-center border-black border-solid border-r w-12 px-1 py-1 pt-2 ">
                            {{ number }}
                        </div>
                        <button class="text-xl text-center border-black border-solid w-8 px-1 py-1" @click="addNum">
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div class="text-sm pt-20 ml-24 w-72">
                <div class="text-gray-500">
                    Chi tiết
                </div>
                <div class="mt-4 text-gray-500 flex justify-between">
                    <div>
                        Tổng cộng
                    </div>
                    <div class="font-bold">
                        {{ VND }}
                    </div>
                </div>
                <div class="mt-4 text-gray-500 flex justify-between	">
                    <div>
                        Khuyến mãi
                    </div>
                    <div class ="font-bold	">
                        0%
                    </div>
                </div>
                <div class="border border-solid border-gray-300 mt-6"></div>
                <div class="mt-8 flex text-black-500 justify-between font-bold">
                    <div>
                        Thành tiền
                    </div>
                    <div >
                        {{VND}}
                    </div>
                </div>
                <button class="bg-[#1488DB] text-center text-white px-20 py-2 mt-10 rounded-xl	w-72" 	> 
                    Thanh toán
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            number: 0,
            VND: 0
        }
    },
    methods:{
        subNum(){
            this.number -- 
            this.VND -= 1000
            if(this.number <0) 
            {
                this.number = 0;
                this.VND = 0
            } 
        },
        addNum(){
            this.number++
            this.VND += 1000
        }
    }
}
</script>