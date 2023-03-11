
import { useRoutes } from 'react-router-dom'
import Wallet from './pages/wallet/wallet'
import MainLayout from './layout/mainLayout'
import DefiWallet from './pages/defi_wallet/defi_wallet'
import Landing from './pages/landing/landing'
const Route = () => {
  
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Landing />
                },
                {
                    path: "/defi",
                    element: <DefiWallet />
                },
                {
                    path: "/wallet",
                    element: <Wallet />
                },
                
            ]
        }
    ]

    )
}

export default Route