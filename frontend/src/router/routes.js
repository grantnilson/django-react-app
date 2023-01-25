import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import { Index } from "../pages";
import { indexLoader, showLoader } from "./loaders";
import { CreateAction } from "../router/actions";
import { Show } from "../pages/show";
import { updateAction } from "../router/actions";
import { deleteAction } from "../router/actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/:id" element={<Show />} loader={showLoader} />
        <Route path="/create" action={CreateAction} />
        <Route path="/update/:id" action={updateAction} />
        <Route path="/delete/:id" action={deleteAction} />
      </Route>
    </>
  )
);

export default router;
