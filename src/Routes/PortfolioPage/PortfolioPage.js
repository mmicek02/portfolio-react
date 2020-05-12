// import React, { Component } from 'react';
// import Portfolio from '../../Components/Portfolio/Portfolio'
// import PortfolioContext from '../../Context/PortfolioContext'

// class PortfolioPage extends Component() {
//     static contextType = PortfolioContext;

//     renderProjects() {
//         const { projects = [] } = this.context 
//         return projects.map(project => 
//             <Portfolio
//                 key={project.id}
//                 project={project} />
//             )
//     }
//     render() {
//         const { error } = this.context
//         return (
//             <div>
//                 {error
//                     ? <p className='red'>There was an error, please try again later</p>
//                     : this.renderProjects()}
//             </div>
//         )
//     }
// }

// export default PortfolioPage
