import {Component} from 'react'
import Loader from '../Loader'
import './index.css'

class About extends Component {
  state = {loading: true, faqs: []}

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    this.setState({loading: true})
    try {
      const resp = await fetch('https://apis.ccbp.in/covid19-faqs')
      const json = await resp.json()
      const faqs = json.faq || []
      this.setState({faqs, loading: false})
    } catch {
      this.setState({faqs: [], loading: false})
    }
  }

  render() {
    const {loading, faqs} = this.state
    if (loading) return <Loader testid="aboutRouteLoader" />

    return (
      <div className="about-page">
        <ul testid="faqsUnorderedList" className="faqs-list">
          {faqs.map((f, idx) => (
            <li key={f.qno || idx} className="faq-item">
              <p className="q">{f.question}</p>
              <p className="a">{f.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default About
