import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test('is "nice to meet you" in screen', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //nothing

    //Assert
    const greetingElement = screen.getByText("nice to meet you");
    expect(greetingElement).toBeInTheDocument();
  });

  test('render "changed" on screen after button click', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const greetingElement = screen.getByText("changed");
    expect(greetingElement).toBeInTheDocument();
  });

  test('"nice to meet you" will not render on screen after button click', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const greetingElement = screen.queryByText("nice to meet you");
    expect(greetingElement).toBeNull();
  });
});
