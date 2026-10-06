import { Component, type ReactNode } from 'react'
import { Button } from './ui/Button'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch() {
    return
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-site py-24 text-center">
          <h1 className="text-2xl font-extrabold text-navy">Something went wrong.</h1>
          <p className="mt-2 text-sm text-muted">Please try again.</p>
          <Button className="mt-6" onClick={() => window.location.assign('/')}>
            Retry
          </Button>
        </div>
      )
    }
    return this.props.children
  }
}
