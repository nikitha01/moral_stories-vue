<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ event.name }}</h1>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5"><strong>Category:</strong> {{ event.category }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="event.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'EventSingle',
  data () {
    return {
      events: [
        {
          id: 1,
          name: 'The monkey and the crocodile',
          category: 'Moral',
          description: 'Choose your friends wisely.',
          images: [
            'https://i2.wp.com/versionweekly.com/wp-content/uploads/2020/03/Short-Moral-Stories-for-Children.jpg?fit=626%2C381&ssl=1'
          ],
          date: '12-25-2019'
        },
        {
          id: 2,
          name: 'The loyal Mangoose',
          category: 'Moral',
          description: 'Think before you act.',
          featuredImage: 'https://placekitten.com/500/500',
          images: [
            'https://www.tell-a-tale.com/wp-content/uploads/2016/02/The-Loyal-Mongoose-810x456-810x456.jpg'
          ],
          location: 'Think before you act.',
          date: '11-12-2020'
        },
        {
          id: 3,
          name: 'The cats judgement',
          category: 'Moral',
          description: 'Never trust a stranger, even though he/she may seem very friendly.',
          images: [
            'https://www.tell-a-tale.com/wp-content/uploads/2017/07/The-Cats-Judgement-810x456.jpg'
          ],
          date: '28-12-2020'
        },
        {
          id: 4,
          name: 'The Elephants and the Mice',
          category: 'Moral',
          description: 'A friend in need is a friend indeed.',
          images: [
            'https://storyworks.scholastic.com/content/dam/classroom-magazines/storyworks/issues/2019-20/030120/elephants-and-the-mice/STW05-202003-p20-Elephants.jpg'
          ],
          date: '20-12-2020'
        }
      ],
      event: {}
    }    
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
}
</script>