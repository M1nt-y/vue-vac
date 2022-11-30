<template>
  <div>
    <head-title>Vehicle videos</head-title>
    <div class="container">
      <card-list v-bind="videos" />
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList";
import HeadTitle from "@/components/HeadTitle";
export default {
  name: "VehicleVideos",
  components: {HeadTitle, CardList},
  data() {
    return {
      videos: {
        totalItems: Number,
        itemsPerPage: 4,
        card: 'video',
        content: [
          {id: 1, image: 'video-1.jpg', name: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback', link: 'https://www.youtube.com/embed/BBRacI0G0Xs'},
          {id: 2, image: 'video-2.jpg', name: 'VAC\'s Vehicle Shoot #11: Toyota Highlander', link: 'https://www.youtube.com/embed/6NImgmZKLfo'},
          {id: 3, image: 'video-3.jpg', name: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5', link: 'https://www.youtube.com/embed/RBQiMQATOC4'},
          {id: 4, image: 'video-4.jpg', name: 'Some Vehicles VAC Offers!', link: 'https://www.youtube.com/embed/6NImgmZKLfo'},
          {id: 5, image: 'video-1.jpg', name: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback', link: 'https://www.youtube.com/embed/BBRacI0G0Xs'},
          {id: 6, image: 'video-4.jpg', name: 'VAC\'s Vehicle Shoot #11: Toyota Highlander', link: 'https://www.youtube.com/embed/RBQiMQATOC4'},
          {id: 7, image: 'video-2.jpg', name: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5', link: 'https://www.youtube.com/embed/BBRacI0G0Xs'},
          {id: 8, image: 'video-3.jpg', name: 'Some Vehicles VAC Offers!', link: 'https://www.youtube.com/embed/6NImgmZKLfo'},
          {id: 9, image: 'video-4.jpg', name: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback', link: 'https://www.youtube.com/embed/RBQiMQATOC4'},
          {id: 10, image: 'video-2.jpg', name: 'VAC\'s Vehicle Shoot #11: Toyota Highlander', link: 'https://www.youtube.com/embed/6NImgmZKLfo'},
          {id: 11, image: 'video-1.jpg', name: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5', link: 'https://www.youtube.com/embed/BBRacI0G0Xs'},
          {id: 12, image: 'video-3.jpg', name: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback', link: 'https://www.youtube.com/embed/6NImgmZKLfo'},
          {id: 13, image: 'video-4.jpg', name: 'VAC\'s Vehicle Shoot #11: Toyota Highlander', link: 'https://www.youtube.com/embed/RBQiMQATOC4'},
        ]
      }
    }
  },
  beforeMount() {
    this.videos.totalItems = this.videos.content.length;
  },
}
</script>

<style scoped>

</style>