import { defineCustomElement } from 'vue'
import FileUploadComponent from './components/FileUpload.ce.vue'
/* import wrapper from "vue3-webcomponent-wrapper";
import { createApp, h } from "vue";

const webComponent = wrapper(FileUploadComponent, createApp, h);
customElements.define("file-upload", webComponent); */

const FileUpload = defineCustomElement(FileUploadComponent)

customElements.define('file-upload', FileUpload)