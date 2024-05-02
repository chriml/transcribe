<template>
    <div class="flex mt-4 h-full w-full justify-center">
        <div class="main flex flex-col grow gap-4 justify-items-stretch max-w-4xl" :class="{ 'h-5/6': !transcribing }">
            <h1 class="text-4xl"><b>Transcribe your files</b></h1>
            <div v-if="!transcribing"
                class="flex flex-col justify-center items-center rounded-3xl dropzone-container shadow-inner h-5/6 w-full p-4"
                @dragover="dragover" @dragleave.prevent.stop="dragleave" @drop="drop">
                <input type="file" multiple name="file" id="fileInput" v-show="false" @change="onChange" ref="file"
                    accept="audio/*, video/*" :style="{ 'pointer-events': isDragging ? 'none' : 'auto' }" />

                <label :style="{ 'pointer-events': isDragging ? 'none' : 'auto' }" for="fileInput"
                    class="text-2xl my-4">
                    <div v-if="isDragging">Release to drop files here.</div>
                    <div class="flex flex-col" v-else>
                        <FontAwesomeIcon size="2xl" icon="file-import" />
                        <span>Drop files here or <u>click here</u> to upload.</span>
                    </div>
                </label>
                <div :style="{ 'pointer-events': isDragging ? 'none' : 'auto' }" v-if="!isDragging"
                    class="w-full overflow-scroll">
                    <div v-for="file, i in files" :key="i"
                        class="w-full p-2 items-center justify-between flex flex-row">
                        <div class="flex flex-row items-center gap-3">
                            <FontAwesomeIcon v-if="file.type.includes('audio')" icon="microphone" />
                            <FontAwesomeIcon v-if="file.type.includes('video')" icon="video" />
                            <div class="">{{ tranformText(file.name) }} ({{ Math.round(file.size / 1024 / 1024) }} MB)
                            </div>
                        </div>
                        <button class="delete" @click="removeFile(i)">
                            <FontAwesomeIcon class="mr-2" icon="trash" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <button :disabled="files.length == 0" class="button-39" style="" @click="transcribe">
                    <FontAwesomeIcon class="mr-2" :icon="!transcribing ? 'upload' : 'cancel'" />
                    {{ transcribing ? 'Cancel' : 'Transcribe' }}
                </button>
                <!--  <button v-if="!transcribing" :disabled="files.length == 0" class="button-39"
                    @click="transcribeSlow"><span>Transcribe Parts</span></button>-->
            </div>

            <div v-if="transcribing" class="shadow-md border rounded-3xl h-5/6 w-full pt-2 px-4 overflow-scroll mb-2">
                <div v-if="!isDragging" class="m-4">
                    <div v-for="transcript, i in transcriptions" :key="i"
                        class="w-full gap-1 items-center justify-between flex flex-col">
                        <div class="w-full items-center justify-between flex flex-row mb-2">
                            <div class="flex flex-row items-center gap-3">
                                <FontAwesomeIcon v-if="transcript.file.type.includes('audio')" icon="microphone" />
                                <FontAwesomeIcon v-if="transcript.file.type.includes('video')" icon="video" />
                                <div class="">{{ transcript.file.name }} ({{ Math.round(transcript.file.size / 1024 /
            1024)
                                    }} MB)</div>
                            </div>
                            <span>{{ transcript.status }}</span>
                        </div>
                        <div class="text-left p-4 w-full mb-6 border rounded-2xl">
                            <div v-if="!transcript.keywords || !transcript.text"
                                class="flex w-full text-center justify-center">
                                <div style="color: var(--primary);"
                                    class="text-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status">
                                </div>
                            </div>
                            <div class="flex flex-row flex-wrap max-w-full h-auto items-center w-full gap-2 mb-lg mb-5"
                                v-if="transcript.keywords">
                                Keywords:
                                <div class="my-1" v-for="keyword in transcript.keywords" :key="i">
                                    <span class="tag rounded-lg p-1 px-2  w-auto text-nowrap">{{ keyword }}</span>
                                </div>
                            </div>
                            <div v-if="transcript.text" class="">{{ transcript.text }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { faVideo, faMicrophone, faTrash, faUpload, faCancel, faFileImport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faVideo, faMicrophone, faTrash, faUpload, faCancel, faFileImport);

const isDragging = ref(false);
const transcribing = ref(false);

const files = ref<File[]>([]);
const file = ref<HTMLInputElement>();

const transcriptions = ref<any>([]);

function onChange() {
    let inputFiles = Array.from(file.value?.files || []);
    inputFiles = inputFiles.filter((f: File) => f.type.includes('audio') || f.type.includes('video'));
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
        onChange();
    }
    isDragging.value = false;
}

function removeFile(index: number) {
    files.value.splice(index, 1);
}

function tranformText(text: string) {
    if (text.length > 5 && window.innerWidth < 300) {
        return text.substring(0, 5) + "...";
    }

    if (text.length > 10 && window.innerWidth < 400) {
        return text.substring(0, 7) + "...";
    }

    if (text.length > 20 && window.innerWidth < 500) {
        return text.substring(0, 10) + "...";
    }

    return text;
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
            fetch('https://transcribe-test.fly.dev/uploadFull', {
                method: 'POST',
                body: data
            }).then(async (response) => {
                let result = await response.json();
                transcriptions.value[index].text = result.text;
                transcriptions.value[index].keywords = result.keywords;
                transcriptions.value[index].status = 'Done (' + Math.round(result.time / 1000) + 'sec)';
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
            fetch('https://transcribe-test.fly.dev/uploadParts', {
                method: 'POST',
                body: data
            }).then(async (response) => {
                let result = await response.json();
                transcriptions.value[index].text = result.transcript;
                transcriptions.value[index].status = 'Completed (' + Math.round(result.time / 1000) + 'sec)';
            });
        }
    } else {
        transcriptions.value = [];
    }
}

</script>

<style>
.main {
    --primary: rgb(255, 54, 165);
    align-items: center;
    justify-content: center;
    text-align: center;
}

.tag {
    border: 2px solid var(--primary);
}

.dropzone-container {
    border: 2px solid #e2e8f0;
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

.delete {
    background-color: #fd6868 !important;
}

button:hover {
    box-shadow: 0 0 14px 0px rgba(0, 0, 0, 0.5) !important;
    filter: saturate(140%);
}

/* CSS */
button {
    transition:
        box-shadow 0.2s,
        background-color 0.5s;
    filter: 0.2s;
    background-color: rgb(255, 54, 165);
    border-radius: 10px;
    color: #111827;
    line-height: 1.25rem;
    padding: .75rem 1rem;
    text-align: center;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-39:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.button-39:disabled {
    background-color: rgb(194, 194, 194);
}

.button-39:disabled:hover {
    background-color: rgb(194, 194, 194);
    box-shadow: none !important;
}

.button-39:focus-visible {
    box-shadow: none;
}
</style>
