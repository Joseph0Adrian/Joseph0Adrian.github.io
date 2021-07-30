<template>
    <li class="pokemon-type">
        {{item.type.name}}
    </li>
</template>

<script>
export default {
    name: 'Type',
    props: {
    // PropTypes on Vue
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>