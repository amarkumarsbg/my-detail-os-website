import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "@/features/auth/login-form";
import * as authService from "@/services/auth";

jest.mock("@/services/auth");

describe("login form", () => {
  it("shows api error states", async () => {
    jest.spyOn(authService, "loginPublic").mockRejectedValueOnce(new Error("Network error"));

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "a@b.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "secret" } });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });
});
