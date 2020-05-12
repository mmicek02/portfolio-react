import React, { Component } from 'react'
export const nullProject = {
    title: {},
    description: [],
    images: {},
}
const PortfolioContext = React.createContext({
    project: nullProject,
    error: null,
    setError: () => {},
    clearError: () => { },
})

export default PortfolioContext

export class PortfolioProvider extends Component {
    state = {
        project: nullProject,
        error: null,
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    
      clearError = () => {
        this.setState({ error: null })
    }
    
      setProject = project => {
        this.setState({ project })
    }

    render() {
        const value = {
            project: this.state.project,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setProject: this.setProject,
        }
        return (
            <PortfolioContext.Provider value={value}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}