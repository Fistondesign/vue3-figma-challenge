<script setup>
</script>

<template>
    <div class="container-fluid">
        <div class="row usedfor">
            <div class="col-lg-12 header">
                <p>Typically used for</p>
            </div>
            <div class="col-lg-2 col-sm-12 item">
                <img src="/assets/icons/bedding.png" />
                <span>Bedding</span>
                <section class="divider"></section>
            </div>
            <div class="col-lg-2 col-sm-12 item">
                <img src="/assets/icons/courtains.png" />
                <span>courtains</span>
                <section class="divider"></section>
            </div>
            <div class="col-lg-3 col-sm-12 item">
                <img src="/assets/icons/hospitality.png" />
                <span>hospital & yachting</span>
                <section class="divider"></section>
            </div>
            <div class="col-lg-2 col-sm-12 item">
                <img src="/assets/icons/homedecor.png" />
                <span>home decor</span>
                <section class="divider"></section>
            </div>
            <div class="col-lg-2 col-sm-12 item">
                <img src="/assets/icons/table.png" />
                <span>table</span>
                <section class="divider"></section>
            </div>
        </div>
    </div>
</template>

<style scoped>
.usedfor {
    min-height: 278px;
    background: #FFFFFF;
    padding-bottom:20px;
}

.usedfor .header {
    padding: 10px;
    display: flex;
    align-items: center;
}

.usedfor .header p {
    font-family: 'Bodoni Moda';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
}

.usedfor .item {
    min-height: 84px;
    display: flex;
    align-items: center;
    position: relative;
}

.usedfor .item span {
    height: 20px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-left:16px;
    color:var(--main-bg-black);
}
.usedfor .item .divider{
    position:absolute;
    width:90%;
    height:2px;
    content: '';
    border: 1px solid rgba(30, 30, 30, 0.2);
    bottom:0;
}
@media (min-width:600px)
{   .usedfor{
    margin-left:110px;
}
    .usedfor .item{
        flex-direction:column;
        margin-top:56px;
    }
    .usedfor .item span{
        margin-top:16px;
    }
    .usedfor .item .divider{
        display:none;
    }
}
</style>