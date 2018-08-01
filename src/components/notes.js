import React from 'react'
import { connect } from 'react-redux'
import { addDataAction } from '../logic'

class Notes extends React.Component {
	constructor(props){
		super(props)
		if(this.props.content) {
			this.state = {
				tag: this.props.content.tag,
				des: this.props.content.des
			}
		} else {
			this.state = {
				tag : '',
				des : ''
			}
		}
	}

	handleChange(key, value) {
		this.setState({
			[key]: value
		})
	}
  handleSubmit(e, mode) {
		e.preventDefault()
		if(this.state.tag || this.state.des){

			if(mode === 'add'){
				this.props.addDataAction({
					tag: this.state.tag,
					des: this.state.des
				})
				this.setState({
					tag: '',
					des: ''
				})
				this.props.visibilityHandler()
			}
			
			else if (mode === 'edit'){
				this.props.editHandler({
					tag: this.state.tag,
					des: this.state.des
				})
			}
		} else {
			alert('Please fill either Heading or Description.')
		}
	}
	renderEditMode() {
		return <div className='notes'>
								<i onClick={() => this.props.editEnabler(this.props.index)} className='glyphicon glyphicon-remove' />
								<form onSubmit={e => this.handleSubmit(e, 'edit')}>
									<input type='text' className='form-control tag-input' onChange={e => this.handleChange('tag', e.target.value)} value={this.state.tag} placeholder='Heading' />
									<textarea rows='5' className='form-control des-input' onChange={e => this.handleChange('des', e.target.value)} value={this.state.des} placeholder='Description' />
									<input type='submit' className='btn btn-success button' value='Submit' />
								</form>
							</div>
	}

	render() {
		const { content } = this.props
		if(content) {
			if(this.props.editNote === this.props.index) {
				return this.renderEditMode()
			}
			return  (<div className='notes'>
								<i onClick={() => this.props.editEnabler()} className='glyphicon glyphicon-pencil' />
								<i onClick={() => this.props.deleteHandler()} className='glyphicon glyphicon-trash' />
								<h4><strong>{content.tag}</strong></h4>
								<p>{content.des}</p>
							</div>)
		}
		return  (<div className='notes'>
							<i onClick={() => this.props.visibilityHandler()} className='glyphicon glyphicon-remove' />
							<form onSubmit={e => this.handleSubmit(e, 'add')}>
								<input type='text' className='form-control tag-input' onChange={e => this.handleChange('tag', e.target.value)} value={this.state.tag} placeholder='Heading' />
								<textarea rows='5' className='form-control des-input' onChange={e => this.handleChange('des', e.target.value)} value={this.state.des} placeholder='Description' />
								<input type='submit' className='btn btn-success button' value='Add' />
							</form>
						</div>)
	}
}

export default connect(null,{addDataAction})(Notes)