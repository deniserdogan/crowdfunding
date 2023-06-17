import { Gi3DHammer } from 'react-icons/gi'

import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'

const Header = () => {
    const [connectedAccount] = useGlobalState('connectedAccount')

    return (
        <header
            className='flex justify-between items-center
        p-5 bg-white shadow-lg fixed top-0 left-0 right-0'
        >
            <Link
                color='purple'
                to='/'
                className='flex justify-start items-center
      text-xl text-black space-x-1 ml-30'
            >
                {' '}
            </Link>

            <div className='flex space-x-2 justify-center'>
                {connectedAccount ? (
                    <button
                        type='button'
                        className='inline-block px-6 py-2.5 bg-purple-500
            text-white font-medium text-xs leading-tight uppercase
             shadow-md hover:bg-purple-700 rounded-full'
                    >
                        {truncate(connectedAccount, 11)}
                    </button>
                ) : (
                    <button
                        type='button'
                        className='inline-block px-6 py-2.5 bg-grey-600
            text-white font-medium text-xs leading-tight uppercase
             shadow-md hover:bg-gray-700'
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </button>
                )}
            </div>
        </header>
    )
}

export default Header
