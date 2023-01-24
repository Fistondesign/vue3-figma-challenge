<template>
    <div class="container-fluid">
        <div class="row info-slider">
            <div class="col-lg-12 header">
                <p class="title">Not sure yet?</p>
                <small class="subtitle">
                    Order a fabric swatch or color card
                </small>
            </div>
            <div class="col-lg-12 content">
                <InfoSliderCard/>
                <InfoSliderCard />
            </div>
            <div class="col-lg-12 arrows-dots-container">

                <img src="../../assets/icons/Left.png" />

                <section class="dots-container">
                    <span class="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    
                </section>

                <img src="../../assets/icons/Right.png" />
            </div>
        </div>
    </div>
</template>

<script>
import InfoSliderCard from './sub-components/info-slider-card/index.vue';
export default {
    name: 'InformationSlider',
    components: {
        InfoSliderCard
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
    background: #F8F8F7;
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
    font-family: 'Bodoni Moda';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #000000;

}

.info-slider .header .subtitle {
    max-width: 328px;
    min-height: 54px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #000000;
    word-wrap: break-word;
}

.info-slider .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 50px;
    min-height: 416px;
    margin-top: 24px;
    overflow-x: hidden;
}

.arrows-dots-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    height: 36px;
    margin-top:40px;
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
.arrows-dots-container .dots-container span{
    opacity:0.5;
    flex-shrink:none;
}
.arrows-dots-container .dots-container .active{
    opacity:none;
    color:black;
    font-weight:bold;
}
</style>