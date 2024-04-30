import { defineCustomElement } from 'vue'
import FileUploadComponent from './components/FileUpload.ce.vue'

const FileUpload = defineCustomElement(FileUploadComponent)

customElements.define('file-upload', FileUpload)