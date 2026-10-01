import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "@/components/layout/navbar";

beforeAll(() => {
  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserverMock,
  });
});

describe("mobile navigation", () => {
  it("opens menu when hamburger is clicked", () => {
    render(<Navbar />);

    const toggle = screen.getByLabelText(/open navigation menu/i);
    fireEvent.click(toggle);

    expect(screen.getByRole("button", { name: /^features$/i })).toBeTruthy();
    // Trial CTA lives in the drawer on phones (header CTA is lg+)
    expect(screen.getAllByRole("link", { name: /start free trial/i }).length).toBeGreaterThan(0);
  });

  it("keeps Features and Solutions collapsed until tapped", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByLabelText(/open navigation menu/i));

    const featuresToggle = screen.getByRole("button", { name: /^features$/i });
    const solutionsToggle = screen.getByRole("button", { name: /^solutions$/i });

    expect(featuresToggle.getAttribute("aria-expanded")).toBe("false");
    expect(solutionsToggle.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("link", { name: /job cards/i })).toBeNull();

    fireEvent.click(featuresToggle);
    expect(featuresToggle.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("link", { name: /job cards/i })).toBeTruthy();
    expect(solutionsToggle.getAttribute("aria-expanded")).toBe("false");
  });
});
