<script setup>
import { ref } from 'vue';
import Back from '../back/index.vue';
import Button from '../button/index.vue';
import ColorCircle from '../color-circle/index.vue';
const search = ref(null);
</script>
<template>
    <div class="navbar">
        <section class="logo-menu-container">
            <img src="/assets/logo.png" />
            <section class="menus">
                <img src="/assets/icons/user.png" class="icon" />
                <img src="/assets/icons/heart.png" class="icon" />
                <img src="/assets/icons/shopping-cart.png" class="icon" />
                <span class="humbger-icon">
                    <img src="/assets/icons/menu.png" class="icon" />
                </span>
            </section>
        </section>
        <section class="search-container">
            <input placeholder="What fabric are you looking for ?" />
            <button>Search</button>
        </section>
    </div>
    <Back />

    <div class="slide-container">
        <section class="processing-time">
            <small>Processing time</small>
            <p>3 Working days</p>
        </section>
        <section class="title">Canapone</section>
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
                <img src="/assets/images/Captura-de-pantalla-2022-10-18-a-las-13.081.png" />
            </section>
        </section>
    </div>
    <div class="color-selection-container">
        <section class="select-options-container">
            <Button variant="primary">Select options</Button>
        </section>
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
        <section class="button-options">
            <Button variant="primary">Select options</Button>
            <Button>Select options</Button>
        </section>
    </div>


</template>

<style scoped>
.navbar {
    height: 139px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 16px 16px;
    gap: 16px;
    color: white;
    background: var(--main-bg-black);
}

.navbar .logo-menu-container {
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid grey; */
}

.logo-menu-container .menus {
    height: 36px;
    width: 70%;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-around;

}

.navbar .search-container {
    width: 100%;
    height: 33px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 100px;
    padding: 2px 2px 2px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .search-container input {
    border: none;
    width: calc(100% - 95px);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 16px;
    outline: none;
}

.navbar .search-container input::placeholder {
    color: rgba(30, 30, 30, 0.5);
}

.navbar .search-container button {
    border-radius: 800px;
    padding: 4px 8px;
    width: 87px;
    height: 29px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: var(--main-bg-black);
}

.slide-container {
    width: 100%;
    min-height: 400px;
    background: #F5F5F4;
    padding: 16px;
}

.processing-time {
    background: #00513C;
    min-height: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.processing-time small {
    color: white;
}

.processing-time p {
    margin-top: 0px;
    height: 28px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left: 16px;
    margin: 2px;
}

.slide-container .title {
    font-family: 'Bodoni Moda', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: var(--main-bg-black);
    margin-top: 26px;
}

.slide-container .slide-main-container {
    width: 100%;
    height: 285.03px;
    margin-top: 20.2px;
    position: relative;
    padding: 0px;
}

.slide-container .slide-main-container .icon-title-container,
.arrows-container {
    position: absolute;
    width: 100%;
    height: 55px;
}

.slide-container .slide-main-container .icon-title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(176.32deg, rgba(41, 45, 50, 0.85) 3.09%, rgba(217, 217, 217, 0) 135.65%);
}

.slide-container .slide-main-container .icon-title-container .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 25px;
    margin-top: -1px;
    background: rgba(30, 30, 30, 0.75);
}

.slide-container .slide-main-container .icon-title-container .title small {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #F5F5F4;
}

.slide-container .slide-main-container .arrows-container {
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 9px;
    padding-right: 9px;
}

.slide-container .slide-main-container .slide-show {
    width: 100%;
    height: 100%;
}

.slide-container .slide-main-container .slide-show img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.color-selection-container {
    width: 100%;
    min-height: 400px;
    background: #F5F5F4;
}

.select-options-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 16px;
    gap: 16px;
    width: 100%;
    min-height: 96px;
    background: #FFFFFF;
    border-top: 1px solid rgba(30, 30, 30, 0.5);
    box-shadow: 0px -16px 32px -16px rgba(30, 30, 30, 0.06);
    margin-top: 0.3px;
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
    cursor:pointer;
}
.button-options{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    min-height:200px;
    padding:16px;
}
</style>