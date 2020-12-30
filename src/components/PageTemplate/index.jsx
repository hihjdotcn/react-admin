import MainMenu from '../MainMenu/index.jsx'
import Header from '../Header'
import './index.css'

const PageTemplate = ({ children }) => 
  <div className="page-wrap">
    <Header></Header>
    <div className="main">
      <MainMenu/>
      {children}
    </div>
  </div>

export default PageTemplate