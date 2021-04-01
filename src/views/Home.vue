<template>
  <v-app id="home">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row class="justify-center">
          <v-pagination
            v-model="page"
            :length="lengthPagination()"
            :total-visible="7"
            class="my-3"
            color="orange accent-3"
          ></v-pagination>
        </v-row>
        <v-row>
          <v-col
            v-for="item in visiblePhotos"
            :key="item.id"
            class="justify-center"
            cols="6"
            sm="4"
          >
            <v-card
              flat
              class="mx-auto my- text-center pa-5"
              max-width="350"
              max-height="350"
              height="auto"
            >
              <v-img
                :src="item.thumbnailUrl"
                aspect-ratio="1"
                class="grey lighten-2 mx-auto"
                height="150px"
                width="150px"
                @click="showModal(item.url)"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title class="justify-center text-center">{{
                item.title
              }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-pagination
            v-model="page"
            :length="lengthPagination()"
            :total-visible="7"
            class="my-3"
            color="orange accent-3"
          ></v-pagination>
        </v-row>
        <div class="text-center">
          <v-dialog v-model="dialog" width="600" height="600">
            <v-card flat tile class="mx-auto my-auto text-center">
              <v-img
                :src="imageModal"
                aspect-ratio="1"
                class="grey lighten-2 mx-auto"
                height="600px"
                width="600px"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-dialog>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getPhotos } from "../api/modules";
export default {
  data: () => ({
    dialog: false,
    imageModal: null,
    photos: [],
    page: 1,
    perPage: 100,
  }),
  computed: {
    visiblePhotos() {
      return this.photos.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  async mounted() {
    await this.getAllPhotos();
  },
  methods: {
    async getAllPhotos() {
      let response = await getPhotos();
      if (response) {
        const photos = Object.values(response);
        this.photos = photos;
        console.log("photos", this.photos);
      } else {
        this.$toasted.error("Algo ha salido mal!", {
          theme: "outline",
          position: "top-right",
          duration: 5000,
        });
      }
    },
    lengthPagination() {
      return Math.ceil(this.photos.length / this.perPage);
    },
    showModal(url) {
      this.dialog = true;
      this.imageModal = url;
    },
  },
};
</script>