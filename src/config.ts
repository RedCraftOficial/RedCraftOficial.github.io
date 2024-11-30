type typerProjects = {
  get_all: string
  get_by_id: (id: string) => string
  latest_projects: string
}

type typerDB = {
  projects: typerProjects
}

export const DB: typerDB = {
  projects: {
    get_all: import.meta.env.VITE_APP_PROJECTS_URL || "",
    get_by_id: id => import.meta.env.VITE_APP_PROJECTS_GET_BY_ID_URL + id || "",
    latest_projects: import.meta.env.VITE_APP_LATEST_PROJECTS_URL || "",
  }
}

