import { useState, useEffect } from 'react'

import { ProjectType } from '../types/ProjectType'

export function useProjects(url: string): [ProjectType[], boolean, string | null] {
  if (url == "")
    [[], false, true]

  const [dados, setDados] = useState<ProjectType[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true)
  const [erro, setErro] = useState<string | null>(null)

  // useEffect(() => {
  //   const fetchDados = async () => {
  //     try {
  //       const response = await fetch(url)
  //       if (!response.ok) throw new Error('Erro ao buscar dados')
  //       const data = await response.json()
  //       setDados(data)
  //     } catch (error: any) {
  //       setErro(error.message)
  //     } finally {
  //       setCarregando(false)
  //     }
  //   };
  //
  //   fetchDados()
  // }, [url])
  //
  // return [dados, carregando, erro]
  const projects = [
    {
      "id": "123",
      "title": "projeto mineconha",
      "subtitle": "subtitle",
      "imgs": "/blocks.webp,/blocks.webp,/blocks.webp,/blocks.webp",
      "description": "descriptions",
      "category": "",
      "mcpack": "1fVA1dA-py49y_dcAuOeiGGPbN9m-me3O",
      "datetimer": "2024-11-16T19:19:10.615Z'",
    }
  ]

  return [
    projects.map(p => ({
      ...p,
      imgs: p.imgs.split(",").filter(f => f)
    })),
    false,
    null
  ]
}

