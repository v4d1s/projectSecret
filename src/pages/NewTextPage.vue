<template>
  <div>
    <new-text-form
        @create="createText"
        :postData="postData"
    />
  </div>
</template>

<script>
import NewTextForm from "@/components/NewTextForm.vue";
import axios from "axios";

export default {
  components: {NewTextForm},
  data() {
    return {
      postData: {
        id: '',
        value: ''
      }
    }
  },
  methods: {
    async createText(post) {
      this.postData.id = post.id
      this.postData.value = post.value
      await axios({
        url: 'http://localhost:8080/text/add',
        method: 'post',
        data: {
          id: this.postData.id,
          value: this.postData.value
        }
      })
      this.$router.push('/' + this.postData.id)
    }
  },
}
</script>

<style scoped>

</style>