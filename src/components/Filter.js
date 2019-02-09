import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(sortedBy) {
        return (e) => {
            e.preventDefault();
            const { sorter } = this.props;
            sorter(e.target.value);
        };
    }

    render() {
        const { sortedBy } = this.props;
        const nameChecked = (sortedBy === "name");
        return (
            <div className="checkboxes">
                <Checkbox checked={nameChecked} onClick={this.handleChange('name')} value="name" />
                <label>Name</label>
                <Checkbox checked={!nameChecked} onClick={this.handleChange('age')} value="age" />
                <label>Age</label>
            </div>
        );
    }
}

export default Filter;