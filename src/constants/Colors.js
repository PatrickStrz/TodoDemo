var Color = require('color')
const tintColor = '#2f95dc'
const background = '#292D3E'
export default {
  background,
  backgroundDark: Color(background)
    .darken(0.25)
    .toString(),
  outline: Color(background)
    .lighten(0.5)
    .toString(),
  main: '#7E57C2',
  success: '#4ee097',
  secondary: '#89D9ED',
  text: '#fff'
}
