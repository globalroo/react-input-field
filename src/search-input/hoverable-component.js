import * as React from "react";
import PropTypes from "prop-types";

/*
** Adds mouse in / out state indicator to any child components
** contained within.
*/
export class Hoverable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hovered: false
		};
	}
	setRef = node => (this.ref = node);
	handleMouseEnter = () => {
		this.setState({
			hovered: true
		});
	};
	handleMouseLeave = () => {
		this.setState({
			hovered: false
		});
	};
	componentDidMount() {
		this.mouseEnterListener = this.ref.addEventListener(
			"mouseenter",
			this.handleMouseEnter
		);
		this.mouseLeaveListener = this.ref.addEventListener(
			"mouseleave",
			this.handleMouseLeave
		);
	}
	componentWillUnmount() {
		this.ref.removeEventListener("mouseenter", this.mouseEnterListener);
		this.ref.removeEventListener("mouseleave", this.mouseLeaveListener);
	}
	render() {
		return (
			<div ref={this.setRef}>
				{React.cloneElement(this.props.children, this.state)}
			</div>
		);
	}
}

Hoverable.propTypes = {
	children: PropTypes.element.isRequired
};
