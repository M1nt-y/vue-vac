<template>
  <div class="modal">
    <div class="modal__video" >
      <div class="model__close">
        <img src="@/assets/icons/Close.svg">
      </div>
      <iframe
          @click.stop
          width="100%" height="100%"
          :src=link
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheModal",
  props: {
    link: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style scoped>

.modal {
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(8,8,8,0.1);
  display: flex;
  width: 100%;
  cursor: default;
}

.modal__video {
  position: relative;
  margin: auto;
  max-width: 900px;
  width: 90%;
  aspect-ratio: 1 / 0.625;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  padding-right: 34px;
}
.model__close {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}
@media screen and (max-width: 1024px) {
  .modal__video {
    padding-right: 60px;
  }
}
@media screen and (max-width: 680px) {
  .modal__video {
    padding-right: 0;
    padding-top: 34px;
  }
}
</style>