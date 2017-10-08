import React from "react";
import * as renderer from "react-test-renderer";
import { SearchInput } from "src/search-input/search-input";

jest.mock("src/search-input/clear-button");
jest.mock("src/search-input/hoverable-component");

describe("Search Input tests", () => {
	test("Renders the component as expected", () => {
		const spy = jest.fn();
		const component = renderer.create(
			<SearchInput
				width={200}
				height={50}
				placeholder={"test"}
				whenAvailable={spy}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test("setInputRef correctly assigns ref", () => {
		const component = new SearchInput({
			width: 200,
			height: 50,
			placeholder: "test",
			whenAvailable: jest.fn()
		});
		const inputRefMock = "test";
		component.setInputRef(inputRefMock);
		expect(inputRefMock).toBe("test");
	});

	test("setInputRef correctly assigns ref", () => {
		const component = new SearchInput({
			width: 200,
			height: 50,
			placeholder: "test",
			whenAvailable: jest.fn()
		});
		const spy = {
			focus: jest.fn()
		};
		const inputRefMock = spy;
		component.setInputRef(inputRefMock);
		component.setFocus();
		expect(spy.focus).toHaveBeenCalledTimes(1);
	});

	test("clearText blanks the input value", () => {
		const component = new SearchInput({
			width: 200,
			height: 50,
			placeholder: "test",
			whenAvailable: jest.fn()
		});
		const mockNode = {
			value: "TEST"
		};
		component.setState = jest.fn();
		component.setInputRef(mockNode);
		expect(mockNode.value).toBe("TEST");
		component.clearText();
		expect(mockNode.value).toBe("");
		expect(component.setState).toHaveBeenCalled();
	});

	test("onChangeText updates State with 0 length string - hides button", () => {
		const component = new SearchInput({
			width: 200,
			height: 50,
			placeholder: "test",
			whenAvailable: jest.fn()
		});
		const mockEvent = {
			target: {
				value: ""
			}
		};
		component.setState = jest.fn();
		component.onChangeText(mockEvent);
		expect(component.setState).toHaveBeenCalledWith({
			content: "",
			showButton: false
		});
	});

	test("onChangeText updates State with 0 length string - hides button", () => {
		const component = new SearchInput({
			width: 200,
			height: 50,
			placeholder: "test",
			whenAvailable: jest.fn()
		});
		const mockEvent = {
			target: {
				value: "TEST"
			}
		};
		component.setState = jest.fn();
		component.onChangeText(mockEvent);
		expect(component.setState).toHaveBeenCalledWith({
			content: "TEST",
			showButton: true
		});
	});
});

// onChangeText = event => {
//   const content = event.target.value;
//   const showButton = content && content.length > 0 ? true : false;
//   this.setState({ content, showButton });
// };
