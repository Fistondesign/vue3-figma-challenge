<script setup>

</script>
<template>
    <div class="card">
        <section class="image-container">
            <img src="/assets/images/DIAMANTE_PREMIUM_PCAR0064_1.png"/>
        </section>
        <section class="text-section">
            <p>Fabric swatch <span class="paragraph-span">(15x15 cm)</span></p>
            <span class="sub-paragraph">PCAR0040-000001</span>
        </section>
        <section class="currency-section">
            <span>&#x20AC;</span>
            <small>100</small>
        </section>
        <button class="button">CTA mini</button>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 416px;
    padding:16px;
    flex-shrink:none;
}

.card .image-container {
    width: 100%;
    height: 240px;
    display:flex;
    justify-content:center;
    object-fit:contain;
}

.card .text-section {
    height: 28px;
    width: 100%;
    padding: 5px;
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
    padding: 5px;
    height: 32px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0.03em;
    color: #1E1E1E;
    margin-top: 40px;
    display: flex;
    align-items: center;
}

.currency-section small {
    margin-left: 10px;
}

.card .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    width: 100%;
    height: 40px;
    border: 1px solid var(--main-bg-black);
    border-radius: 800px;
    background:white;
    margin-top:16px;
}
</style>