// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  switchToFalse = () => {
    this.setState(() => ({
      isSubscribed: false,
    }))
  }
  switchToTrue = () => {
    this.setState(() => ({
      isSubscribed: true,
    }))
  }
  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> Welcome </h1>
        <p className="description"> Thank you! Happy Learning </p>
        {isSubscribed ? (
          <button className="subscribe-btn" onClick={this.switchToFalse}>
            Subscribed
          </button>
        ) : (
          <button className="subscribe-btn" onClick={this.switchToTrue}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
