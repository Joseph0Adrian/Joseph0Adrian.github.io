<template>
    <li class="pokemon-ability">
        {{item.ability.name}}
    </li>
</template>

<script>
export default {
    name: 'Abilities',
    props: {
    // PropTypes on Vue
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>