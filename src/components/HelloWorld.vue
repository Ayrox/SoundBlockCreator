<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to SoundBlock Creator
        </h1>

        <p class="subheading font-weight-regular">
          Create your own sound pack for Minecraft
        </p>
        <v-btn class="mx-5" color="secondary" rounded>
          Create your own pack
        </v-btn>
        <v-btn
          class="mx-5"
          color="secondary"
          rounded
          :loading="isSelecting"
          @click="handleFileImport"
        >
          Import your pack
        </v-btn>

        <input
          ref="uploader"
          class="d-none"
          type="file"
          @change="onFileChanged"
        />

        <v-btn class="mx-5" color="secondary" rounded>
          Open a project file
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => {
    return {
      isSelecting: false,
      selectedFile: null,
    };
  },
  methods: {
    handleFileImport() {
      this.isSelecting = true;

      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      // Trigger click on the FileInput
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];

      // Do whatever you need with the file, liek reading it with FileReader
    },
  },
};
</script>
