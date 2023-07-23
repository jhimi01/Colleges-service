import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const useAdmission= ()=>{

    const { user } = useContext(AuthContext)

    const { isLoading, data : admissions = [], refetch } = useQuery({
        queryKey: ['admissions', user?.email],
        queryFn: async () => {
          const response = await fetch(`http://localhost:3000/admissions?email=${user?.email}`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        },
      })
      return { admissions, isLoading, refetch }
}

export default useAdmission;