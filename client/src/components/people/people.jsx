import React, {Component} from 'react';
import './people.css'

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('/people')
    .then(res => res.json())
    .then(people => this.setState({people}, () => console.log('Customer fetched..' , people)));
  }

  render () {
    return (
    <div>
      <h2>People</h2>
      <ul>
        {this.state.people.map(people =>
            <li key={people.id}>{people.name} {people.gender}</li>
          )}
      </ul>
    </div>
    );
  }
}
export default People;
