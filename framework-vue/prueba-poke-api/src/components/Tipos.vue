<template>
    <p>
        type : {{item.type.name}}
    </p>
</template>

<script>
export default {
    name: 'Tipos',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>