<script setup>
import ColorCircle from '../../../color-circle/index.vue';
</script>
<template>
    <div class="card">
        <section class="slide-main-container">
            <div class="icon-title-container">
                <img src="/assets/icons/heart.png" />
                <section class="title">
                    <small>Cutting service available</small>
                </section>
            </div>
            <section class="arrows-container">
                <img src="/assets/icons/prev-icon.png" />
                <img src="/assets/icons/next-icon.png" />
            </section>
            <section class="slide-show">
                <img src="/assets/images/Captura-de-pantalla-2022-10-18-a-las-12.572.png" />
            </section>
        </section>
        <section class="text-section">
            <p>Lorem ipsum dolor sit amet</p>
        </section>
        <section class="logo-section">
            <img src="/assets/images/Brignoli1.png" />
        </section>
        <section class="currency-section">
            <span>from $12.00/meter </span>
        </section>
        <section class="color-section">
            <section>
                <ColorCircle color="#973528" />
                <ColorCircle color="#9A9EA3" />
                <ColorCircle color="#00513C" />
                <ColorCircle color="#1E1E1E" />
            </section>
            <span>+20</span>
        </section>
    </div>
</template>

<style scoped>
.card {
    width: 287px;
    display: flex;
    flex-direction: column;
    min-height: 446px;
    flex-shrink: none;
    background: #FFFFFF;
}

.card .image-container {
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
    object-fit: contain;
}

.card .text-section {
    height: 28px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
}

.card .text-section p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: var(--main-bg-black);
}

.paragraph-span {
    font-weight: normal;
}

.sub-paragraph {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(30, 30, 30, 0.5);
}

.currency-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 17px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #1A1A1A;
    margin-top: 16px;
}

.logo-section {
    min-height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
}

.color-section {
    width: 100%;
    min-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    margin-top: 32px;
    margin-bottom: 20px;
}
.color-section section{
    width:120px;
    height:auto;
    display:flex;
}
.color-section span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.03em;
    color: #000000;
}

.slide-main-container {
    width: 100%;
    height: 285.03px;
    position: relative;
    padding: 0px;
}

.slide-main-container .icon-title-container,
.arrows-container {
    position: absolute;
    width: 100%;
    height: 55px;
}

.slide-main-container .icon-title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(176.32deg, rgba(41, 45, 50, 0.85) 3.09%, rgba(217, 217, 217, 0) 135.65%);
}

.slide-main-container .icon-title-container .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 25px;
    margin-top: -1px;
    background: rgba(30, 30, 30, 0.75);
}

.slide-main-container .icon-title-container .title small {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #F5F5F4;
}

.slide-main-container .arrows-container {
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 9px;
    padding-right: 9px;
}

.slide-main-container .slide-show {
    width: 100%;
    height: 100%;
}

.slide-main-container .slide-show img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>