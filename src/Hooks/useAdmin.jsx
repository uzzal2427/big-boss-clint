import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const jwtToken = localStorage.getItem('secret-token');
  
  const { data: isAdminData, isLoading: isAdminLoading, error } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
          headers: {
            authorization: `Bearer ${jwtToken}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        return res.json();
      } catch (error) {
        console.error('Error fetching isAdmin:', error);
        throw error;
      }
    },
  });

  // Return the admin data along with loading state
  return { isAdmin: isAdminData?.admin || false, isAdminLoading, error };
};

export default useAdmin;
