<template>
    <p>
        {{item.stat.name}} : {{item.base_stat}}
    </p>
</template>

<script>
export default {
    name: 'Stat',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>