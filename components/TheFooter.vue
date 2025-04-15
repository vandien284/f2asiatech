<template>
    <footer class="relative">
        <div class="bg-[#f8f9fa] pt-[1rem] w-full flex flex-col items-center justify-center m-auto pd-container pb-[60px]">
            <div class="mb-[1.5em] w-full">
                <div class="flex w-full flex-wrap">
                    <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-[12px]">
                        <h3 class="mb-[0.5rem] text-[28px] font-medium">Thông tin liên hệ</h3>
                        <address class="mb-[1.5rem]">
                            <p><strong>Địa chỉ:</strong> 92 Nguyễn Trọng Tuyển, Phường 15, Phú Nhuận</p>
                            <p>
                                <strong>Email: </strong>
                                <a class="!text-[#0d6efd]" href="mailto:yenmarket@mylifecompany.com.vn"
                                    title="yenmarket@mylifecompany.com.vn">yenmarket@mylifecompany.com.vn</a>
                            </p>
                            <p>
                                <strong>Hotline: </strong>
                                <a class="!text-[#0d6efd]" href="tel:1900066890" title="1900 066 890">1900 066 890</a>
                            </p>
                            <p>Mã số doang nghiệp: 0317179405. Đăng ký lần đầu: 20/09/2008</p>
                        </address>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-[12px]">
                        <h3 class="mb-[0.5rem] text-[28px] font-medium">Kết nối với chúng tôi</h3>
                        <div class="relative">
                            <div class="pb-[0.5rem] flex">
                                <a href="https://www.facebook.com/YenMarketVN" target="_blank"
                                    class="relative inline-block mr-1" title="Facebook">
                                    <NuxtImg class="lazy loaded" src="/images/icons/facebook.webp"
                                        data-src="/images/icons/facebook.webp" alt="facebook" width="32" height="32">
                                    </NuxtImg>
                                </a>
                                <a href="#" target="_blank" class="relative inline-block mr-1" title="Instagram+">
                                    <NuxtImg class="lazy loaded" src="/images/icons/instagram.webp"
                                        data-src="/images/icons/instagram.webp" alt="instagram" width="32" height="32">
                                    </NuxtImg>
                                </a>
                                <a href="https://www.youtube.com/@yenmarket1761" target="_blank"
                                    class="relative inline-block mr-1" title="Youtube">
                                    <NuxtImg class="lazy loaded" src="/images/icons/youtube.webp"
                                        data-src="/images/icons/youtube.webp" alt="youtube" width="32" height="32">
                                    </NuxtImg>
                                </a>
                            </div>
                            <a href="http://online.gov.vn/Home/WebDetails/66187" target="_blank"
                                aria-label="return bct page">
                                <NuxtImg src="/images/icons/logo_bct.webp" alt="logo_bct" style="max-width:50%;">
                                </NuxtImg>
                            </a>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-full lg:w-1/4 px-[12px]">
                        <a href="he-thong-cua-hang" class="store d-inline-block" title="Hệ thống cửa hàng">
                            <NuxtImg alt="store" src="/images/icons/mew_store.webp"
                                data-src="/images/icons/mew_store.webp" sizes="10vw"></NuxtImg>
                            <span class="inline-block font-normal mt-2">Hệ thống cửa hàng</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full max-width block sm:hidden">
            <div class="footer-content max-width">
                <div class="footer-item active">
                    <NuxtImg src="/images/icons/icon-home.svg" class="footer-icon" width="32" height="32" alt="logo home"/>
                    <span class="fz-xs">Home page</span>
                </div>
                <div class="footer-item">
                    <NuxtImg src="/images/icons/icon-listcate.svg" class="footer-icon" width="32" height="32" alt="logo home"/>
                    <span class="fz-xs">Category</span>
                </div>
                <div class="footer-item">
                    <NuxtImg src="/images/icons/icon-hotline.svg" class="footer-icon" width="32" height="32" alt="logo home"/>
                    <span class="fz-xs">Hotline</span>
                </div>
                <div class="footer-item">
                    <NuxtImg src="/images/icons/icon-cart.svg" class="footer-icon" width="32" height="32" alt="logo home"/>
                    <span class="fz-xs">Cart</span>
                </div>
                <div class="footer-item">
                    <NuxtImg src="/images/icons/icon-account.svg" class="footer-icon" width="32" height="32" alt="logo home"/>
                    <span class="fz-xs">Account</span>
                </div>
            </div>
        </div>
    </footer>

</template>
<style lang="css" scoped>
.footer-content {
    align-items: center;
    background: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    bottom: 0;
    box-shadow: 0 7px 36px #102a4326;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transition: all .5s;
    width: 100%;
    z-index: 500;
    padding-block: 10px;
}

.footer-content .footer-item {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: .25rem;
    justify-items: center;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.footer-content .footer-item.active .footer-icon {
    filter: invert(14%) sepia(100%) saturate(4618%) hue-rotate(352deg) brightness(86%) contrast(80%);
}

.footer-content .footer-item .footer-icon {
    filter: invert(12%) sepia(13%) saturate(552%) hue-rotate(169deg) brightness(92%) contrast(92%);
    height: 1.1rem;
}

.footer-content .footer-item.active span {
    color: #ca2628;
}

.footer-content .footer-item span {
    color: #212529;
}
</style>