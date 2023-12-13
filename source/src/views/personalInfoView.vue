<template>
  <div class="w-screen mr-auto ml-auto bg-gray-100 max-w-6xl py-10 px-20">
    <div
      class="w-[100%] h-[100%] border-black border m-auto rounded-xl bg-white flex flex-colf flex-wrap justify-evenly"
    >
      <div class="w-[90%] m-auto">
        <p class="header mt-[1%] mb-[2%]">Thông tin chung</p>
        <div class="flex flex-row flex-wrap mb-[2%] items-center">
          <p class="body-content h-full w-[30%]">Họ</p>
          <div
            class="body-content-1 w-[30%] py-[1%] border-black border rounded-xl bg-gray-100 indent-2"
          >
            Lê
          </div>
        </div>
        <div class="flex flex-row flex-wrap mb-[2%] items-center">
          <p class="body-content h-full w-[30%]">Tên</p>
          <div
            class="body-content-1 w-[30%] py-[1%] border-black border rounded-xl bg-gray-100 indent-2"
          >
            Cồn
          </div>
        </div>
        <div class="flex flex-row flex-wrap mb-[2%] items-center">
          <p class="body-content h-full w-[30%]">Mã số sinh viên</p>
          <div
            class="body-content-1 w-[30%] py-[1%] border-black border rounded-xl bg-gray-100 indent-2"
          >
            2152445
          </div>
        </div>
      </div>

      <!--------------------------------------------------------------------->
      <div class="w-[90%] m-auto">
        <p class="header mt-[1%] mb-[2%]">Thông tin về số trang in ấn</p>
        <div class="flex flex-row flex-wrap mb-[2%] items-center">
          <p class="body-content h-full w-[30%]">Số trang in còn lại</p>
          <div
            class="body-content-1 w-[7%] py-[1%] border-black border rounded-xl bg-gray-100 text-center"
          >
            50
          </div>
          <button
            class="body-content-2 w-[27%] py-[0.5%] bg-sky-600 ml-[5%] border-black border rounded-xl px-[2%]"
          >
            Mua thêm giấy
          </button>
        </div>
        <div class="flex flex-row flex-wrap mb-[2%] items-center">
          <p class="body-content h-full w-[30%]">Số trang đã in</p>
          <div
            class="body-content-1 w-[7%] py-[1%] border-black border rounded-xl bg-gray-100 text-center"
          >
            69
          </div>
          <button
            class="body-content-2 w-[27%] py-[0.5%] bg-sky-600 ml-[5%] border-black border rounded-xl px-[2%]"
          >
            Xem lịch sử in
          </button>
        </div>
        <div class="flex flex-row flex-wrap mb-[2%] items-center">
          <p class="body-content h-full w-[30%]">Số trang A4</p>
          <div
            class="body-content-1 w-[7%] py-[1%] border-black border rounded-xl bg-gray-100 text-center"
          >
            35
          </div>
          <p class="body-content h-full w-[20%] ml-[5%]">Số trang A3</p>
          <div
            class="body-content-1 w-[7%] py-[1%] border-black border rounded-xl bg-gray-100 text-center"
          >
            15
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header {
  color: #676c70;
  font-family: Inter;
  font-size: 4vh;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.body-content {
  color: #000;
  font-family: Inter;
  font-size: 3vh;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.body-content-1 {
  color: #000;
  font-family: Inter;
  font-size: 2.5vh;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.body-content-1 {
  color: #fff;
  font-family: Inter;
  font-size: 2.5vh;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
