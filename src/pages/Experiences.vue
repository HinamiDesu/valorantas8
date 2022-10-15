<template>
  <div>
    <Navbar />
    <footer class="content margin-auto">
      <article style="color: aliceblue" class="text-center">
        <section>
          <span>"{{ motto2 }}"</span>
        </section>
        <section>
          <span>--- {{ author }} ---</span>
          <section class="detail">
                            <span>
                                {{content1}}
                            </span>
                        </section>
        <img src="img/valorantpic1.png">            
        </section>
        <hr />
      </article>
    </footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
//https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/cartoon
export default {
  components: { Navbar },
  methods: {
    async fetchExperience() {
      try {
        let res = await axios.get(
          "https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/cartoon"
        );
        this.experiences = res.data;
      } catch (error) {}
    },
  },

  data() {
    return {
      motto2: "Gameplay",
      author: "Riot Games",
      content1: "Valorant is a team-based first-person hero shooter set in the near future. Players play as one of a set of Agents characters based on several countries and cultures around the world. In the main game mode players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives. Every player starts each round with a  pistol and one or more signature ability charges. Other weapons and ability charges can be purchased using an in-game economic system that awards money based on the outcome of the previous round, any kills the player is responsible for, and any objectives completed. The game has an assortment of weapons including secondary guns like sidearms and primary guns like submachine guns, shotguns, machine guns, assault rifles and sniper rifles. There are automatic and semi-automatic weapons that each have a unique shooting pattern that has to be controlled by the player to be able to shoot accurately. It currently offers 19 agents to choose from. They are Brimstone, Viper, Omen, Cypher, Sova, Sage, Phoenix, Jett, Raze, Breach, Reyna, Killjoy, Skye, Yoru, Astra, KAY/O, Chamber Neon and Fade.",
    };
  },
  beforeMount() {
    this.fetchExperience();
  },
};
</script>

<style>
</style>