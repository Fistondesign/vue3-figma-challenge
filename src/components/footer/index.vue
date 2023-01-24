<script setup>
</script>
<template>
    <div class="container-fluid">
        <div class="row footer">
            <div class="col-lg-12 ">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <img src="/assets/logoFooter.png" />
                    </div>
                    <div class="col-lg-6 col-sm-12 sectionI">
                        <section class="sectionI-icons">
                            <span>Contatti</span>
                            <img src="/assets/icons/instagram.png" class="icon" />
                            <img src="/assets/icons/fIcon.png" class="icon" />
                        </section>

                    </div>
                </div>
            </div>
            <div class="col-lg-12 sectionII">
                <div class="row">
                    <div class="col-lg-4 col-md-12 relative">
                        <p class="p-text">Dal 1947 lo spirito imprenditoriale <b>MARTINELLIGINETTO</b> si fonda sulle
                            competenze tecniche,
                            l’utilizzo delle tecnologie tessili più avanzate e sulla capacità di mobilitare energie
                            professionali e creative in grado di innovare il prodotto a tutti i livelli.</p>
                    </div>
                    <div class="col-lg-4 col-md-12 section-links-container">
                        <section class="section-links">
                            <p>Settori</p>
                            <span>Filati</span>
                            <span>Tessuti</span>
                            <span>Nobilitazione</span>
                            <span>Editoria</span>
                        </section>
                        <section class="section-links">
                            <p>INNOVAZIONE</p>
                            <span>Creatività e Design</span>
                            <span>Realtà produttiva</span>
                            <span>Vision Digitale</span>
                        </section>
                    </div>

                    <div class="col-lg-4 col-md-12 section-links-container">
                        <section class="section-links">
                            <p>Responsabilità</p>
                            <span>Economica</span>
                            <span>Ambientale</span>
                            <span>Sociale</span>
                        </section>
                        <section class="section-links">
                            <p>CARRIERA</p>
                            <span>Giovani</span>
                            <span>Scuola lavoro</span>
                            <span>Lavora con noi</span>
                        </section>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 sectionIII">
                <div class="row">
                    <div class="col-lg-4 col-md-12 logo-section">
                        <img src="/assets/Group2415.png" />
                        <img src="/assets/Frame2234.png" class="logo" />
                    </div>
                    <div class="col-lg-4 col-md-12 logo-section">
                        <img src="/assets/Frame.png" class="logo" />
                        <img src="/assets/nord_ciniglia.png" class="logo" />
                    </div>
                    <div class="col-lg-4 col-md-12 logo-section logo-end">
                        <img src="/assets/Logo-MSB_scontornato_W.png" class="logo" />
                    </div>
                </div>
            </div>
            <div class="col-lg-12 ">
                <div class="row sectionIV">
                    <div class="col-lg-4 col-md-12 left">
                        <span>Privacy</span>
                        <span>Cookie policy</span>
                    </div>
                    <div class="col-lg-7 col-md-12 right">
                        <span>Martinelli Ginetto S.p.A - C.F. e Partita Iva 03403660164 Cap.Sociale 10.000.000 I.v. REA:
                            BG – 375519</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    min-height: 648.13px;
    background: var(--main-bg-black);
    color: white;
    padding: 20px;
    padding: 56px 108px;
}

.sectionI {
    display: flex;
    justify-content: flex-end;
    min-height: 100px;
    align-items: center;
}

.sectionI-icons {
    min-width: 164px;
    height: 28px;
    gap: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sectionI-icons span {
    font-family: 'Raleway', sans-serif;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.5)
}

.p-text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 2px;
    word-wrap: break-word;
    margin-top:10px;
    width: 392px;
}

.section-links-container {
    display: flex;
    justify-content: space-around;
}

.section-links-container .section-links {
    min-width: 187px;
    min-height: 204px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
}

.section-links-container .section-links p {
    height: 28px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    color: white;
    text-transform: uppercase;
}

.section-links-container .section-links span {
    height: 28px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    color: #FFFFFF;
    cursor: pointer;
}
.sectionIII {
    margin-top: 35px;
    padding-top:3px;
}
.sectionIII::before,.sectionIII::after{
    position:absolute;
    width:100%;
    border: 1px solid rgba(255, 255, 255, 0.3);
    content: '';
}
.logo-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    margin-top:42px;
    margin-bottom:42px;
}

.logo-section .logo {
    margin-left: 162px;
}

.logo-end {
    display: flex;
    justify-content: flex-end;
}

.logo-end img {
    margin-right: 100px;
}
.sectionIV {
    margin-top: 32px;
}

.sectionIV .left,.right {
    display: flex;
    align-items: center;
    justify-content:flex-start;
    padding-top:15px;
}

.sectionIV .left span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    text-decoration-line: underline;
    text-decoration-color:rgba(255, 255, 255, 0.5);
}
.sectionIV .left span:nth-child(2)
{
    margin-left:7rem;
}

@media (max-width: 599px) {
    .footer {
        padding-left: 0;
    }
    .sectionII{
       display:flex;
    }
    .section-links-container{
        display:flex;
        justify-content:flex-end;
        margin-left:0px;
        margin-top:20px;
    }
    .logo-section {
        justify-content:space-between;
}

.logo-section .logo {
    margin-left:2px;
}
}
@media (max-width:500px)
{
    .sectionIV{
        display: flex;
        flex-direction:column-reverse;
    }
.p-text::before{
    position:absolute;
    width:80%;
    height:30px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    content: '';
}


}
</style>