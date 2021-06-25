<template>
<div class="body">
    <div class="contenedor">
		<div class="contenido">
			<h2>I</h2>
			<p>Sahara condujo a Sam por los pasillos de la base, hasta la habitación
			en donde el resto del equipo ya estaba preparándose para subir al
			avión que los llevaría al incendio.
			<br>
			- Tundra, tenemos a la doceava miembro del equipo -
			<br>
			- Excelente - Contesto Tundra <br>- Preparare su mochila, aquella es el
			área de las chicas, para que te pongas el uniforme, hay ropa de todas
			las tallas - señalo Tundra.<br> Un par de minutos después, Sam estaba
			lista, llevaba puesto un pantalón azul y una camisa amarilla
			fosforescente, ambas prendas resistentes al fuego, encima tenia puesto
			otro pantalón y camisa color arena con kevlar acolchado, la camisa
			tenía un cuello alto para proteger el cuello, el acolchado tenía el
			propósito de disminuir el riesgo de lesiones por golpes al aterrizar en
			lugares rocosos o arbolados, en su cabeza usaba un casco que protegía
			su rostro con una rejilla metálica, calzaba botas y llevaba guantes,
			ambos especiales para incendios, su arnés de paracaídas tenía 3
			mochilas, una en su espalda con el paracaídas principal dentro, la
			segunda, a la altura de su tórax con el paracaídas de reserva y la última
			justo debajo de la segunda con su equipo personal de smokejumper.
			Tundra al verla le indico con la mano que la siguiera. El resto del
			equipo ya estaba a bordo del avión. Cruzaron una puerta hacia la pista
			de aterrizaje, los motores de Heavy metal, el C-23 Sherpa rugían, el
			avión estaba listo para el despegue.</p>
		</div>
		<footer class="footer">
			<h3>Smokejumpers</h3>
		</footer>
	</div>
</div>
</template>

<script>
    export default {
        name: 'i'
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