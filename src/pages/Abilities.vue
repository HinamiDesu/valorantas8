<template>
  <div>
    <Navbar />
    <!---article-->
    <section class="text-center detail">
    <h1>MAPS</h1>
 <main class="content margin-auto">
    <!---article-->
        <article class="artical">
            <section class="row-50 left margin-auto">
                <img class="profile-img" src="img/Sage.png" alt="Profile">
            </section>
            <section class="row-50 right about-me"> 
                <header>
                    <article class="text-align-left">
                        <section class="title">
                            <h1>{{agent1}}</h1>
                        </section>
                        <section class="position">
                            <h3>{{role1}}</h3>
                        </section>
                        <section class="detail">
                            <span>
                                {{chadescription1}}
                            </span>
                        </section>
                    </article>
                </header>
            </section>
        </article>

         <article class="artical">
            <section class="row-50 left margin-auto">
                <img class="profile-img" src="img/Killjoy.png" alt="Profile">
            </section>
            <section class="row-50 right about-me"> 
                <header>
                    <article class="text-align-left">
                        <section class="title">
                            <h1>{{agent2}}</h1>
                        </section>
                        <section class="position">
                            <h3>{{role2}}</h3>
                        </section>
                        <section class="detail">
                            <span>
                                {{chadescription2}}
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
import Navbar from "../components/Navbar.vue";
import axios from "axios";
//https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/cartoon
export default {
  components: { Navbar },
  methods: {
    async fetchAbilities() {
      try {
        let res = await axios.get(
          "https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/cartoon"
        );
        this.fetchAbilities = res.data;
      } catch (error) {}
    },
  },
  data() {
    return {
            agent1 : 'Sage',
            role1: 'Sentinel',
            chadescription1 : 'The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.',
            agent2 : 'Killjoy',
            role2 : 'Sentinel',
            chadescription2 : 'The genius of Germany, Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear does not stop her enemies, her robots debuff will help make short work of them.',
    };
  },
  beforeMount() {
    this.fetchAbilities();
  },
};
</script>

<style>
</style>