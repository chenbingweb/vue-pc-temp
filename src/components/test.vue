<template>
    <div class="flex_start">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"cb-test"
    }
</script>

<style>
.flex_start
{
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

</style>