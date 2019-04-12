import React, { Component } from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
export default class Main extends Component {

  state = {
    newBox: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { newBox } = this.state
    const response = await api.post('boxes', {
      title: newBox
    })

    this.props.history.push(`boxes/${response.data._id}`)
  }
  handleInputChange = (e) => {
    const newBox = e.target.value
    this.setState({ newBox })
  }

  render() {
    return (
      <div id="main-container">
        <form action="" onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            placeholder="Create your box..."
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
