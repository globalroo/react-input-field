import * as React from "react";
import PropTypes from "prop-types";
import { assignStyles } from "src/utils/assign-styles";
import {
	BORDER_WIDTH,
	BUTTON_WIDTH,
	INPUT_LEFT_OFFSET,
	styles
} from "src/search-input/styles/styles";

import { Hoverable } from "src/search-input/hoverable-component";
import { ClearButton } from "src/search-input/clear-button";

export class SearchInput extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = null;
		this.borderRadius = Math.floor(this.props.height / 2);
		this.inputWidth =
			this.props.width - BORDER_WIDTH * 2 - BUTTON_WIDTH - INPUT_LEFT_OFFSET;
		this.state = {
			content: "",
			showButton: false
		};
	}

	setInputRef = node => (this.inputRef = node);
	setFocus = () => this.inputRef.focus();

	clearText = () => {
		const content = "";
		this.inputRef.value = content;
		this.setState({ content, showButton: false });
	};

	onChangeText = event => {
		const content = event.target.value;
		const showButton = content && content.length > 0 ? true : false;
		this.setState({ content, showButton });
	};

	componentDidMount() {
		this.props.whenAvailable(this.inputRef);
	}

	render() {
		return (
			<div
				onClick={this.setFocus}
				style={assignStyles([
					{
						width: this.props.width,
						height: this.props.height,
						borderRadius: this.borderRadius
					},
					styles.componentContainer
				])}
			>
				<input
					type="text"
					style={assignStyles([
						styles.inputStyles,
						{
							marginLeft: INPUT_LEFT_OFFSET,
							width: this.inputWidth
						}
					])}
					placeholder={this.props.placeholder}
					onChange={this.onChangeText}
					ref={node => (this.inputRef = node)}
				/>
				<Hoverable>
					<ClearButton
						visible={this.state.showButton}
						onClick={this.clearText} /*hovered injected from Hoverable*/
					/>
				</Hoverable>
			</div>
		);
	}
}

SearchInput.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	placeholder: PropTypes.string,
	whenAvailable: PropTypes.func
};
