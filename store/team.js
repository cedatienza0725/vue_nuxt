export const state = () => ({
    employees: null,
})
export const mutations = {
    SET_EMPLOYEES(state, employees) {
        state.employees = employees
    },
}

export const actions = {
    async getEmployees({ commit }, version) {
        const employees = await this.$storyapi.get('cdn/stories/', {
            starts_with: 'team',
            is_startpage: 0,
            sort_by: 'name',
            version,
        })

        commit('SET_EMPLOYEES', employees.data?.stories)
    },
}
