import './index.css'

const Loader = ({testid = 'loader'}) => (
  <div testid={testid} className="loader-container">
    <div className="spinner" />
  </div>
)

export default Loader
