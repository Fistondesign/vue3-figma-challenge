<script  setup>
const props=defineProps(['variant'])
console.log(props.variant)
</script>
<template>
    <button class="base-button" :class="{primary:props.variant==='primary'}">
        <slot></slot>
        
    </button>
</template>
<style scoped>
.base-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;
    height: 56px;
    min-width: 193px;
    border-radius: 800px;
    flex: none;
    background:white;
    color:black;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}
.primary{
    background: var(--main-bg-black);
    color:white;
}
</style>