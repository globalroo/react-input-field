import React from "react";
import * as renderer from "react-test-renderer";
import { ClearButton } from "src/search-input/clear-button";

describe("Search Input tests", () => {
	test("Renders the component as expected in hovered state", () => {
		const spy = jest.fn();
		const component = renderer.create(
			<ClearButton visible={true} hovered={true} onClick={spy} width={50} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	test("Renders the component as expected in unhovered state", () => {
		const spy = jest.fn();
		const component = renderer.create(
			<ClearButton visible={true} hovered={false} onClick={spy} width={50} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	test("Renders the component as expected in non-visible state", () => {
		const spy = jest.fn();
		const component = renderer.create(
			<ClearButton visible={false} hovered={false} onClick={spy} width={50} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
// width: PropTypes.number,
// hovered: PropTypes.bool,
// onClick: PropTypes.func,
// visible: PropTypes.bool
