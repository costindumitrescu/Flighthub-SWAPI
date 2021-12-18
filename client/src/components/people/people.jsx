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
    fetch('/api/people')
    .then(res => res.json())
    .then(people => this.setState({people}, () => console.log('Customer fetched..' , people)));
  }

  render () {
    return (
    <div>
      <h2>People</h2>
      <ul>
        {this.state.people.map(people =>
            <li key={people.id}>{people.firstName} {people.lastName}</li>
          )}
      </ul>
    </div>
    );
  }
}
export default People;
