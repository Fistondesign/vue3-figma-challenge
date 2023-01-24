<script setup>
import Accordion from '../accordion/index.vue';
</script>
<template>
    <div class="container-fluid">
        <div class="row info-container">
            <section class="col-lg-12">
                <Accordion title="TECHNICAL INFORMATION">
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
                        <section class="item-detail">
                            <p>Care</p>
                            <section class="icons-container">
                                <img src="../../assets/icons/Group (3).png" />
                                <img src="../../assets/icons/Group.png" />
                                <img src="../../assets/icons/Group (1).png" />
                                <img src="../../assets/icons/Group (2).png" />
                            </section>
                            <section class="opcion">
                                <section class="header">
                                    <img src="../../assets/icons/Group (3).png" />
                                    <span>Lorem ipsum</span>
                                </section>
                                <section class="content">
                                    <img src="../../assets/images/range1.png" />
                                </section>
                            </section>
                            <section class="opcion">
                                <section class="header">
                                    <img src="../../assets/icons/Group.png" />
                                    <span>Lorem ipsum</span>
                                </section>
                                <section class="content">
                                    <img src="../../assets/images/range.png" />
                                </section>
                            </section>
                            <section class="opcion">
                                <section class="header">
                                    <img src="../../assets/icons/Group.png" />
                                    <span>Lorem ipsum</span>
                                </section>
                                <section class="content">
                                    <p>Lorem ipsum dolor si amet, lorem ipsum</p>
                                </section>
                            </section>
                            <section class="opcion">
                                <section class="header">
                                    <img src="../../assets/icons/Group.png" />
                                    <span>Lorem ipsum</span>
                                </section>
                                <section class="content">
                                    <p>Lorem ipsum dolor si amet, lorem ipsum</p>
                                </section>
                            </section>
                            <section class="divider"></section>
                        </section>

                        <section class="mews-section">
                            <img src="../../assets/images/mews.png" />
                        </section>

                        <section class="download-section">
                          <img src="../../assets/icons/document-download.png"/>
                          <span>Download technical sheet</span>
                        </section>

                    </section>
                </Accordion>
            </section>
            <section class="col-lg-12 accordion-holder">
                <Accordion title="SHIPPING"></Accordion>
                <section class="divider"></section>
            </section>
            <section class="col-lg-12 accordion-holder">
                <Accordion title="RETURNS"></Accordion>
                <section class="divider"></section>
            </section>
        </div>
    </div>
</template>
<style scoped>


.info-items-container .item-detail {
    flex-direction: column !important;
    padding-bottom: 15px;
    position: relative;
}

.info-items-container .item-detail p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: var(--main-bg-black);
    margin-top: 16px;
}

.info-items-container .item-detail .icons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    width: 100%;
    height: 36px;
    margin-top: 16px;
    margin-bottom: 20px;
}

.info-items-container .item-detail .icons-container img {
    margin-left: 17px;
}

.info-items-container .item-detail .icons-container img:first-child {
    margin-left: 0px;
}

.info-items-container .item-detail .opcion {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 92px;
    background: #FFFFFF;
    border-bottom: 0.5px solid rgba(30, 30, 30, 0.5);
}

.info-items-container .item-detail .opcion .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: 100%;
    height: 36px;
    padding-top: 18px;
}

.info-items-container .item-detail .opcion .header img {
    margin-left: 20px;
}

.info-items-container .item-detail .opcion .header span {
    height: 24px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    margin-left: 16.5px;
    color: var(--main-bg-black);
}

.info-items-container .item-detail .opcion .content {
    width: 100%;
    min-height: 40px;
    display: flex;
    align-items: center;
    margin-top: 14px;
}

.info-items-container .item-detail .opcion .content img,
p {
    margin-left: 15px;
    width: 90%;
}

.info-items-container .item-detail .opcion .content p {
    width: 295px;
    height: 48px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
    color: rgba(30, 30, 30, 0.75);
}

.info-items-container .mews-section {
    width: 100%;
    min-height: 349.62px;
}

.info-items-container .mews-section img {
    width: 100%;
    height: auto;
}

.info-items-container .download-section {
    width:100%;
    display:flex;
    align-items: center;
    min-height:50px;
}
.info-items-container .download-section span{
    height: 24px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.03em;
    text-decoration-line: underline;
    color: var(--main-bg-black);
    margin-left:11px;
    cursor:pointer;
}
.accordion-holder{
    position: relative;
}
</style>