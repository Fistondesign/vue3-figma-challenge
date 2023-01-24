<script setup>
import Back from '../back/index.vue';
import ColorCircle from '../color-circle/index.vue';
import Button from '../button/index.vue';
</script>
<template>
    <div class="container-fluid">
        <div class="row no-padding">
            <div class="col-lg-12 no-padding">
                <div class="row navbar">
                    <div class="col-lg-4 col-md-12 logo-container">
                        <img src="/assets/images/Neg_MartinelliGinettoGroup_Esteso_home1.png" />
                    </div>
                    <div class="col-lg-8 col-md-12 actions">
                        <section class="actions-container">
                            <section class="login-action">
                                <img src="/assets/icons/user.png" class="icon" />
                                <small class="title">Login</small>
                            </section>
                            <span class="humbger-icon">
                                <img src="/assets/icons/menu.png" class="icon" />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 menu-logo-section">
                <div class="row no-padding">
                    <div class="col-lg-3 logo-container">
                        <img src="/assets/images/image9.png" />
                    </div>
                    <div class="col-lg-9 menus-container">
                        <section>
                            <span>CATALOG</span>
                            <img src="/assets/icons/chevron-states.png" />
                            <span>SOLUTIONS</span>
                            <span>NEWS</span>
                            <span>PROJECTS</span>
                            <img src="/assets/icons/chevron-states1.png" />
                        </section>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 back-container">
                <Back />
            </div>
            <div class="col-lg-12 no-padding">
                <div class="row slide-container">
                    <div class="col-lg-6 col-md-12 image-container">
                        <img src="/assets/images/Captura-de-pantalla-2022-10-18-a las-13.081.png" class="img" />
                        <section class="arrows-container">
                            <img src="/assets/icons/prev-icon.png" />
                            <img src="/assets/icons/next-icon.png" />
                        </section>
                    </div>
                    <div class="col-lg-6 col-md-12 content-section">
                        <section class="title">Canapone</section>
                        <div class="color-selection-container">
                            <h5>Full-bodied and resistant double-width fabric in 100% linen. Thanks to linen's abrasion
                                resistance and its pleasant feel to the touch.
                            </h5>
                            <p>See more</p>
                            <section class="color-section">
                                <p class="title">Color selection</p>
                                <section>
                                    <ColorCircle color="#4E6071" />
                                    <ColorCircle color="#7B6350" />
                                    <ColorCircle color="#A58A71" />
                                    <ColorCircle color="#DFD6BF" />
                                    <ColorCircle color="#80857A" />
                                    <ColorCircle color="#808080" />
                                    <ColorCircle color="#4E6071" />
                                    <span>+20</span>
                                </section>
                            </section>
                            <section class="select-options-container">
                                <section class="text-section">
                                    <p>To discover personalized products and custom designs log in or sign up</p>
                                </section>
                                <section class="actions-container">
                                    <Button>Signup</Button>
                                    <Button variant="primary">Login In</Button>

                                </section>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.navbar {
    min-height: 70px;
    background: #000000;
}

.navbar .logo-container {
    padding-left: 80px;
}

.navbar .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 70px;
    padding-right: 80px;
}

.navbar .actions-container {
    width: 226px;
    height: 44px;
    display: flex;
    justify-content: space-around;
}

.navbar .actions-container .login-action {
    display: flex;
    align-items: center;
    height: 36px;
}

.navbar .actions-container .login-action .title {
    height: 36px;
    display: flex;
    align-items: center;
    margin-left: 13px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
}

.menu-logo-section {
    padding: 10px;
    min-height: 80px;
    background: #A3846B;
    margin-top: -20px;
}

.menu-logo-section .logo-container {
    padding-left: 80px;
}

.menu-logo-section .menus-container {
    display: flex;
    height: 80px;
    justify-content: flex-end;
    align-items: center;
}

.menu-logo-section .menus-container section {
    width: 50%;
    min-height: 49px;
    margin-right: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
}

.back-container {
    padding-left: 100px;
}

.no-padding {
    padding: 0px;
}

.slide-container {
    min-height: 728px;
    background: #F5F5F4;
    margin-bottom: 44px;
    padding: 64px 108px;
}

.slide-container .image-container {
    min-height: 600px;
    padding: 0px;
    position: relative !important;
}

.slide-container .image-container .img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 600px;

}

.arrows-container {
    position: absolute;
    width: 100%;
    height: 55px;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 9px;
    padding-right: 9px;
}

.arrows-container img {
    cursor: pointer;
}

.content-section {
    padding: 5px 64px;
}

.content-section .title {
    width: 100%;
    height: 85px;
    font-family: 'Bodoni Moda';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 85px;
    margin-left: 15px;
    color: var(--main-bg-black);
}

.color-selection-container {
    width: 100%;
    min-height: 400px;
    background: #F5F5F4;
}



.color-selection-container p {
    width: 76px;
    height: 24px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    text-decoration-line: underline;
    margin-left: 16px;
    color: var(--main-bg-black);
    margin-top: 22px;
}

.color-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    min-height: 100px;
    width: 100%;
}

.color-section .title {
    width: 100%;
    height: 32px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.color-section section {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-items: center;
    padding: 7px;
    padding-left: 0px;
    margin-left:-12px;
    width: 100%;
    min-height: 26px;
}

.color-section section span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    text-decoration-line: underline;
    cursor: pointer;
}

.select-options-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    margin-left: 20px;
    gap: 16px;
    width: 100%;
    min-height: 162px;
    background: #FFFFFF;
    box-shadow: 0px -16px 32px -16px rgba(30, 30, 30, 0.06);
    margin-top: 44px;
}

.color-selection-container h5 {
    width: 456px;
    height: 72px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: rgba(30, 30, 30, 0.75);
    word-wrap: break-word;
    margin-left: 24px;
}

.color-selection-container .text-section {
    width: 100%;
    padding: 5px 0px;
}

.color-selection-container .text-section p {
    width: 408px;
    height: 38px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-top: -10px;
    color: rgba(30, 30, 30, 0.75);
}

.select-options-container .actions-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding:0px 24px;
    align-items: center;
    min-height: 60px;
}
@media (min-width:1900px)
{
    .color-section section {
    margin-left:-22px;
}

}
</style>