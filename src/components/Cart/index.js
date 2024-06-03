import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const onRemoveAllItems = () => {
        removeAllCartItems()
      }

      const findOrderTotal = () =>
        cartList.reduce((sum, item) => sum + item.quantity * item.price, 0)

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  onClick={onRemoveAllItems}
                  className="remove-all-button"
                  data-testid="remove"
                >
                  Remove All
                </button>
                <CartListView />
                <div>
                  <h1>Order Total: Rs {findOrderTotal()}/-</h1>
                  <p>{cartList.length} Items in cart</p>
                  <button>Checkout</button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
