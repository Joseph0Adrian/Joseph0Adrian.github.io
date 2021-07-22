<template>
    <li class="pokemon-stat">
        <span class="stat-name">
            <b>{{item.stat.name}}</b>
        </span>
        <br>
        <span>{{item.base_stat}}</span>
    </li>
</template>

<script>
export default {
    name: 'Stat',
    props: {
    // PropTypes on Vue
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>