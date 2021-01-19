<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome Kiddo!          
        </h1>
        <h2 class="subtitle">
          Make sure you check out our upcoming stories
        </h2>
        
      </div>
    </div>
  </section>
  <EventsList />
</div>
</template>
<script>
import EventsList from '../components/EventsList.vue';
export default {
  name: 'home',
  components: {
    EventsList
  }
}
</script>
<style lang="scss" scoped>
  .hero {    
    text-align: center;
    background-image: url('https://www.architectandinteriorsindia.com/public/styles/full_img/public/images/2019/11/12/CASAGRAND-Royale-3.jpg?itok=CF4bpuQL');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 40px;
      padding-left: 30px;
      padding-right: 30px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.5rem;
  }
</style>