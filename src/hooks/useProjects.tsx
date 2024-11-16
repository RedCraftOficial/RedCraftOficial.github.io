import { useState, useEffect } from 'react'

import { ProjectType } from '../types/ProjectType'

export function useProjects(url: string): [ProjectType[], boolean, string | null] {
  if (url == "")
    [[], false, true]

  const [dados, setDados] = useState<ProjectType[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Erro ao buscar dados')
        const data = await response.json()
        setDados(data)
      } catch (error: any) {
        setErro(error.message)
      } finally {
        setCarregando(false)
      }
    };

    fetchDados()
  }, [url])

  return [dados, carregando, erro]
}

