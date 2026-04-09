import type { MarkdownRenderer } from 'vitepress'

export function zoomablePlugin(md: MarkdownRenderer) {
  const defaultRender = md.renderer.rules.image || ((tokens, idx, options, env, self) => {
    return self.renderToken(tokens, idx, options)
  })

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self)

    const srcIndex = token.attrIndex('src')
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self)

    const src = token.attrs[srcIndex][1]
    const alt = token.content || ''

    // First render the image normally so VitePress can process it
    const originalImage = defaultRender(tokens, idx, options, env, self)
    
    // Then wrap it with our ZoomableImage component
    return `<ZoomableImage src="${src}" alt="${alt}">${originalImage}</ZoomableImage>`
  }
} 