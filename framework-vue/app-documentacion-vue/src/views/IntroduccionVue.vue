<template>
    <div class="main">    
        <h1>Introducción Vue 3</h1>
        <h3>¿Qué es Vue.js?</h3>
        <p>
            Vue (pronunciado /vjuː/, como view) es un framework progresivo para 
            la construcción de interfaces de usuario. A diferencia de otros frameworks 
            monolíticos, Vue está diseñado desde el principio para ser adoptado de forma 
            incremental. El núcleo de la biblioteca se centra en la capa de vista solamente, 
            y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes. 
            Por otro lado, Vue también es perfectamente capaz de impulsar sofisticadas aplicaciones 
            de una sola página cuando se utiliza en combinación con herramientas modernas y bibliotecas de apoyo.
        </p>
        <h3>Cómo empezar</h3>
        <p>
            TIP <br>
            La guía oficial asume un conocimiento de nivel intermedio de HTML, CSS y 
            JavaScript. Si eres totalmente nuevo en el desarrollo frontend, puede 
            que no sea la mejor idea saltar directamente a un framework como primer 
            paso - ¡comprende lo básico y luego vuelve! La experiencia previa con 
            otros frameworks ayuda, pero no es necesaria.
        </p>
        <p>
            La forma más fácil de probar Vue.js es utilizando el ejemplo de 
            Hello World 
            <a href="https://codepen.io/team/Vue/pen/KKpRVpx" target="_blank">(https://codepen.io/team/Vue/pen/KKpRVpx)</a>. 
            Siéntete libre de abrirlo en otra pestaña y seguir a lo largo de algunos ejemplos básicos.
            La página de instalación proporciona más opciones de instalación de 
            Vue. Nota: No recomendamos que los principiantes comiencen con vue-cli, 
            especialmente si no están familiarizados con las herramientas de construcción basadas en Node.js.
        </p>
        <h3>Renderización declarativa</h3>
        <p>
            En el núcleo de Vue.js hay un sistema que nos permite renderizar datos 
            de forma declarativa en el DOM utilizando una sintaxis de plantillas sencilla:
        </p>
        <pre class="pre1">
            <code class="adapt">
                html
                &lt;div id&#61;&quot;counter&quot;&gt;
                    Counter&#58; &#123;&#123; counter &#125;&#125;
                &lt;div&gt;
            </code>
        </pre>
        <pre class="pre1">
            <code class="adapt">
                js

                const Counter = {
                    data() {
                        return {
                            counter: 0
                        }
                    }
                }

                Vue.createApp(Counter).mount('#counter')
            </code>
        </pre>
        <p>
            ¡Ya hemos creado nuestra primera aplicación Vue! Esto se parece bastante 
            a renderizar una plantilla de cadenas, pero Vue ha hecho mucho trabajo 
            bajo el capó. Los datos y el DOM están ahora vinculados, y todo es ahora 
            reactivo. ¿Cómo lo sabemos? Echa un vistazo al ejemplo de abajo donde la 
            propiedad del contador se incrementa cada segundo y verás cómo cambia el DOM renderizado:
        </p>
        <pre class="pre1">
            <code class="adapt">
                js 

                const Counter = {
                    data() {
                        return {
                            counter: 0
                        }
                    },
                    mounted() {
                        setInterval(() => {
                            this.counter++
                        }, 1000)
                    }
                }
            </code>
        </pre>
        <p>
            Además de la interpolación de texto, también podemos vincular los atributos de los elementos de esta manera:
        </p>
        <pre class="pre1">
            <code class="adapt">
                html
                &lt;div id&#61;&quot;bind-attribute&quot;&gt;
                    &lt;span v-bind:title="message"&gt;
                        Hover your mouse over me for a few seconds to see my dynamically bound title!
                    &lt;span&gt;
                &lt;div&gt;
            </code>
        </pre>
        <pre class="pre1">
            <code class="adapt">
                js

                const AttributeBinding = {
                    data() {
                        return {
                            message: 'You loaded this page on ' + new Date().toLocaleString()
                        }
                    }
                }

                Vue.createApp(AttributeBinding).mount('#bind-attribute')
            </code>
        </pre>
        <p>
            Aquí nos encontramos con algo nuevo. El atributo v-bind que estás 
            viendo se llama directiva. Las directivas llevan el prefijo v- para 
            indicar que son atributos especiales proporcionados por Vue, y como 
            habrás adivinado, aplican un comportamiento reactivo especial al DOM 
            renderizado. Aquí estamos diciendo básicamente "mantén el atributo 
            title de este elemento actualizado con la propiedad message en la 
            instancia activa actual".
            Ve el ejemplo <a href="https://codepen.io/team/Vue/pen/KKpRVvJ" 
            target="_blank">https://codepen.io/team/Vue/pen/KKpRVvJ</a>.
        </p>
        <h3>Manejo de la entrada del usuario</h3>
        <p>
            Para permitir que los usuarios interactúen con tu aplicación, podemos 
            utilizar la directiva v-on para adjuntar escuchadores de eventos que 
            invoquen métodos en nuestras instancias:
        </p>
        <pre class="pre1">
            <code class="adapt">
                html
                &lt;div id&#61;&quot;event-handling&quot;&gt;
                    &lt;p&gt;&#123;&#123; message &#125;&#125;&lt;p&gt;
                    &lt;button v-on:click="reverseMessage"&gt;Reverse Message&lt;button&gt;
                &lt;div&gt;
            </code>
        </pre>
        <pre class="pre1">
            <code class="adapt">
                js

                const EventHandling = {
                    data() {
                        return {
                            message: 'Hello Vue.js!'
                        }
                    },
                    methods: {
                        reverseMessage() {
                            this.message = this.message
                            .split('')
                            .reverse()
                            .join('')
                        }
                    }
                }

                Vue.createApp(EventHandling).mount('#event-handling') 
            </code>
        </pre>
        <p>
            Ve el ejemplo <a href="https://codepen.io/team/Vue/pen/dyoeGjW" 
            target="_blank">https://codepen.io/team/Vue/pen/dyoeGjW</a>.
        </p>
        <p>
            Ten en cuenta que en este método actualizamos el estado de nuestra 
            aplicación sin tocar el DOM - todas las manipulaciones del DOM son 
            manejadas por Vue, y el código que escribes se centra en la lógica subyacente.

            Vue también proporciona la directiva v-model que hace que la vinculación 
            bidireccional entre la entrada del formulario y el estado de la aplicación sea muy fácil:
        </p>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.main {
    text-align: left;
    .pre1 {
        overflow:auto;
        .adapt {
            white-space:pre-wrap;
        }
    }
}
</style>