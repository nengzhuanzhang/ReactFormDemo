import { Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicLayout from "./components/BasicLayout";
import { blue } from "@mui/material/colors";
import FormDemo from "./pages/formikForm";
import ReactHookFormDemo from "./pages/reactHookForm";
import { HistoryRouter, history } from "./utils/history";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HistoryRouter history={history}>
        <BasicLayout>
          <Routes>
            <Route path="/" element={<FormDemo />} />
            <Route index path="/formik" element={<FormDemo />} />
            <Route path="/reactHookForm" element={<ReactHookFormDemo />} />
          </Routes>
        </BasicLayout>
      </HistoryRouter>
    </ThemeProvider>
  );
};

export default App;
