import React from 'react'

class DumbComponent extends React.Component{
	constructor(){
		super()
		this.state= {
			mood: "happy"
		}
	}

	changeMood(){
		if (this.state.mood === "happy"){
			this.setState({
				mood: "sad"
			})
		} else
		this.setState({
			mood: "happy"
		})
	}

	render(){
		return (
			<div onClick={this.changeMood.bind(this)}>
				<h2>{this.state.mood}</h2>
			</div>
		)
	}

}


export default DumbComponent