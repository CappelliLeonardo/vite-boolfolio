<script>

import axios from 'axios';

export default {
    data() {
        return {
            project:null,

        };
    },
    created(){
        this.getProject();
    },
    methods: {
        getProject(){
            axios
                .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                .then((res)=>{
                   
                   this.project=res.data.results
                });
        },
       
    }
}
</script>

<template>
        <div class="row">
    <div class="col">
        <div class="card">
            <div class="card-body">
                <h1 class="text-center text-success">
                    {{ project.title }}
                </h1>

                <h2>
                    Slug: {{ project.slug }}
                </h2>
                
                <div v-for="tech in project.technologies" :key="tech.id">  
                    {{ console.log(project.type) }}
                    <div v-if="project.technologies != null">
                        <span>Tecnologia=></span>
                        <span >
                            {{ tech.title }}
                        </span>
                    </div>
                    <div v-else>
                        <span>Tecnologia=> Non presente</span>
                    </div>
                </div>

                <p>
                    {{ project.content }}
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>
