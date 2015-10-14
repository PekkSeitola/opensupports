'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import Button           from 'core-components/button';
import Input            from 'core-components/input';
import Widget           from 'core-components/widget';

var DemoPage = React.createClass({

	propTypes: {
		currentUser: React.PropTypes.object.isRequired
	},

	elements: [
		{
			title: 'Primary Button',
			render: (
				<Button type="primary">Sign up</Button>
			)
		},
        {
            title: 'Input',
            render: (
                <Input placeholder="placeholder"/>
            )
        },
        {
            title: 'Input wrapped in a label',
            render: (
                <Input placeholder="placeholder" label="This is a label" />
            )
        },
        {
            title: 'Widget',
            render: (
                <Widget>
                    <h2>Register here!</h2>

                    <Button type="primary">SIGN UP</Button>
                </Widget>
            )
        }
	],

	render() {
		return (
			<DocumentTitle title="Demo Page">
				<section className="home-page">
					{this.renderElements()}
				</section>
			</DocumentTitle>
		);
	},

	renderElements: function () {
		return this.elements.map((element) => {
			return (
				<div className="demo-element">
					<h4>
					{element.title}
					</h4>
					<div class="demo-element--example">
					{element.render}
					</div>
				</div>
			);
		});
	}
});

export default DemoPage;