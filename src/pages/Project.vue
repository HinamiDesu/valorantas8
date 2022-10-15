<template>
  <div>
    <Navbar />
    <main class="content margin-auto">
        <article class="artical bg-white">
            <section class="margin-auto">
                <h1 class="title" style="color:black;">{{project}}</h1>
            </section>
        </article>
    </main>
    <footer class="content">
        
        <article style="color:aliceblue" class="artical margin-auto" >
            <section class="content margin-auto">
                <img class="img-gallery" src="img/Classic_VALORANT.png" alt="gallery">
            </section>
            <section class="text-center">
                <span>"{{content}}"</span><br><br>
                <span>--- {{group}} ---</span><br><br>
                <span>{{production}}</span>
            </section>
        </article>
    </footer>
    
    <footer class="content">
        
        <article style="color:aliceblue" class="artical margin-auto" >
            <section class="content margin-auto">
                <img class="img-gallery" src="img/Vandal_Valorant.png" alt="gallery">
            </section>
            <section class="text-center">
                <span>"{{content2}}"</span><br><br>
                <span>--- {{group2}} ---</span><br><br>
                <span>{{production2}}</span>
            </section>
        </article>
    </footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: { Navbar },
    data() {
        return {
            project : 'Weapon',
            content : 'CLASSIC',
            group : 'TYPES // SIDEARMS',
            production : 'Primary fire lands precise shots when still, and is equipped with an alternate burst-firing mode for close encounters.',
            project : 'Weapon',
            content2 : 'VANDAL',
            group2 : 'TYPES // RIFLES',
            production2 : 'Extended fire results in less stability, however. The Vandal retains high damage over distance and rewards those who focus single shots at a target’s head.',
        }
    }

}
</script>

<style>

</style>