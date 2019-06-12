<!--<template>
  <quill-editor
    v-model="content"
    ref="myQuillEditor"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @change="onEditorChange($event)"
  ></quill-editor>
</template> -->
<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>
<script>
// import { quillEditor } from "vue-quill-editor";
export default {
  name: 'app',
  data() {
    return {
      // content: null,
      // editorOption: {}
    };
  },
  methods: {
    // onEditorBlur() {
    //   //失去焦点事件
    // },
    // onEditorFocus() {
    //   //获得焦点事件
    // },
    // onEditorChange() {
    //   //内容改变事件
    // }
  }
};
</script> 