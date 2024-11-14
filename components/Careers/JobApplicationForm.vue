<template>
    <div id="applicationForm" class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
        <div
            class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
        >
            <div class="px-4 py-8 sm:px-10">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Your Information
                    </h3>
                </div>

                <div class="mt-6">
                    <ValidationObserver ref="form" v-slot="{ passes }">
                        <form
                            class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            @submit.prevent="passes(onSubmit)"
                        >
                            <div class="sm:col-span-2">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="job"
                                    name="Job"
                                    rules="required"
                                >
                                    <label
                                        for="job"
                                        class="block text-sm font-medium text-gray-900"
                                        >Job</label
                                    >
                                    <select
                                        id="job"
                                        v-model="form.job"
                                        name="job"
                                        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                    >
                                        <option value disabled>
                                            Select job
                                        </option>
                                        <option
                                            v-for="(career, index) in careers"
                                            :key="index"
                                            :value="career.id"
                                        >
                                            {{ career.name }}
                                        </option>
                                    </select>
                                    <span class="errors">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="first_name"
                                    name="First name"
                                    rules="required"
                                >
                                    <label
                                        for="first_name"
                                        class="block text-sm font-medium text-gray-900"
                                        >First name</label
                                    >
                                    <input
                                        id="first_name"
                                        v-model="form.first_name"
                                        type="text"
                                        name="first_name"
                                        autocomplete="given-name"
                                        class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <div>
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="last_name"
                                    name="Last name"
                                    rules="required"
                                >
                                    <label
                                        for="last_name"
                                        class="block text-sm font-medium text-gray-900"
                                        >Last name</label
                                    >
                                    <input
                                        id="last_name"
                                        v-model="form.last_name"
                                        type="text"
                                        name="last_name"
                                        autocomplete="family-name"
                                        class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <div class="sm:col-span-2">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="email"
                                    name="Email"
                                    rules="required|email"
                                >
                                    <label
                                        for="email"
                                        class="block text-sm font-medium text-gray-900"
                                        >Email</label
                                    >
                                    <input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        name="email"
                                        autocomplete="email"
                                        class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <div class="sm:col-span-2">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="phone"
                                    name="Phone"
                                    rules="required"
                                >
                                    <label
                                        for="phone"
                                        class="block text-sm font-medium text-gray-900"
                                        >Phone</label
                                    >
                                    <input
                                        id="phone"
                                        v-model="form.phone"
                                        v-mask="'(###) ###-####'"
                                        type="text"
                                        name="phone"
                                        autocomplete="tel"
                                        class="block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <div class="sm:col-span-2">
                                <ValidationProvider
                                    v-slot="{ errors }"
                                    vid="resume"
                                    name="Resume"
                                >
                                    <label
                                        for="resume"
                                        class="block text-sm font-medium text-gray-900"
                                        >Resume Upload</label
                                    >
                                    <ResumeUpload
                                        :reset-filepond="resetFilepond"
                                        @uploaded="fileUploaded"
                                        @deleted="resumeKey = null"
                                        @filepondReset="resetFilepond = false"
                                    />
                                    <span class="errors">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>

                            <transition name="fade" mode="out-in">
                                <div
                                    v-if="submittedSuccessfully"
                                    class="sm:col-span-2 rounded-md bg-green-50 p-4"
                                >
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <IconCheckCircle
                                                class="h-5 w-5 text-green-400"
                                            />
                                        </div>
                                        <div class="ml-3">
                                            <h3
                                                class="text-sm font-medium text-green-800"
                                            >
                                                Resume submitted
                                            </h3>
                                            <div
                                                class="mt-2 text-sm text-green-700"
                                            >
                                                <p>
                                                    Your resume has been
                                                    successfully submitted and
                                                    we will be in contact.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>

                            <div class="sm:col-span-2">
                                <button
                                    type="submit"
                                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 transition ease-in duration-300"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import ResumeUpload from '@/components/Careers/ResumeUpload'
import IconCheckCircle from '@/assets/svg/icons/check-circle.svg?inline'

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
        ResumeUpload,
        IconCheckCircle,
    },
    props: {
        jobId: {
            type: String,
            default: '',
        },
        careers: {
            type: Array,
            default: () => {
                return []
            },
        },
    },
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                job: this.jobId,
            },
            resumeKey: null,
            submittedSuccessfully: false,
            resetFilepond: false,
        }
    },
    computed: {
        currentJob() {
            return this.form.job && this.form.job !== ''
                ? this.careers.find(
                      (item) => item.id.toString() === this.form.job.toString()
                  )
                : null
        },
    },
    watch: {
        jobId(job) {
            this.form.job = job
        },
    },
    methods: {
        onSubmit() {
            if (this.resumeKey === null) {
                this.$refs.form.setErrors({
                    resume: ['You must upload a resume.'],
                })
            } else {
                this.$axios
                    .post('/p/v1/resumes', {
                        first_name: this.form.first_name,
                        last_name: this.form.last_name,
                        email: this.form.email,
                        phone: this.form.phone,
                        job_name: this.currentJob.name,
                        storyblok_career_id: this.form.job,
                        file_key: this.resumeKey,
                    })
                    .then(() => {
                        this.submittedSuccessfully = true

                        setTimeout(() => {
                            this.submittedSuccessfully = false
                            this.resetForm()
                            this.$refs.form.reset()
                            this.resetFilepond = true
                        }, 3500)

                        window._pxam.push({
                            type: 'event',
                            eventType: 'submit',
                            eventSource: 'lead',
                        })
                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.$refs.form.setErrors(err.response.data.errors)
                        } else {
                            alert(
                                'An application error has occured, please try submitting again.'
                            )
                        }
                    })
            }
        },
        fileUploaded(serverId) {
            this.resumeKey = serverId
        },
        resetForm() {
            this.form = {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                job: '',
            }

            this.resumeKey = null
        },
    },
}
</script>
