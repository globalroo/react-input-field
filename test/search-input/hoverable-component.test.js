import React from "react";
import { Hoverable } from "src/search-input/hoverable-component";

describe("Never make export the same name but with capital letter as the filename!! OMG Tests", () => {
	test("Add/ remove eventHandlers work as expected", () => {
		const addSpy = jest.fn();
		const removeSpy = jest.fn();
		const fakeNode = {
			addEventListener: addSpy,
			removeEventListener: removeSpy
		};
		const mockChildren = () => <div> TEST </div>;
		let component = new Hoverable({ children: mockChildren });
		component.setRef(fakeNode);
		component.componentDidMount();
		expect(addSpy).toHaveBeenCalledTimes(2);
		component.componentWillUnmount();
	});
	test("Trigger a render", () => {
		const mockChildren = () => <div> TEST </div>;
		let component = new Hoverable({ children: mockChildren });
		component.render();
		expect(component).toMatchSnapshot();
	});
	test("handleMouseEnter", () => {
		const mockChildren = () => <div> TEST </div>;
		let component = new Hoverable({ children: mockChildren });
		const spy = jest.fn();
		component.setState = spy;
		component.handleMouseEnter();
		expect(spy).toHaveBeenCalledWith({ hovered: true });
	});
	test("handleMouseLeave", () => {
		const mockChildren = () => <div> TEST </div>;
		let component = new Hoverable({ children: mockChildren });
		const spy = jest.fn();
		component.setState = spy;
		component.handleMouseLeave();
		expect(spy).toHaveBeenCalledWith({ hovered: false });
	});
});
