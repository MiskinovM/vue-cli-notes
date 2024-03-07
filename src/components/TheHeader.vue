<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/">{{ title }}</router-link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse ms-5" id="navbarsExample07">
                    <ul class="navbar-nav mr-auto">
                        <li v-for="link in links" class="nav-item active" :key="link">
                            <router-link class="nav-link" :to="link.url">{{ link.title }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style>
    header nav {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
</style>


<script>

import {app, links} from "@/_config";

export default {
    data() {
        return {
            links: links,
            title: app.title,
        }
    },
}

</script>
