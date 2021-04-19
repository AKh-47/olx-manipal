import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ApolloClientProvider from "./context/ApolloClientContext";
import AuthProvider from "./context/AuthContext";
import SettingsProvider from "./context/SettingsContext";
import BoardProvider from "./context/BoardContext";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SettingsProvider>
          <ApolloClientProvider>
            <BoardProvider>
              <DndProvider backend={HTML5Backend}>
                <App />
              </DndProvider>
            </BoardProvider>
          </ApolloClientProvider>
        </SettingsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
