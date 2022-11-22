import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { TimerComponent } from "./Timer";
const waitForExpect = require("wait-for-expect");

it("CheckboxWithLabel changes the text after click", async () => {
  render(<TimerComponent />);

  const pomo = await screen.findByTestId("pomo");
  const timer = await screen.findByTestId("timer");

  fireEvent.click(pomo);
  act(async () => {
    await waitForExpect(() => {
      expect(timer.innerHTML).toEqual("24:59");
    });
    await new Promise((r) => setTimeout(r, 1000));
    expect(timer.innerHTML).toEqual("24:58");
  });
});
