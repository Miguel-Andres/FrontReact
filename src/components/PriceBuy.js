import React from 'react'

export default function PriceBuy(props) {
    return (
       <React.Fragment>
           <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-3">The total amount of</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Precio Items   :   {props.pricetotal}
                    <span>    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Envio
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Monto TOTAL :   {props.pricetotal}</strong>
                      <strong>
                        <p className="mb-0">(incluido IVA)</p>
                      </strong>
                    </div>
                    <span><strong></strong></span>
                  </li>
                </ul>
                <button type="submit" className="btn btn-danger btn-block" disabled={props.pago} onClick={props.mostrar}  >Generar orden </button>
              </div>
            </div>
       </React.Fragment>
    )
}
