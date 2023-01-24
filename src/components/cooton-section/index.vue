<script setup>

</script>
<template>
    <div class="container-fluid">

        <div class="row cooton-info">
            <div class="col-lg-6 col-md-12 ">
                <section class="row text-container">
                    <section class="col-lg-12 header">
                        <p>Technical information</p>
                    </section>
                    <section class="col-lg-12">
                        <section class="info-items-container">
                            <section class="section-item">
                                <span>Pattern</span>
                                <span>Plain</span>
                                <section class="divider"></section>
                            </section>
                            <section class="section-item">
                                <span>Width (cm)</span>
                                <span>295.00</span>
                                <section class="divider"></section>
                            </section>
                            <section class="section-item">
                                <span>Structure</span>
                                <span>Sateen</span>
                                <section class="divider"></section>
                            </section>
                            <section class="section-item">
                                <span>Composition</span>
                                <span>100% Cotton</span>
                                <section class="divider"></section>
                            </section>
                            <section class="section-item">
                                <span>Thread Count (T.C.)</span>
                                <span>600</span>
                                <section class="divider"></section>
                            </section>
                            <section class="section-item">
                                <span>Weight (g/m2)</span>
                                <span>285.00</span>
                                <section class="divider"></section>
                            </section>
                        </section>
                    </section>
                </section>
            </div>
            <div class="col-lg-6 col-md-12 image-container">
                <img src="/assets/images/Bitmap2.png" />
            </div>
        </div>
        <div class="row cotton-container">
            <section class="col-lg-6 col-md-12 image-container">
                <img src="/assets/images/image12.png" />
            </section>
            <section class="col-lg-6 col-md-12 cotton-text-section">
                <p>Organic cotton award</p>
                <span>(editorial content)</span>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis.</h6>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.

                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Curabitur tempus urna at turpis condimentum lobortis.</h6>
            </section>
        </div>

        <div class="row cotton-award">
            <section class="col-lg-12 col-md-12 cotton-text-award-section">
                <p>Organic cotton award</p>
            </section>
            <div class="col-lg-12">
                <div class="row image-container">
                    <section class="col-lg-4 col-md-12 col-sm-12">
                        <img src="/assets/images/Bitmap.png" />
                    </section>
                    <section class="col-lg-4 col-md-12 col-sm-12">
                        <img src="/assets/images/Bitmap1.png">
                    </section>
                    <section class="col-lg-4 col-md-12 col-sm-12">
                        <img src="/assets/images/Bitmap.png"/>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.cotton-container {
    background: #E9E9E9;
    min-height: 539.52px;
}

.cotton-container .image-container,
.cotton-text-section {
    padding: 16px 23px 54px;
}

.cotton-container .cotton-text-section {
    display: flex;
    flex-direction: column;
}

.cotton-container .cotton-text-section p {
    height: 38px;
    font-family: 'Bodoni Moda';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #000000;
}

.cotton-container .cotton-text-section span {
    height: 27px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #000000;
    margin-top: 16px;

}

.cotton-container .cotton-text-section h6 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    color: rgba(30, 30, 30, 0.75);
}

.cotton-award {
    padding: 16px 23px 54px;
}


.cotton-award .cotton-text-award-section {
    display: flex;
    flex-direction: column;
}

.cotton-award .cotton-text-award-section p {
    height: 38px;
    font-family: 'Bodoni Moda';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #000000;
    margin-top: 46px;
}

.cotton-award .image-container {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    align-items: flex-start;
}

.cotton-award .image-container section {
    height: auto;
    width:100%;
    background:red;
    margin:10px;
    padding:0px;
}
.cotton-award .image-container section img{
    height:300px;
    width:100%;
    object-fit:cover;
}

.cotton-award .image-container section::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 46.88px;
    height: 48px;
    top:40%;
    left:50%;
    background: #FFFFFF;
    border:12px solid rgba(30, 30, 30, 0.75);
}

.cooton-info {
    min-height: 412px;
    background: #F5F5F4;
}

.cooton-info .text-container {
    margin-top: 50px;
    padding: 5px;
    padding-left: 108px;
}

.cooton-info .text-container .header {
    height: 34px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: underline;
    color: var(--main-bg-black);
}

.cooton-info .image-container {
    display: flex;
    justify-content: flex-end;
    padding-right: 0;
}

.cooton-info .image-container img {
    width: 604px;
    height: 376px;
    margin-top: 50px;
    margin-bottom: 30px;
}

@media (min-width:599px) {
    .cotton-container {
        padding: 110px;
    }

    .cotton-container .image-container {
        display: flex;
        justify-content: center;
    }

    .cotton-container .cotton-text-section {
        display: flex;
        margin-left: -7rem;
    }

    .cotton-award {
        display: none;
    }
}

@media (max-width:599px) {
    .cooton-info {
        display: none;
    }
}
</style>