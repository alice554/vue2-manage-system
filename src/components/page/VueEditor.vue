<template>
    <!-- 扩展：富文档编辑器组件 -->
        <div>
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item><i class="el-icon-folder"></i> 文件处理</el-breadcrumb-item>
                    <el-breadcrumb-item>文本编辑器</el-breadcrumb-item>
                    <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="container">
                <div class="plugins-tips">
                    Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                    访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
                </div>
                <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" @change="onEditorChange"></quill-editor>
                <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
            </div>
        </div>
    </template>
    
    <script>
        import 'quill/dist/quill.core.css';
        import 'quill/dist/quill.snow.css';
        import 'quill/dist/quill.bubble.css';
        import { quillEditor } from 'vue-quill-editor';
        export default {
            name: 'editor',
            data: function(){
                return {
                    content: '',
                    editorOption: {
                        placeholder: '请输入内容...'
                    }
                }
            },
            components: {
                quillEditor
            },
            methods: {
                // 编辑器文本发生变化触发,将渲染成 HTML 标签后的文本内容赋给编辑器文本的内容
                onEditorChange({ editor, html, text }) {
                    this.content = html;
                },
                submit(){
                    console.log(this.content);
                    this.$message.success('提交成功！');
                }
            }
        }
    </script>
    <style scoped>
        .editor-btn{
            margin-top: 20px;
        }
    </style>