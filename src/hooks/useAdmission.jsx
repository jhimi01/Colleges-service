import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const useAdmission= ()=>{

    const { user } = useContext(AuthContext)

    const { isLoading, data : admissions = [], refetch } = useQuery({
        queryKey: ['admissions', user?.email],
        queryFn: async () => {
          const response = await fetch(`https://college-servic-server.vercel.app/admissions?email=${user?.email}`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        },
      })
      return { admissions, isLoading, refetch }
}

export default useAdmission;