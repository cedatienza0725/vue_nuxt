export const state = () => ({
    brands: null,
})
export const mutations = {
    SET_BRANDS(state, brands) {
        state.brands = brands
    },
}

export const actions = {
    async getBrands({ commit }, version) {
        const brands = await this.$storyapi.get('cdn/stories/', {
            starts_with: 'brands',
            is_startpage: 0,
            sort_by: 'position:asc',
            per_page: 3,
            version,
        })

        commit('SET_BRANDS', brands.data?.stories)
    },
}
