<template>
  <div class="events container">
    <h2 class="subtitle is-3">
    Check out our upcoming stories
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div> 
</template>
<script>
  import EventCard from '@/components/EventCard.vue';
  export default {
    name: 'EventsList',
    components : {
      EventCard
    },
    data () {
    return {
      event: {},
      events: [
        {
          id: 1,
          image: 'https://i2.wp.com/versionweekly.com/wp-content/uploads/2020/03/Short-Moral-Stories-for-Children.jpg?fit=626%2C381&ssl=1' ,
          name: 'The monkey and the crocodile',
          category: 'Moral',
          description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
          location: 'Choose your friends wisely',
          date: '29-12-2020',
          time: '11:30'
        },
        {
          id: 2,
          image: 'https://www.tell-a-tale.com/wp-content/uploads/2016/02/The-Loyal-Mongoose-810x456-810x456.jpg',
          name: 'The loyal Mangoose',
          category: 'Moral',
          description: 'Think before you act.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://placekitten.com/500/500'
          ],
          location: 'Think before you act.',
          date: '11-12-2020',
        },
        {
          id: 3,
          image: 'https://www.tell-a-tale.com/wp-content/uploads/2017/07/The-Cats-Judgement-810x456.jpg',
          name: 'The cats judgement',
          category: 'Moral',
          description: 'Never trust a stranger, even though he/she may seem very friendly.',
          location: 'Never trust a stranger, even though he/she may seem very friendly.',
          date: '28-12-2020',
        },
        {
          id: 4,
          image: 'https://storyworks.scholastic.com/content/dam/classroom-magazines/storyworks/issues/2019-20/030120/elephants-and-the-mice/STW05-202003-p20-Elephants.jpg',
          name: 'The Elephants and the Mice',
          category: 'Moral',
          description: 'A friend in need is a friend indeed.',
          location: 'A friend in need is a friend indeed.',
          date: '20-12-2020',
        }
      ]
    }    
  }
}
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>