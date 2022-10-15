<template>
<div>
<Navbar />
  <main class="content margin-auto">
    <!---article-->
        <article class="artical">
            <section class="row-50 left margin-auto">
                <img class="profile-img" src="img/valorant_profile.jpg" alt="Profile">
            </section>
            <section class="row-50 right about-me"> 
                <header>
                    <article class="text-align-left">
                        <section class="title">
                            <h1>{{name}}</h1>
                        </section>
                        <section class="position">
                            <h3>{{motto}}</h3>
                        </section>
                        <section class="detail">
                            <span>
                                {{content}}
                            </span>
                        </section>
                    </article>
                </header>
            </section>
        </article>
    </main>
    
</div>  
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
    data() {
        return {
            name : 'Valorant',
            motto : 'Riot Games',
            content : '          Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by an official release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.',
        }
    }
}
</script>

<style>

</style>