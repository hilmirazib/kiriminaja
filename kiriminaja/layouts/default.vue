<template>
    <div>
        <HeaderTop />
        <Navbar />
        <Nuxt />
        <AppFooter />
    </div>
</template>

<script>
import HeaderTop from '~/components/HeaderTop.vue'; 
import Navbar from '~/components/Navbar.vue'; 
import AppFooter from '~/components/Footer.vue';
export default {
    name: 'default',
    components: {
    HeaderTop,
    Navbar,
    AppFooter,
}
} 
</script>