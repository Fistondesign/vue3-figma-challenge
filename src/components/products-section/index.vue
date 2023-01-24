<script setup>

</script>

<template>
    <div class="container-fluid">
        <div class="row products-section">
            <section class="col-lg-12 header">
                <p>Products you might like</p>
                <span>
                    <img src="../../assets/icons/keyboard_backspace.png" />
                    <img src="../../assets/icons/east (1).png" />
                </span>
            </section>
            <section class="col-lg-12 content">
                <div class="cards-slider">
                    <section class="card">
                        <img src="../../assets/images/Captura de pantalla 2022-10-18 a las 13.08 2.png"/>
                    </section>
                    <section class="card">
                        <img src="../../assets/images/Captura de pantalla 2022-10-18 a las 13.08 2.png"/>
                    </section>
                    <section class="card">
                        <img src="../../assets/images/Captura de pantalla 2022-10-18 a las 13.08 1.png"/>
                    </section>
                    <section class="card">
                        <img src="../../assets/images/Captura de pantalla 2022-10-18 a las 13.08 2.png"/>
                    </section>
                    <section class="card">
                        <img src="../../assets/images/Captura de pantalla 2022-10-18 a las 13.08 2.png"/>
                    </section>

                </div>
            </section>
        </div>
    </div>
</template>
<style scoped>
.products-section {
    padding: 64px 0px 64px 110px;
    min-height: 626px;
    background: #EDEAE6;
}

.products-section .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
}

.products-section .header p {
    font-family: 'Bodoni Moda';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
}

.products-section .header span {
    width: auto;
    padding: 2px 0px;
    padding-right: 113px;
}

.products-section .header span img {
    cursor: pointer;
}

.products-section .content {
    height: 400px;
}

.products-section .content .cards-slider {
    min-height: 400px;
    width:100%;
    display: flex;
    align-items: center;
    margin-top: 41.76px;
    overflow-x: hidden;
}

.products-section .content .cards-slider .card {
    min-width: 287px;
    height: 400px;
    margin:7px;
    background: #FFFFFF;
    flex-shrink:none;
}
.products-section .content .cards-slider .card img{
    width:100%;
    height:400px;
    object-fit:cover;
    object-position: center center;
}
</style>