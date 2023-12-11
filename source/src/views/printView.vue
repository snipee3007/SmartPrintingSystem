<template>
    <div class="w-screen mr-auto ml-auto bg-gray-100 max-w-6xl">
        <div class="p-12">
            <fieldset>
                <legend class="flex items-center mb-2">
                    <div class="flex items-center mr-1">
                        <button class="flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <h3 class="flex items-strech items-center mb-0 font-semibold text-xl">
                                Tải tập tin
                            </h3>
                        </button>
                    </div>
                </legend>
                <div class="block">
                    <div class="flex flex-wrap">
                        <div class="flex pt-1.5 pl-6 w-1/4">
                            <p>Tập tin in ấn</p>
                        </div>
                        <div class="flex items-start w-3/4">
                            <!-- chỗ để upload file -->
                            <fieldset>
                                <legend class="absolute h-0 w-0 overflow-hidden	">Tập tin in ấn</legend>
                                <div class="w-full">
                                    <div class="text-right">
                                        <span>Các định dạng file được cho phép: .pptx, .ppt, .doc, .docx, .xls, .xlsx, .csv, .pdf</span>
                                    </div>
                                    <div class="fp-navbar mb-0 card">
                                        <div class="p-1 overflow-hidden icon-no-spacing">
                                            <div class="flex fp-toolbar">
                                                <div class="fp-btn-add block float-left mr-1">
                                                    <button title="Thêm tập tin" class="rounded	bg-gray-300 hover:bg-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn btn-second btn-sm w-9 h-9">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="fp-btn-mkdir">
                                                    <button title="Tạo thư mục" class="rounded	bg-gray-300 hover:bg-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn btn-second btn-sm w-9 h-9">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="fp-viewbar btn-group">
                                                <button title="" class="rounded	bg-gray-300 hover:bg-gray-400 mr-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn btn-second btn-sm w-9 h-9">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                                    </svg>
                                                </button>
                                                <button title="" class="rounded	bg-gray-300 hover:bg-gray-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn btn-second btn-sm w-9 h-9">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="fp-pathbar mt-1 mb-1">
                                            <span class="flex items-center ml-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                    <path d="M3.75 3A1.75 1.75 0 002 4.75v3.26a3.235 3.235 0 011.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0016.25 5h-4.836a.25.25 0 01-.177-.073L9.823 3.513A1.75 1.75 0 008.586 3H3.75zM3.75 9A1.75 1.75 0 002 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0018 15.25v-4.5A1.75 1.75 0 0016.25 9H3.75z" />
                                                </svg>
                                                <a type="button" class="ml-2 text-blue-700 cursor-pointer hover:underline">Tập tin</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="filemanager-container card ">
                                        <div class="fm-content-wrapper">
                                            <div class="fp-content"></div>
                                            <div class="fm-empty-container">
                                                <div class="dndupload-message inline text-gray-400">Bạn có thể kéo và thả tập tin vào đây để thêm chúng.<br/>
                                                    <div class="dndupload-arrow flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="text-3xl w-9 h-9 m-auto">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="block">
                <div class="flex flex-wrap">
                    <div class="flex pt-1.5 pl-6 w-1/4">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
fieldset {
    min-width: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .5rem;
}

.fp-navbar {
    border-color: #8f959e;
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}



.fp-toolbar {
    float: left;
}

.fp-viewbar {
    float: right;
}
.icon-no-spacing a>.icon {
    margin: 0
}

.btn {
    display: inline-block;
    font-weight: 400;
    color: #1d2125;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: .9375rem;
    line-height: 1.5;
    border-radius: .5rem;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out
}
/* .btn-second {
    color: #1d2125;
    background-color: #ced4da;
    border-color: #ced4da;
} */



.btn-group, .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}

.btn-sm,.btn-group-sm>.btn {
    padding: .15rem .5rem;
    /* font-size: .8203125rem; */
    /* line-height: 1.5; */
    border-radius: .2rem
}

.filemanager-container {
    min-height: 140px;
    border: 1px solid #8f959e;
    border-radius: .5rem;
}

.filemanager-container {
    display: flex;
    align-items: center;
    overflow: hidden;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.fm-empty-container {
    display: block;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    border: 2px dashed #bbb;
    padding-top: 85px;
    text-align: center;
}

.dndupload-arrow {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 5px;
    color: #8f959e;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.form-group {
    margin-bottom: 1rem;
}
</style>