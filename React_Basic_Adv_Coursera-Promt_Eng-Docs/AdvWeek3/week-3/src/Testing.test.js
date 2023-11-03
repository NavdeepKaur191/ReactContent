import { render, screen } from "@testing-library/react";
import Testing from "./components/Testing";

test("renders a link that points to little lemon webpage", () => {
  render(<Testing />);
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
});

// JEST
