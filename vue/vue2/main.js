const con = new Vue({
    el:"#elemento",
    data:{
        contenido:"Hola mundo",
        // lenguajes:['Javascript','Python', 'PHP']
        lenguajes:[
            {nombre:"Javascript", link:'https://www.javascript.com', puntos:0},
            {nombre:"Python", link:'https://www.python.org', puntos:0},
            {nombre:"PHP", link:'https://php.net', puntos:0}
        ],
        nuevoLenguaje:'',
        nuevoLink:'',
        nuevoPunto:0,
        total:0
    },
    methods:{
        agregarLenguaje(){
            this.lenguajes.push({nombre:this.nuevoLenguaje, 
                link:this.nuevoLink, puntos:this.puntos})
            this.nuevoLenguaje='';
            this.nuevoLink='';
            this.puntos=0;
        }
    },
    computed:{
        sumarTodo(){
            this.total=0;
            for(lenguaje of this.lenguajes){
                this.total=this.total+lenguaje.puntos;
            }
            return this.total;
        }
    }
})