import {} from "react";

function Subscription() {
  return (
    <div className="py-5 subscription">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="section_1">
              <div className="mx-4">
                <img src="/teenyicons_star-solid-2.svg" className="img-fluid" />
              </div>
              <div className="d-flex ">
                <img
                  src="/teenyicons_star-solid.svg"
                  className="img-fluid mx-2"
                />
                <img
                  src="/teenyicons_star-solid-1.svg"
                  className="img-fluid mx-2"
                />
              </div>
            </div>
            <div className="py-1 section_2">
              <span>Real Deal Monthly Movies</span>
              <p>Your Flexible monthly membership to the latest movies</p>
              <hr className="text-white" />
              <span>What is MVP Subscription ?</span>
            </div>
            <div className="section_3">
              <div>
                <div className="stepper-container">
                  <div className="stepper">
                    <div className="stepper-item active">
                      <div className="stepper-number">1</div>
                      <div className="stepper-content">
                        <div className="stepper-title">
                          {" "}
                          MVP Subscription provides the member 1 movie credit
                          per month
                        </div>
                      </div>
                    </div>
                    <div className="stepper-line"></div>
                    <div className="stepper-item active">
                      <div className="stepper-number">2</div>
                      <div className="stepper-content">
                        <div className="stepper-title">
                          {" "}
                          They can avail it at any Marcus theater or movie
                          Tavern
                        </div>
                      </div>
                    </div>
                    <div className="stepper-line"></div>
                    <div className="stepper-item">
                      <div className="stepper-number">3</div>
                      <div className="stepper-content">
                        <div className="stepper-title">
                          {" "}
                          Member earn 100 points and get $5 reward redeemable on
                          food and beverages + many more benifits
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section_4 mt-3">
              <button className="btn  btn-danger px-4 py-2">Get started</button>
              <a className="mx-5 text-white" href="#">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-wrap">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="cards shadow ">
                  <img
                    src="/creditPerMonth.svg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                  <p className="card-title mb-1">1 Credit per month</p>
                    <p className="card-text">
                     one 2D standard movie per month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6">
                <div className="cards shadow ">
                  <img
                    src="/rolloverOfUnusedCredits.svg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                  <p className="card-title">Free rollover of unused credits</p>
                    <p className="card-text">
                    unused credit will be combined following month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6">
                <div className="cards small_card shadow ">
                  <img
                    src="/MMRPerks.svg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                  <p className="card-title">All MMR perks included</p>
                    <p className="card-text">
                    + benifits
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6">
                <div className="cards small_card shadow ">
                  <img
                    src="/100Flexible.svg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body mt-4">
                  <p className="card-title">100% Flexible</p>
                    <p className="card-text">
                     cancel anytime
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6">
                <div className="cards shadow ">
                  <img
                    src="/discountOnFoodAndBeverages.svg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body mt-2">
                  <p className="card-title">20% Discount on all Food and beavrges</p>
                    <p className="card-text">
                    Excluding alcohol
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-6">
                <div className="cards shadow ">
                  <img
                    src="/convenienceFee.svg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                  <p className="card-title">0% convenience Fees</p>
                    <p className="card-text">Wavied on all days on any ticket purchase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
