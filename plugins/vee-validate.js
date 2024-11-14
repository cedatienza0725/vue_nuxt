import { extend, validate } from 'vee-validate'
import {
    required,
    alpha,
    email,
    length,
    digits,
    confirmed,
} from 'vee-validate/dist/rules'

extend('required', {
    ...required,
    message: 'This field is required',
})

extend('alpha', {
    ...alpha,
    message: 'This field must only contain alphabetic characters',
})

extend('email', {
    ...email,
    message: 'A valid email is required',
})

extend('length', {
    ...length,
    message: 'Please enter the required length',
})

extend('digits', {
    ...digits,
    message: 'Please enter digits',
})

extend('confirmed', {
    ...confirmed,
})

const phoneOrEmailRule = {
    getMessage(field, args) {
        return `The ${field} must be either a valid phone number or e-mail`
    },
    validate(value, args) {
        // Custom regex for a phone number
        const MOBILEREG = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/

        // Check for either of these to return true
        return validate(value, 'email') || MOBILEREG.test(value)
    },
}

extend('phoneOrEmail', {
    ...phoneOrEmailRule,
})
