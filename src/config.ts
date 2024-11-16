type typerProjects = {
  get_all: string
  latest_projects: string
}

type typerDB = {
  projects: typerProjects
}

export const DB: typerDB = {
  projects: {
    get_all: import.meta.env.VITE_APP_PROJECTS_URL || "",
    latest_projects: import.meta.env.VITE_APP_LATEST_PROJECTS_URL || "",
  }
}
