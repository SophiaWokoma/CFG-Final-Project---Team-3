import { render, waitFor, screen } from "@testing-library/react";
import QuotesGenerator from "./QuotesGenerator";
import * as api from "./api";

jest.mock("./api");

describe("QuotesGenerator Component", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should display random quote when api responds", async () => {
    api.getQuotesFromApi.mockResolvedValue({
      quotes: [{ quote: "Life is good" }],
    });
    render(<QuotesGenerator />);
    await waitFor(() => {
      screen.getByText("Life is good");
    });
  });
  it("should display error message when api fails", async () => {
    api.getQuotesFromApi.mockRejectedValue({});
    render(<QuotesGenerator />);
    await waitFor(() => {
      screen.getByText(
        "This feature is currently unavailable, we are working on sorting this out soon. Hold tight!"
      );
    });
  });
});
