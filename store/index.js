'use strict'

export const state = () => ({
    csrfToken: null,
    ip: null,
    routeMeta: null,
    breadcrumbs: [],
    meta: null,
    contactNumber: '+18885413327',
    contactEmail: 'contact@theliftshop.com',
})

export const mutations = {
    SET_CSRF_TOKEN(state, csrfToken) {
        state.csrfToken = csrfToken
    },
    UPDATE_ROUTE_META(state, routeMeta) {
        state.routeMeta = routeMeta
    },
    UPDATE_IP(state, ip) {
        state.ip = ip
    },
    SET_BREADCRUMBS(state, breadcrumbs) {
        state.breadcrumbs = breadcrumbs
    },
    SET_META(state, meta) {
        state.meta = meta
    },
    SET_CONTACT_NUMBER(state, phoneNumber) {
        state.contactNumber = phoneNumber
    },
}

export const getters = {
    IP(state) {
        return state.ip
    },
    ContactNumber(state) {
        return state.contactNumber
    },
    ContactNumberPretty(state) {
        if (!state.contactNumber) {
            return state.contactNumber
        }

        return state.contactNumber
            .replace('+1', '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    },
    ContactEmail(state) {
        return state.contactEmail
    },
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        // const version = route.query._storyblok || isDev ? 'draft' : 'published'
        // const language = app.i18n.locale

        // // assign settings
        // await dispatch('global/loadSettings', {
        //     version,
        //     language,
        // })

        // if (req.cookies) {
        //     commit('SET_CSRF_TOKEN', req.csrfToken())
        // }

        // get the IP
        const ip = (
            (req.header && req.header('x-forwarded-for')) ||
            req.connection.remoteAddress
        ).split(',')[0]

        commit('UPDATE_IP', ip)
    },
    updateRouteMeta(context, routeMeta) {
        context.commit('UPDATE_ROUTE_META', routeMeta)
    },
    setBreadcrumbs({ commit }, breadcrumbs) {
        commit('SET_BREADCRUMBS', breadcrumbs)
    },
    resetBreadcrumbs({ commit }) {
        commit('SET_BREADCRUMBS', [])
    },
    setMeta(context, meta) {
        context.commit('SET_META', meta)
    },
    resetMeta(context) {
        context.commit('SET_META', null)
    },
    setContactNumber(context, phoneNumber) {
        context.commit('SET_CONTACT_NUMBER', phoneNumber)
    },
}
