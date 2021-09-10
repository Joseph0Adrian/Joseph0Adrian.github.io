<template>
    <p>
        {{item.type.name}}
    </p>
</template>

<script>
export default {
    name: 'Type',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>