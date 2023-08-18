<template>
    <div>
        <v-header-empty/>
        <slot></slot>
    </div>
</template>

<script>
    import vHeaderEmpty from '@/components/templates/v-header-empty.vue';
    export default {

        components: {
            vHeaderEmpty
        }
    }
</script>

