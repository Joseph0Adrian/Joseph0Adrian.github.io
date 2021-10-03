<template>
    <p>
        {{item.ability.name}}
    </p>
    <button class="button-3" role="button" v-on:click="getDescriptionAbility(item.ability.url)">See description ability</button>
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

<style scoped>
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>