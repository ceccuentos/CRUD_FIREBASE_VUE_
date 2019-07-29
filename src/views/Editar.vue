<template>
    <div>
    <h1>Editar</h1>
    {{id}} - {{tarea}}
    <form @submit.prevent="editTarea(tarea)" class="form-inline">
        <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
            <div class="input-group-text">Editar</div>
            </div>
            <input type="text" v-model="tarea.nombre" class="form-control">
        </div>
<!--         <input type="text" v-model="tarea.nombre" class="form-control"> -->
        <button type="submit" class="btn btn-primary mb-2">Editar</button> 
    </form>

    </div>

</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
    name:'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getTarea','editTarea'])
    },
    created(){
        this.getTarea(this.id)
    },
    computed:{
        ...mapState(['tarea'])
    }
}

</script>
