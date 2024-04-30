<template>
    <div class="main">
        <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
            <input type="file" multiple name="file" id="fileInput" v-show="false" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="fileInput" class="file-label">
                <div v-if="isDragging">Release to drop files here.</div>
                <div v-else>Drop files here or <u>click here</u> to upload.</div>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDragging = ref(false);
const files = ref([]);
const file = ref([]);

function onChange() {
    //files.value.push(file.value.files);
}
function dragover(e: any) {
    e.preventDefault();
    isDragging.value = true;
}
function dragleave() {
    isDragging.value = false;
}
function drop(e: any) {
    e.preventDefault();
    //file.value.files = e.dataTransfer.files;
    onChange();
    isDragging.value = false;
}


</script>

<style>
.main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 100vh;
    justify-content: center;
    text-align: center;
}

.dropzone-container {
    padding: 4rem;
    width: 100vh;
    height: 200px;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

.preview-container {
    display: flex;
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}
</style>
