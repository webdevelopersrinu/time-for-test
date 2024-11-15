import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../utils/reduxStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import RestorentList from "../components/RestorenList";

it("should load restoreant item and card data", async () => {
  await act(async () => {
    return render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestorentList />
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });
  
});
