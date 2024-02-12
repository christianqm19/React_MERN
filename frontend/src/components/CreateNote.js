import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }

    componentDidMount = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ 
            users: res.data.map(user => user.username),
            userSelected: res.data[0].username 
        });

        /** Validamos el parametro ID */
        if(this.props && this.props.params){
            const idNote = this.props.params.id;
            if(idNote){
                const res = await axios.get('http://localhost:4000/api/notes/' + idNote);
                this.setState({
                    title: res.data.title,
                    content: res.data.content,
                    userSelected: res.data.author,
                    date: new Date(res.data.date),
                    editing: true,
                    _id: this.props.params.id,
                });
            }
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        };
        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote);
        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/';
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date =>{
        this.setState({date});
    }

    render() {
        return (
            <div className='row'>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h3>Crear Nota</h3>

                        {/** SELECT USER */}
                        <div className="form-group">
                            <select className="form-control" name="userSelected" onChange={this.onInputChange} value={this.state.userSelected}>
                                {
                                    this.state.users.map(user =>
                                        <option key={user} value={user}>
                                            {user}
                                        </option>)
                                }
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Titulo" name="title" value={this.state.title} onChange={this.onInputChange} required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="content" placeholder="Contenido" value={this.state.content} onChange={this.onInputChange} required></textarea>
                        </div>
                        <div className="form-group">
                            <DatePicker className="form-control" name="date" selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>

                        <form onSubmit={this.onSubmit}>
                            <button type="submit" className="btn btn-primary">
                                Guardar Nota
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
