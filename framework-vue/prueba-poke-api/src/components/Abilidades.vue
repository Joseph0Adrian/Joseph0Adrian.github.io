<template>
    <p>
        ability : {{item.ability.name}}.
    </p>
</template>

<script>
export default {
    name: 'Abilidades',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>