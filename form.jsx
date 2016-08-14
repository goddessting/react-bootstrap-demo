import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

export default class Form extends Component {
	render() {
		return <form>
			<FormGroup>
				<ControlLabel>User Name</ControlLabel>
				<FormControl type="text" placeholder="Username"></FormControl>
			</FormGroup>
			<FormGroup>
			  <ControlLabel>Password</ControlLabel>
			  <FormControl type="password" />
			</FormGroup>
			<Checkbox checked onChange={this._onChange.bind(this)}>remember me</Checkbox>
      <Button bsStyle="primary">Submit</Button>
		</form>;
	}

	_onChange() {
		// required, but do nothing here
	}
};