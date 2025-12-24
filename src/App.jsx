import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import Project from "./pages/Project";
import Task from "./pages/Task";
import Team from "./pages/Team";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { LoginFormProvider } from "./contexts/LoginFormContext";
import { SignupFormProvider } from "./contexts/SignupFormContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { ProjectFormProvider } from "./contexts/ProjectFormContext";
import { TaskFormProvider } from "./contexts/TaskFormContext";
import { FiltersProvider } from "./contexts/FiltersContext";
import { TeamFormProvider } from "./contexts/TeamFormContext";
import { ProjectProvider } from "./contexts/ProjectContext";
import { TaskProvider } from "./contexts/TaskContext";
import { TeamProvider } from "./contexts/TeamContext";
import { OwnersProvider } from "./contexts/OwnersContext";
import { TagsProvider } from "./contexts/TagsContext";
import { TeamUpdateFormProvider } from "./contexts/TeamUpdateFormContext";
import { ReportProvider } from "./contexts/ReportContext";
import { AuthProvider } from "./contexts/AuthContext.";
import { UserUpdateFormProvider } from "./contexts/UserUpdateForm";
import { TaskUpdateProvider } from "./contexts/TaskUpdateFormContext";
import { DeleteAlertProvider } from "./contexts/DeleteAlertContext";

function App() {
  return (
    <BrowserRouter>
      <DeleteAlertProvider>
        <ReportProvider>
          <FiltersProvider>
            <TagsProvider>
              <OwnersProvider>
                <TeamProvider>
                  <ProjectProvider>
                    <TaskProvider>
                      <TaskUpdateProvider>
                        <TeamFormProvider>
                          <TaskFormProvider>
                            <TeamUpdateFormProvider>
                              <ProjectFormProvider>
                                <SidebarProvider>
                                  <SignupFormProvider>
                                    <LoginFormProvider>
                                      <AuthProvider>
                                        <UserUpdateFormProvider>
                                          <Routes>
                                            <Route
                                              path="/"
                                              element={
                                                <ProtectedRoute>
                                                  <Home />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/login"
                                              element={<Login />}
                                            />
                                            <Route
                                              path="/signup"
                                              element={<Signup />}
                                            />
                                            <Route
                                              path="/projects"
                                              element={
                                                <ProtectedRoute>
                                                  <Projects />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/projects/:projectId"
                                              element={
                                                <ProtectedRoute>
                                                  <Project />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/tasks"
                                              element={
                                                <ProtectedRoute>
                                                  <Tasks />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/tasks/:taskId"
                                              element={
                                                <ProtectedRoute>
                                                  <Task />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/teams"
                                              element={
                                                <ProtectedRoute>
                                                  <Teams />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/teams/:teamId"
                                              element={
                                                <ProtectedRoute>
                                                  <Team />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/reports"
                                              element={
                                                <ProtectedRoute>
                                                  <Reports />
                                                </ProtectedRoute>
                                              }
                                            />
                                            <Route
                                              path="/settings"
                                              element={
                                                <ProtectedRoute>
                                                  <Settings />
                                                </ProtectedRoute>
                                              }
                                            />
                                          </Routes>
                                        </UserUpdateFormProvider>
                                      </AuthProvider>
                                    </LoginFormProvider>
                                  </SignupFormProvider>
                                </SidebarProvider>
                              </ProjectFormProvider>
                            </TeamUpdateFormProvider>
                          </TaskFormProvider>
                        </TeamFormProvider>
                      </TaskUpdateProvider>
                    </TaskProvider>
                  </ProjectProvider>
                </TeamProvider>
              </OwnersProvider>
            </TagsProvider>
          </FiltersProvider>
        </ReportProvider>
      </DeleteAlertProvider>
    </BrowserRouter>
  );
}

export default App;
