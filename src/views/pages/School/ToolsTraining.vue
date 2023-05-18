<template>
    <v-container
        id="tools-training"
        tag="section"
    >

    </v-container>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "ToolsTraining",
    data: () => ({

    }),
    computed: {
        ...mapGetters({
            profile: 'user/profile',
        }),
        profileData() {
            return this.profile
        },
    },
    methods: {

    },
}
</script>

<style lang="sass">
.exp-panel-title .v-expansion-panel-header
    font-size: 16px

.exp-panel-title .v-expansion-panel--active
    border: 1px solid #69db69

@media(max-width: 600px)
    .block-media-lk
        padding: 0

    .card-media-lk
        padding: 0
</style>
