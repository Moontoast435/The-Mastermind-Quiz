import { default as LeaderBoard } from ".";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import { MemoryRouter as Router } from "react-router-dom";
import jestConfig from "../../../../server/tests/jest.config";


// const fetchMock = require("jest-fetch-mock");
// fetchMock.enableMocks();
describe("LeaderBoard", () => {
  let getResultMock;

  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <LeaderBoard getResult={getResultMock} />
        </Provider>
      </Router>
    );
  });


  test("it renders the title", () => {
    const heading = screen.getByRole("leaderboard-display");
    expect(heading).toBeInTheDocument();
  });

  test("it renders the heading with role leaderboard-heading", () => {
    const heading = screen.getByRole("leaderboard-heading");
    expect(heading.textContent).toContain("Hall Of Fame");
  });

  test("it renders a button with ariaLabel leaderboard-back-button", () => {
    const button = screen.getByLabelText("leaderboard-back-button");
    expect(button).toBeInTheDocument();
  });

  test("it renders a div with role leaderboard-container", () => {
    const role = screen.getByRole("leaderboard-container");
    expect(role).toBeInTheDocument();
  });
});
