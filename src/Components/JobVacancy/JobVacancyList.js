import React from 'react';
import JobVacancy from "./JobVacancy";

export default class JobVacancyList extends React.Component {
    
    render() {
        let { data } = this.props;
        return (
            <div>
                <h1>Here are your Job Vacancy</h1>
                {data !== null &&
                data !== undefined &&
                data.length > 0 ?
                    data.map(item => <JobVacancy {...item} key={item.id}/>)
                    :
                    <div>No job vacancy found.</div>
                }
            </div>
        );
    }

}