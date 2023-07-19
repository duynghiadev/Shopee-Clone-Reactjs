import CartHeader from 'src/components/CartHeader'
import Footer from 'src/components/Footer'

interface Props {
  children?: React.ReactNode
}

export default function CartLayout({ children }: Props) {
  return (
    <div>
      <div>
        <CartHeader />
        {children}
        <Footer />
      </div>
    </div>
  )
}
