import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders a greeting message", () => {
  render(<App />);
  expect(screen.getByText("Frontend Web App")).toBeInTheDocument();
});

test("renders a description", () => {
  render(<App />);
  expect(
    screen.getByText(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quam saepe explicabo expedita culpa! Possimus praesentium placeat, vero exercitationem natus nisi voluptate nobis dolore iusto cupiditate reiciendis tenetur labore saepe!"
    )
  ).toBeInTheDocument();
});

test("click on get started", async () => {
  render(<App />);
  const button = screen.getByText("Get Started");
  await userEvent.click(button);
  expect(screen.queryByText("Get Started")).not.toBeInTheDocument();
});

test("hover on button shows title", async () => {
  render(<App />);
  const button = screen.getByText("Get Started");
  await userEvent.hover(button);
  expect(button).toHaveAttribute("title", "this is a button");
});
