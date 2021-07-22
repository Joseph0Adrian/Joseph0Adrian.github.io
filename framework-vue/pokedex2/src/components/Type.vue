<template>
    <li class="pokemon-type">
        <span class="type-name">
            <b><span>{{item.slot}}</span>
            </b>
        </span>
        <br>
        <span>{{item.type.name}}</span>
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