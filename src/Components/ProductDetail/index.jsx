import { useContext } from 'react'
import './styles.css'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)

    return (
        <aside  className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()} className='cursor-pointer'>
                    <XMarkIcon className='w-6 h-6' />
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail