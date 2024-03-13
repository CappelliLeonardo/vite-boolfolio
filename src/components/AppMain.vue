<script>

import axios from 'axios';

export default {
    data() {
        return {
            projects: []
        };
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(res=> {
            console.log(res.data);

            this.projects = res.data.results.data;
        });
    }
    // methods: {

    // }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
            <div class="col-6" v-for="project in projects" :key="project.id">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h1>
                            Project ID: {{ project.id }}
                        </h1>
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text"> {{ project.content }}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </div>
        </div>
        


    </main>
</template>

<style lang="scss" scoped>
</style>
