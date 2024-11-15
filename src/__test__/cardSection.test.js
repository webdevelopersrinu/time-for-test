import CardSection from "../components/CardSection";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockData from "./../mock/restorentData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

describe("shoud test body", () => {
  it("should change input text to burger load pnly one card", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <CardSection />
        </BrowserRouter>
      )
    );

    const searchInput = screen.getByTestId("searchInput");
    const resCardBeforChenge = screen.getAllByTestId("res-card");
    const searchBtn = screen.getByTestId("searchBtn");
    expect(resCardBeforChenge.length).toBe(20);
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);
    const resCard = screen.getAllByTestId("res-card");
    expect(resCard.length).toBe(1);
  });
});
