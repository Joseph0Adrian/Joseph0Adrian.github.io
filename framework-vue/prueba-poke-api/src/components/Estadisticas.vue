<template>
    <p class="pokemon-estadistica">
        {{item.stat.name}} : {{item.base_stat}}.
    </p>
</template>

<script>
export default {
    name: 'Estadisticas',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>