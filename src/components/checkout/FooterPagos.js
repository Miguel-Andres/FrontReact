import React from 'react'

export default function FooterPagos() {
    return (
        <React.Fragment>
             <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4"> PAGA EN :</h5>
                <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                <img className="mr-2" width="105px" src="https://http2.mlstatic.com/resources/frontend/landings-mp/images/mercadopago-og.jpg" alt="PayPal acceptance mark" />
              </div>
            </div>
        </React.Fragment>
    )
}
