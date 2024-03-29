import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext);
    const jwtToken = localStorage.getItem('secret-token')
    const {  data: cart=[], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers: {
                    authorization : `Bearer ${jwtToken}`,
                }
            });
            return res.json()
        }
    })
    return [cart,refetch]
};

export default useCart;