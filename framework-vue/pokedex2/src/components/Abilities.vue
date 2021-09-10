<template>
    <p>
        {{item.ability.name}}
    </p>
    <button v-on:click="getDescriptionAbility(item.ability.url)">See description ability</button>
    <div v-for="item in descriptionResponse.effect_entries" v-bind:key="item">
        <p v-if="item.language.name === 'en'">
            {{item.short_effect}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Abilities',
    data () {
        return {
            descriptionResponse: {}
        }
    },
    props: {
        item: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
        getDescriptionAbility(name) {
            let req = new Request(name);
            fetch(req)
            .then((res) => {
                if(res.status === 200)
                    return res.json()
            })
            .then((data) => {
                this.descriptionResponse = data;
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
}
</script>