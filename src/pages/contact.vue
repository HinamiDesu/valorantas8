<template>
  <div>
    <Navbar />
    <section class="text-center detail">
    <h1>MAPS</h1>
 <main class="content margin-auto">
    <!---article-->
        <article class="artical">
            <section class="row-50 left margin-auto">
                <img class="profile-img" src="img/Loading_Screen_Pearl.png" alt="Profile">
            </section>
            <section class="row-50 right about-me"> 
                <header>
                    <article class="text-align-left">
                        <section class="title">
                            <h1>{{map1}}</h1>
                        </section>
                        <section class="position">
                            <h3>{{mapf1}}</h3>
                        </section>
                        <section class="detail">
                            <span>
                                {{description1}}
                            </span>
                        </section>
                    </article>
                </header>
            </section>
        </article>

         <article class="artical">
            <section class="row-50 left margin-auto">
                <img class="profile-img" src="img/Loading_Screen_Breeze.png" alt="Profile">
            </section>
            <section class="row-50 right about-me"> 
                <header>
                    <article class="text-align-left">
                        <section class="title">
                            <h1>{{map2}}</h1>
                        </section>
                        <section class="position">
                            <h3>{{mapf2}}</h3>
                        </section>
                        <section class="detail">
                            <span>
                                {{description2}}
                            </span>
                        </section>
                    </article>
                </header>
            </section>
        </article>
    </main>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    components: { Navbar },
    data (){
        return {
            map1 : 'Pearl',
            mapf1 : 'Map Features',
            description1 : 'Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.',
            map2 : 'Breeze',
            mapf2 : 'Map Features',
            description2 : 'Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You will need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze',
        }
    }

}
</script>

<style>

</style>