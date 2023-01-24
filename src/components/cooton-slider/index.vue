<template>
    <div class="container-fluid">
        <div class="row info-slider">
            <div class="col-lg-12 header">
                <p class="title">Often viewed with</p>
            </div>
            <div class="col-lg-12 content">
                <section>
                    <CootonSliderCard />
                </section>
                <section>
                    <CootonSliderCard />
                </section>
            </div>
            <div class="col-lg-12 arrows-dots-container">

                <img src="/assets/icons/Left.png" />

                <section class="dots-container">
                    <span class="active">1</span>
                    <span>2</span>
                    <span>3</span>

                </section>

                <img src="/assets/icons/Right.png" />
            </div>
        </div>
        <div class="row about-section">
            <div class="col-lg-4 col-md-12  col-sm-12 item">
                <img src="/assets/icons/tick-circle.png" />
                <p>Customer care</p>
                <section class="divider"></section>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 item ">
                <img src="/assets/icons/3d-rotate.png" />
                <p>returns</p>
                <section class="divider"></section>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 item ">
                <img src="/assets/icons/card-pos.png" />
                <p>payments</p>
                <section class="divider"></section>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 item ">
                <img src="/assets/icons/truck-fast.png" />
                <p>shipping</p>
                <section class="divider"></section>
            </div>
        </div>
    </div>
</template>

<script>
import CootonSliderCard from './sub-components/cooton-slider-card/index.vue';
export default {
    name: 'CootonSlider',
    components: {
        CootonSliderCard
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.info-slider {
    min-height: 688px;
    background: #E9E9E9;
}

.info-slider .header {
    min-height: 38px;
    display: flex;
    flex-direction: column;
}

.info-slider .header .title {
    width: 100%;
    padding: 10px;
    padding-left: 0px;
    height: 38px;
    font-family: 'Bodoni Moda';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    margin-top: 20px;

}

.info-slider .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 50px;
    min-height: 416px;
    margin-top: 14px;
    overflow-x: hidden;
    padding-left: 16px;
}

.arrows-dots-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    height: 36px;
    margin-top: 40px;
}

.arrows-dots-container .dots-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 104px;
    height: 24px;
    overflow-x: hidden;


}

.arrows-dots-container .dots-container span {
    opacity: 0.5;
    flex-shrink: none;
}

.arrows-dots-container .dots-container .active {
    opacity: none;
    color: black;
    font-weight: bold;
}

.about-section {
    padding: 44px 0px;
    min-height: 580px;
    background: #FFFFFF;
}

.about-section .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top:21px;

}

.about-section .item p {
    height: 20px;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.16em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: var(--main-bg-black);
    margin-top:24px;
    margin-bottom:22px;
}

.divider {
    position: absolute;
    width: 100%;
    content: '';
    border: 1px solid rgba(30, 30, 30, 0.1);
    bottom: 0;
}
</style>