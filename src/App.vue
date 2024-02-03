<script setup>
import LeftIndex from './components/LeftIndex.vue'
import ExampleCode from './components/ExampleCode.vue'
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/metaform.png" width="125" height="125" />
        <div class="wrapper">
            <LeftIndex msg="Metaform" />
        </div>
    </header>
    <main class="mt-5">
        <ExampleCode />
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        justify-content: center;
        padding-right: calc(var(--section-gap) / 2);
        margin-bottom: 50px;
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>