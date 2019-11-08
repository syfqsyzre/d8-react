import React, {Component} from 'react';
import './App.css';
import JobVacancyList from "./Components/JobVacancy/JobVacancyList";
const LIST_URL = 'http://dataristic.com/d8-react/jsonapi/node/job_vacancy';

class App extends Component {

  constructor() {
    super();
    this.state = { data: null };
    this.loadJobVacancies = this.loadJobVacancies.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  loadJobVacancies() {
    //Fetch Job Vacancies.
    fetch(LIST_URL, {mode:'cors'})
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.updateData(data))
      .catch(err => console.log('Fetching Job Vacancies Failed', err));
  }

  updateData(responseData) {
    this.setState({data: responseData.data});
  }

  componentWillMount() {
    this.loadJobVacancies();
  }

  render() {
    return (
      <div className="App">
        <JobVacancyList
          data={this.state.data}
        />
      </div>
    );
  }
}
export default App;
