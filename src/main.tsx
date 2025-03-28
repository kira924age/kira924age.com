import { render } from 'preact'

import { App } from './app.tsx'

const domElement: HTMLElement | null = document.getElementById('app')

if (domElement) {
  render(<App />, domElement)
}
