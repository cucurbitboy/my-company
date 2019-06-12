<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="quill-editor" v-model="content" v-quill:myQuillEditor="editorOption"></div>

  <!-- Or manually control the data synchronization（手动控制数据流）  -->
  <div
    class="quill-editor"
    :content="content"
    @change="onEditorChange($event)"
    v-quill:myQuillEditor="editorOption"
  ></div>
</template>
import { quillEditor } from 'vue-quill-editor'
<script>
export default {
  data() {
    return {
      content: "<p>example content</p>",
      editorOption: {
        /* quill options */
      }
    };
  },
  components: {
    quillEditor
  },
  mounted() {
    console.log("this is current quill instance object", this.myQuillEditor);
  },
  methods: {
    onEditorChange(event) {
      console.log("onEditorChange");
    }
  }
  // Omit the same parts as in the following component sample code
  // ...
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
