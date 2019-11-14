import React, { Component } from 'react';

class Actors extends Component {
    state = {
        actors: [],
        value: ''
    };

    setTextInputRef = element => {
        this.textInput = element;
    };

    componentDidMount() {
        this.getActorsList();
    };

    getActorsList() {
        fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => {
                this.setState({ actors: data.results })
            })
            .catch(error => console.error(error))

    };

    deleteActors = (index) => {
        this.setState({
            actors: [
                ...this.state.actors.slice(0, index),
                ...this.state.actors.slice(index + 1)
            ]
        });
    };


    addActors = () => {
        this.setState({
            actors: this.state.actors.concat({
                'name': this.textInput.value
            })
        });
        this.textInput.value = ''
    };

    renderActor = (actor, index) => {
        return (
            <li key={index}>
                <span>{actor.name}</span>
                <button onClick={() => this.deleteActors(index)}>
                    Delete
                </button>
            </li>
        );
    };

    renderList = () => {
        const { actors } = this.state;
        return actors.map(this.renderActor);
    };

    render() {

        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
                <div>
                    <input type='text' ref={this.setTextInputRef} placeholder='name' />
                    <button onClick={this.addActors}>
                        Add
                    </button>
                </div>
            </div>
        )
    };
};


export default Actors;
