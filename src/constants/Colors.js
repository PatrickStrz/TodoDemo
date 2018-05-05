var Color = require('color')
const background = '#292D3E'
const main = '#7E57C2'

export default {
  background,
  backgroundDark: Color(background)
    .darken(0.25)
    .toString(),
  outline: Color(background)
    .lighten(0.5)
    .toString(),
  main,
  success: '#4ee097',
  text: '#fff'
}
