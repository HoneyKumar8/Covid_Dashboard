import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="notfound">
    <img
      alt="not-found-pic"
      src="https://res.cloudinary.com/dyx4ljni5/image/upload/v1764761652/not-found-pic_p4zzey.png"
    />
    <h1>PAGE NOT FOUND</h1>
    <p>we are sorry, the page you requested could not be found</p>
    <Link to="/">
      <button className="nfbtn" type="button">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
