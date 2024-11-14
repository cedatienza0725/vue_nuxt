<template>
    <div>
        <file-pond
            ref="pond"
            name="file"
            accepted-file-types="image/*, application/pdf, application/doc, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            :server="server"
            :files="files"
            @init="getCsrfCookie"
            @removefile="$emit('deleted')"
            @processfile="fileUploaded"
        />
    </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType)

export default {
    components: {
        FilePond,
    },
    props: {
        resetFilepond: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            files: [],
            xsrfToken: '',
        }
    },
    computed: {
        server() {
            return {
                url: '/p/v1/resume-upload',
                headers: {
                    'X-XSRF-TOKEN': this.xsrfToken,
                },
            }
        },
    },
    watch: {
        resetFilepond(resetFilepond) {
            if (resetFilepond) {
                this.$refs.pond.removeFile()
                this.$emit('filepondReset')
            }
        },
    },
    methods: {
        async getCsrfCookie() {
            await this.$axios
                .get('/api/sanctum/csrf-cookie')
                .then(() => {
                    this.xsrfToken = this.$cookies.get('XSRF-TOKEN')
                })
                .catch((err) => console.log(err))
        },
        fileUploaded(err = null, file) {
            this.$emit('uploaded', file.serverId)
        },
    },
}
</script>

<style>
.filepond--credits {
    visibility: hidden;
}
</style>
