<template>
<div class="contenedor">
	<div class="header">
		<h1>Orange Star</h1>
	</div>
	<div class="command-officer">
		<h3>Command Officer</h3>
		<p>Orange Star, is one of the five main forces of Wars World. It is featured in all installments of the series, with the exception of Advance Wars: Days of Ruin/Dark Conflict. In Campaign mode of each game, it is the first country playable, also serving as a tutorial. They are a member of the Allied Nations. Orange Star have the second highest number of COs, after Black Hole. The other three Allied Nations factions have 4 COs, but Orange Star has 7 (not including Super Famicom Wars's Yuan Delta). With the exception of Jake, the forces of Orange Star concentrates in direct warfare, excelling in frontal assaults.</p>
	</div>
	<div class="andy">
		<img src="@/assets/Andy.webp">
		<h3>Andy</h3>
		<p>The newest of the group. Optimistic but naive, Andy is the best mechanic around, able to repair his damaged units and give them a tune-up. As the most inexperienced, his units don't gain any benefits or disbenefits.</p>
	</div>
	<div class="max">
		<img src="@/assets/Max.webp">
		<h3>Max</h3>
		<p>A veteran CO. Strong but reckless, Max packs a punch when it comes to his direct forces, but is too clumsy to use indirect units properly.</p>
	</div>
	<div class="sami">
		<img src="@/assets/Sami.webp">
		<h3>Sami</h3>
		<p>A veteran CO. Strong-willed but hot-tempered, Sami is a master of foot soldiers as well as capturing the enemy propertys, but she isn't very skilled when it comes to any other kind of unit.</p>
	</div>
	<div class="nell">
		<img src="@/assets/Nell.webp">
		<h3>Nell</h3>
		<p>Orange Star's chief CO. Stern but sensitive, Nell is known for being lucky, with all of her units being able to randomly pack more of a punch.</p>
	</div>
	<div class="footer">
		<h3>Orange Star</h3>
	</div>
</div>
</template>

<script>
export default {
  name: 'OrangeStar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;
	padding: 0;
}

.header{
	text-align: center;
	padding: 20px 0;
}

.contenedor{
	width: 90%;
	max-width: 1000px;
	margin: auto;
	line-height: 50px;
	text-align: center;
}

.contenedor > div{
	display: block;
	padding: 20px;
	box-shadow: 2px 2px 10px rgba(0,0,0,.25);
}

.contenedor{
	width: 90%;
	max-width: 1000px;
	margin: 20px auto;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: repeat(5, auto);
	grid-template-areas:"header				header				header				header"
						"command-officer	command-officer		command-officer		command-officer"
						"andy				andy				max					max"
						"sami				sami				nell				nell"
						"footer				footer				footer				footer";
}

.contenedor .header{
	/*coral*/
	background: #FF7F50;
	color: #000;
	grid-area: header;
}

.contenedor .command-officer{
	/*light salmon*/
	background: #FFA07A;
	color: #000;
	grid-area: command-officer;
}

.contenedor .andy{
	/*dark orange*/
	background: #FF8C00;
	color: #000;
	grid-area: andy;
}

.contenedor .max{
	/*orange*/
	background: #FFA500;
	color: #000;
	grid-area: max;
}

.contenedor .sami{
	/*orange red*/
	background: #FF4500;
	color: #000;
	grid-area: sami;
}

.contenedor .nell{
	/*tomato*/
	background: #FF6347;
	color: #000;
	grid-area: nell;
}

.contenedor .footer{
	/*coral*/
	background: #FF7F50;
	color: #000;
	grid-area: footer;
}

@media screen and (max-width: 768px){
	.contenedor{
		grid-template-areas:"header				header				header				header"
							"command-officer	command-officer		command-officer		command-officer"
							"andy				andy				andy				andy"
							"max				max			 		max			 		max"
							"sami		 		sami				sami				sami"
							"nell		 		nell				nell				nell"
							"footer				footer				footer				footer";
	}
}
</style>