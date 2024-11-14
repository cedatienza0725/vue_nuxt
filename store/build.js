export const getDefaultState = () => ({
    buildData: null,
    currentOption: null,
    vehicleOptions: [
        { field: 'lift-kits', text: 'Lift Kit' },
        { field: 'wheels', text: 'Wheels' },
        { field: 'tires', text: 'Tires' },
    ],
    selectedOptions: ['lift-kits', 'wheels', 'tires'],
    completedOptions: {
        'lift-kits': null,
        wheels: null,
        tires: null,
        vehicle: null,
    },
    firstOption: null,
    brands: null,
    recentBuilds: [],
    location: null,
})

export const state = () => getDefaultState()

export const mutations = {
    SET_BUILD_DATA(state, buildData) {
        state.buildData = buildData
    },
    TOGGLE_SELECTED_OPTION(state, option) {
        const index = state.selectedOptions.indexOf(option)

        if (index > -1) {
            state.selectedOptions.splice(index, 1)
        } else {
            state.selectedOptions.push(option)
        }
    },
    SET_CURRENT_OPTION(state, option) {
        state.currentOption = option
    },
    UPDATE_COMPLETED_OPTION(state, { option, value }) {
        state.completedOptions[option] = value
    },
    RESET_STATE(state) {
        Object.assign(state, getDefaultState())
    },
    SET_FIRST_OPTION(state, option) {
        state.firstOption = option
    },
    SET_BRANDS(state, brands) {
        state.brands = brands
    },
    SET_RECENT_BUILDS(state, builds) {
        state.recentBuilds = builds
    },
    SET_LOCATION(state, location) {
        state.location = location
    },
}

export const actions = {
    setBuildData({ commit }, buildData) {
        commit('SET_BUILD_DATA', buildData)
    },
    toggleOption({ commit }, option) {
        commit('TOGGLE_SELECTED_OPTION', option)
    },
    setCurrentOption({ commit }, option) {
        commit('SET_CURRENT_OPTION', option)
    },
    updateCompletedOption({ commit, state }, optionObj) {
        if (state.buildData) {
            if (optionObj.option === 'wheels') {
                const wheels = Array.isArray(state.completedOptions.wheels)
                    ? [...state.completedOptions.wheels]
                    : []
                const index = wheels.indexOf(optionObj.value)

                if (index > -1) {
                    wheels.splice(index, 1)
                } else {
                    // remove first item if five reached
                    if (wheels.length === 5) {
                        wheels.splice(0, 1)
                    }

                    wheels.push(optionObj.value)
                }

                optionObj.value = wheels.length > 0 ? wheels : null
            }

            commit('UPDATE_COMPLETED_OPTION', optionObj)

            // update database
            this.$axios.$get('/api/sanctum/csrf-cookie').then(() => {
                this.$axios
                    .patch(`/p/v1/leads/${state.buildData.build.id}`, {
                        meta: {
                            ...state.completedOptions,
                            ...{
                                location: state.location ?? undefined,
                            },
                        },
                        step_updated: true,
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            })
        }
    },
    resetState({ commit }) {
        commit('RESET_STATE')
    },
    setFirstOption({ commit }, option) {
        commit('SET_FIRST_OPTION', option)
    },
    setLocation({ commit }, location) {
        commit('SET_LOCATION', location)
    },
    async getBrands({ commit }, version) {
        const brands = await this.$storyapi.get('cdn/stories/', {
            starts_with: 'brands',
            is_startpage: 0,
            version,
        })

        commit('SET_BRANDS', brands.data?.stories)
    },
    getRecentBuilds({ commit }) {
        this.$axios
            .$get('/p/v1/builds', {
                params: { image_exists: 1, limit: 3 },
            })
            .then((res) => {
                commit('SET_RECENT_BUILDS', res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    },
}
