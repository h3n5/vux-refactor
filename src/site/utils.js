const styleId = 'vux-refactor-style'
function removeStyle() {
  const style = document.head.querySelector(`#${styleId}`)
  if (style) {
    document.head.removeChild(style)
  }
}

const kebabCase = (s) => {
  const ret = s.replace(/([A-Z])/g, ' $1').trim()
  return ret.split(' ').join('-').toLowerCase()
}

function formatStyleVars(styleVars) {
  return Object.entries(styleVars ?? {}).reduce((styles, [key, value]) => {
    const cssVar = key.startsWith('--') ? key : `--${kebabCase(key)}`
    styles[cssVar] = value
    return styles
  }, Object.create(null))
}

export function StyleProvider(styleVars) {
  if (styleVars == null) {
    removeStyle()
    return
  }

  const styles = formatStyleVars(styleVars ?? {})
  const content = Object.entries(styles).reduce((content, [key, value]) => {
    content += `${key}:${value};`
    return content
  }, `:root {\n`)

  removeStyle()
  insertStyle(`${content}\n}`)
}

function insertStyle(content) {
  const style = document.createElement('style')
  style.id = styleId
  style.innerHTML = content
  document.head.appendChild(style)
}

export const Themes = {
  dark: {
    '--theme-color': '#121212',
    '--cell-label-color': '#fff'
  }
}
