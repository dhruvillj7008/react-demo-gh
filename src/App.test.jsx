import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })

  it('renders the counter button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('increments the counter when clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
  })
})
