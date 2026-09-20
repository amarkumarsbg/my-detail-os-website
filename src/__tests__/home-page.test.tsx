import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("home page", () => {
  it("renders headline and ctas", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /run your workshop smarter/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /start free trial/i }).length).toBeGreaterThan(0);
  });
});
