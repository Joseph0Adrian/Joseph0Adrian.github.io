<template>
  <div class="prologo body">
      <div class="contenedor">
		<div class="contenido">
			<h2 class="contenido__h2">Prólogo</h2>
			<p class="contenido__p">Los saltadores de humo (smokejumpers en inglés) son un tipo de
			bombero forestal que saltan desde aviones y descienden por medio de
			paracaídas a las áreas en donde hay incendios forestales en marcha
			para proveer una respuesta rápida en donde más se necesite. A
			menudo, sus servicios son usados en circunstancias urgentes donde
			conducir hasta el lugar de los hechos tomaría demasiado tiempo. De
			forma similar a los helitack crews (tripulaciones de ataque a incendios
			forestales en helicóptero), ellos son de los primeros grupos en
			responder y participar en los ataques iniciales a los incendios
			forestales. Además de ayudar a la extinción de incendios, los
			smokejumpers también brindan apoyo para la reducción de
			combustibles peligrosos a las agencias de administración de tierras
			cuando es necesarios. Las cargas de aviones de smokejumpers suelen
			oscilar entre 8 y 10 personas, según el tamaño del avión. Este tipo de
			bomberos forestales están altamente capacitados y experimentados.
			Para convertirse en un smokejumper es esencial tener experiencia
			previa en extinción de incendios, como helitack crews, hotshot crews
			o fuels crews.</p>
		</div>
		<footer class="footer">
			<h3>Smokejumpers</h3>
		</footer>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Prologo'
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}

	.body{
		background: #000;
		color: #fff;
		font-family: sans-serif;
		font-size: 20px;
	}

	.contenedor{
		width: 90%;
		max-width: 1000px;
		margin: 20px auto;
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, auto);

		grid-template-areas:	"contenido"
								"footer";
	}

	.contenedor .contenido{
		grid-area: contenido;
		text-align: justify;
	}

	.contenedor .footer{
		grid-area: footer;
	}

	@media screen and (max-width: 768px){
		.contenedor{
			grid-template-areas:"contenido"
								"contenido"
								"footer";
		}
	}
</style>