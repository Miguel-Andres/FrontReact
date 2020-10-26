import React from 'react'

export default function Discount() {
    return (
        <React.Fragment>
             <div className="mb-3">
              <div className="pt-4">
                <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false">
                  Add a discount code (optional)
                  <span><i className="fas fa-chevron-down pt-1" /></span>
                </a>
                <div className="collapse" id="collapseExample">
                  <div className="mt-3">
                    <div className="md-form md-outline mb-0">
                      <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </React.Fragment>
    )
}
