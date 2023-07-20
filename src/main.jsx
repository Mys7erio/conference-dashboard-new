import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"

import App from "./App.jsx"
import Login from "./Pages/Login.jsx"
import Payment from "./Pages/Payment/Payment.jsx"
import Admin from "./Pages/Admin/AdminContainer.jsx"
import Author from "./Pages/Author/AuthorContainer.jsx"
import Editor from "./Pages/Editor/EditorContainer.jsx"
import Reviewer from "./Pages/Reviewer/ReviewerContainer.jsx"
import SuperAdmin from "./Pages/SuperAdmin/SuperAdminContainer.jsx"
import Coordinator from "./Pages/Coordinator/CoordinatorContainer.jsx"
import AssociateEditor from "./Pages/AssociateEditor/AssociateEditorContainer.jsx"

import Test from "./Pages/Test.jsx"
import "./index.css"
// Creative Tim's Paper Dashboard Styles
import "./assets/scss/paper-dashboard.scss?v=1.3.1";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paper-dashboard" element={<Test />} />


        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/author" element={<Author />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/reviewer" element={<Reviewer />} />
          <Route path="/super-admin" element={<SuperAdmin />} />
          <Route path="/coordinator" element={<Coordinator />} />
          <Route path="/associate-editor" element={<AssociateEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
