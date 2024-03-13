<script>

import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage:1,

        };
    },
    created(){

        this.getProjects(this.currentPage);
        // axios.get('http://127.0.0.1:8000/api/projects')
        // .then(res=> {
        //     console.log(res.data);

        //     this.projects = res.data.results.data;
        //     this.currentPage =res.data.results.current_Page;
        //     this.lastPage =res.data.results.last_Page;
        // });
    },
    methods: {
        getProjects(page){
                axios   
                    .get('http://127.0.0.1:8000/api/projects',{
                        params: {
                            page:page
                        }
                    })
                    .then(res => {
                    // console.log(res.data);

                    this.projects = res.data.results.data;
                    this.currentPage =res.data.results.current_page;
                    this.lastPage =res.data.results.last_page;
            });
        },
        prevPage(){
            if(this.currentPage > 1){
                this.getProjects(this.currentPage - 1);
             
            }
        },
        nextPage(){
            if(this.currentPage < this.lastPage){
                this.getProjects(this.currentPage + 1);
            }
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h6>
                Current page: {{ currentPage }}  Last page: {{ lastPage }}
            </h6>
            <div class="row">
            <div class="col-6" v-for="project in projects" :key="project.id">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                        <h1>
                            Project ID: {{ project.id }}
                        </h1>
                        <h2 >
                            Type ID: {{ project.type?.title ?? 'null' }}
                        </h2>
                        <!-- <h3>
                            Tech type: {{ project.technologies?.title ?? 'null' }}
                        </h3> -->
                        <span v-for="tech in project.technologies" :key="tech.id">
                            Tecnologia=> {{ tech.title }}
                        </span>

                         
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text"> {{ project.content }}</p>
                        <a href="#" class="btn btn-primary">Show dell'elemento</a>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between bg-body-secondary">
                <button @click="prevPage()" type="button" class="btn btn-primary btn-sm">Prev</button>
                <button @click="nextPage()" type="button" class="btn btn-secondary btn-sm">Next</button>
            </div>
        </div>
        </div>
        


    </main>
</template>

<style lang="scss" scoped>
</style>
