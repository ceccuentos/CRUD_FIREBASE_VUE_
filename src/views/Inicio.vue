<template>
    <div>
        <h1>Lista de tareas</h1>
        <router-link :to="{name: 'agregar'}">
            <button class="bt btn-success btn-block">Add</button>
        </router-link>
         <ul class="list-group mt-5">
            <li class="list-group-item"
                v-for='tarea of tareas' :key="tarea.id" >
                {{ tarea.id }}   - {{ tarea.nombre }} 
                <div class="float-right">
                    <router-link class="btn btn-warning btn-sm mr-2"
                    :to="{name: 'editar', params:{ id: tarea.id}}">
                        Editar
                    </router-link>
                    <button @click="delTarea(tarea.id)" class="btn btn-danger btn-sm">Eliminar</button>
                </div>
            </li>
        </ul> 
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas','delTarea'])
    },
    created(){
        this.getTareas()
    },
    computed: {
        ...mapState(['tareas'])
    }
}
</script>
