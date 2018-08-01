import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { fetchDataAction, deleteDataAction, editDataAction } from './logic'
import Notes from './components/notes'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showInput: false,
      editingNote: false
    }
  }
  componentDidMount() {
    this.props.fetchDataAction()
  }
  toggleForm() {
    if (this.state.showInput) {
      this.setState({
        showInput: false
      })
    } else {
      this.setState({
        showInput: true,
        editingNote: false
      })
    }
  }

  deleteNote(i){
    const body = this.props.Data
    body.splice(i,1)
    this.props.deleteDataAction(body)
  }

  editNote(i, editedData) {
    const body = this.props.Data
    body[i] = editedData
    this.props.editDataAction(body)
    this.setState({
      editingNote: false
    })
  }

  renderNotes() {    
    if(this.props.Data){
      return this.props.Data.map((item, i )=> <Notes deleteHandler={() => this.deleteNote(i)} 
        key={i} 
        index={i}
        content={item} 
        editNote={this.state.editingNote}
        editEnabler={() => this.setState({editingNote: i, showInput: false})}
        editHandler={(editedData) => this.editNote(i, editedData)}
        />)
    }
  }
  render() {
    return (
      <div className='container-fluid main-container'>
        <div className='row wall'>
          <div className='col-sm-12'>
            {this.state.showInput ?
            <Notes visibilityHandler={() => this.toggleForm()} /> : 
            <div className='notes' >
              <div onClick={() => this.toggleForm()} className='add-new-btn'>Add New</div>
            </div> }
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Data: state.fetchData.data
  }
}

export default connect(mapStateToProps, { fetchDataAction, deleteDataAction, editDataAction } )(App);
