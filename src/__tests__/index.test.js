import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders the page content", () => {
    render(<Home />);

    expect(screen.getByText("Teste.")).toBeInTheDocument();
  });
});
