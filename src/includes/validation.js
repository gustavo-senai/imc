import { Form as VeeForm, Field as VeeField, defineRule, configure } from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  confirmed,
  regex,
  digits,
  integer
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('confirmed', confirmed)
    defineRule('regex', regex)
    defineRule('digits', digits)
    defineRule('integer', integer)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `O campo ${ctx.field} é obrigatório`,
          min: `O campo ${ctx.field} deve conter no mínimo 7 caracteres`,
          email: `O campo ${ctx.field} deve conter um email valido`,
          confirmed: 'Suas senhas estão diferentes',
          alpha_spaces: `O campo ${ctx.field} deve conter apenas letras e espaços`,
          digits: `O campo ${ctx.field} deve conter exatamente 11 dígitos`,
          integer: `O campo ${ctx.field} deve conter apenas números`
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `O campo ${ctx.field} é inválido`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
