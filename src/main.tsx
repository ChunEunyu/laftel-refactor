import React from 'react'
import { QueryClientProvider, QueryClient } from "react-query";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { 
  Auth,
  Daily,
  Finder,
  Home,
  Membership,
  Themes, 
} from "./pages";
import '@/styles/globalStyle.css';
import Root from "./Root";

const queryClient = new QueryClient(); 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/finder" element={<Finder />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/themes" element={<Themes />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
