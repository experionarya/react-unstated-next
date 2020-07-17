import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { Employeelist } from './EmployeeList';

export const Home = () => {
    return (
        <Fragment>
            <div className="App">
                <div className="container mx-auto">
                    <Heading />
                    <Employeelist />
                </div>
            </div>
        </Fragment>
    )
}