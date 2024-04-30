<template>
    <div class="mt-4 h-full w-full items-center">
        <div class="main flex flex-col gap-4 justify-items-stretch" :class="{ 'h-5/6': !transcribing }">
            <h1 class="text-4xl">Transcribe your files</h1>
            <div v-if="!transcribing" class="dropzone-container shadow-inner h-5/6 w-full pt-2 px-4 overflow-scroll"
                @dragover="dragover" @dragleave="dragleave" @drop="drop">
                <input type="file" multiple name="file" id="fileInput" v-show="false" @change="onChange" ref="file"
                    accept="audio/*, video/*" />

                <label for="fileInput" class="text-2xl">
                    <div v-if="isDragging">Release to drop files here.</div>
                    <div class="mb-2 mt-auto" v-else>Drop files here or <u>click here</u> to upload.</div>
                </label>
                <div v-if="!isDragging" class="mb-auto">
                    <div v-for="file, i in files" :key="i"
                        class="w-full p-2 items-center justify-between flex flex-row">
                        <div class="">{{ file.name }}</div>
                        <div> {{ Math.round(file.size / 1024 / 1024) }} MB </div>
                        <button class="button-39" @click="removeFile(i)"><span>Delete</span></button>
                    </div>
                </div>
            </div>
            <button :disabled="files.length == 0" class="button-39" @click="transcribe"><span>{{ transcribing ? 'Cancel'
            : 'Transcribe' }}</span></button>
            <button v-if="!transcribing" :disabled="files.length == 0" class="button-39" @click="transcribeSlow"><span>Transcribe Slow</span></button>
            <div v-if="transcribing" class="shadow-md border  rounded-3xl h-5/6 w-full pt-2 px-4 overflow-scroll"
                @dragover="dragover" @dragleave="dragleave" @drop="drop">

                <div v-if="!isDragging" class="m-4 ">
                    <div v-for="transcript, i in transcriptions" :key="i"
                        class="w-full gap-1 items-center justify-between flex flex-col">
                        <div class="w-full items-center justify-between flex flex-row">
                            <div class="">{{ transcript.file.name }}</div>
                            <div> {{ Math.round(transcript.file.size / 1024 / 1024) }} MB </div>
                            <span>{{ transcript.status }}</span>
                        </div>
                        <div class="text-left p-4 w-full mb-6 border rounded-2xl">
                            <span>{{ transcript.text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- HTML !-->
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDragging = ref(false);
const transcribing = ref(false);

const files = ref<File[]>([]);
const file = ref<HTMLInputElement>();

const transcriptions = ref<any>([]);

function onChange() {
    const inputFiles = Array.from(file.value?.files || []);
    files.value.push(...inputFiles);
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
    if (file.value) {
        file.value.files = e.dataTransfer.files;
    }
    onChange();
    isDragging.value = false;
}

function removeFile(index: number) {
    files.value.splice(index, 1);
}

async function transcribe() {
    transcribing.value = !transcribing.value;
    if (transcribing.value) {
        for (let index = 0; index < files.value.length; index++) {
            transcriptions.value.push({
                file: files.value[index],
                status: 'transcribing...',
                text: '',
                duration: ''
            });

            const data = new FormData();
            data.append('file', files.value[index]);
            fetch('https://transcribe-test.fly.dev/upload', {
                method: 'POST',
                body: data
            }).then(async (response) => {
                let result = await response.json();
                transcriptions.value[index].text = result.transcript;
                transcriptions.value[index].status= 'Done (' + Math.round(result.time / 1000) + ')';
            });
        }
           

    } else {
        transcriptions.value = [];
    }
}


async function transcribeSlow() {
    transcribing.value = !transcribing.value;
    if (transcribing.value) {
        for (let index = 0; index < files.value.length; index++) {
            transcriptions.value.push({
                file: files.value[index],
                status: 'transcribing...',
                text: '',
                duration: ''
            });

            const data = new FormData();
            data.append('file', files.value[index]);
            fetch('https://transcribe-test.fly.dev/uploadSlow', {
                method: 'POST',
                body: data
            }).then(async (response) => {
                let result = await response.json();
                transcriptions.value[index].text = result.transcript;
                transcriptions.value[index].status= 'Done (' + Math.round(result.time / 1000) + ')';
            });
        }
    } else {
        transcriptions.value = [];
    }
}

</script>

<style>
.main {
    align-items: center;
    justify-content: center;
    text-align: center;
}

.dropzone-container {
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 20px;
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


/* CSS */
.button-39 {
    background-color: #FFFFFF;
    border: 1px solid rgb(209, 213, 219);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #111827;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1.25rem;
    padding: .75rem 1rem;
    text-align: center;
    text-decoration: none #D1D5DB solid;
    text-decoration-thickness: auto;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-39:hover {
    background-color: rgb(249, 250, 251);
}

.button-39:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.button-39:focus-visible {
    box-shadow: none;
}
</style>
