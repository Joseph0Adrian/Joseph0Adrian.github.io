<template>
  <div class="col-sm-10 vh-100">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
        <!-- <l-marker :lat-lng="markerLatLng"></l-marker> -->
      </l-map>
      <p>
        <strong>
          Mensaje del extraño:
        </strong>
      </p>
      <p>{{ msgOfOther }}</p>
  </div>
</template>

<script>
import {LMap, LTileLayer, LPolyline} from 'vue2-leaflet';
export default {
  name: 'RutasUrbanas',
  props:['msg'],
  components: {
    LMap,
    LTileLayer,
    LPolyline,
    // LMarker,
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 13,
      center: [18.893920, -96.929300],
      polyline: {
        latlngs: [[18.893920, -96.929300]],
		color: 'green'
      },
      // markerLatLng: [51.504, -0.159],
      msgOfOther: [],
    }
  },
  created(){

  },
  beforeMount() {
    this.$root.$on('send', data => {
    console.log(data);
      if(data!=null){
        this.polyline.latlngs = data;
      } else {
        this.polyline.latlngs = [[18.893920, -96.929300]];
      }
      // this.msgOfOther = data;
      // console.log(this.msgOfOther);
    });
  },
  methods:{
    mostrarRuta(){
      // console.log();
      // this.latlngs=this.msgOfOther;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
