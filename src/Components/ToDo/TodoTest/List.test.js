import { render, screen, waitFor } from "@testing-library/react";
import TodoList from "../TodoList";
import * as api from "../GetListFromApi";

jest.mock("../GetListFromApi"); //mock api module

describe("List of Todos: ", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render items in the list when api responds", async () => {
    api.getListFromApi.mockResolvedValue({
      data: [
        {
          id: 31,
          attributes: {
            todo_item: "group meeting",
            // done: false,
          },
        },
      ],
    });
    render(<TodoList />);
    await waitFor(() => {
      screen.getByText("group meeting");
    });
  });

  it("should render error message when api fails", async () => {
    api.getListFromApi.mockRejectedValue(new Error("failed"));
    render(<TodoList />);
    await waitFor(() => {
      screen.getByText("failed");
    });
  });
});
