import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const Features = ({ handleDisplay }) => {
  return (
    <section className="text-center mb-5">
      <h2 className="h2-responsive font-weight-bold text-center mb-4 text-night">
      Why chose us?
      </h2>

      <p className="grey-text w-responsive mx-auto mb-5 wow fadeIn">
      As the most-visited real estate website in the United States, Zillow and its affiliates offer customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service. Zillow Home Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their next home purchase.
      </p>

      <div className="row wow fadeIn">
        <div className="col-lg-4 text-center">
          <div className="icon-area">
            <div className="circle-icon">
              <i className="fas fa-camera text-night"></i>
            </div>
            <br />
            <h5 className="text-dark font-weight-bold mt-2">
            Digitization of your property
            </h5>
            <div className="mt-1">
              <p className="mx-3 grey-text">
              We set up a free visit service
                 Virtual. This makes it possible, for our local customers and
                 international, a pre-visit of your property. This allows to
                 select customers and thus obtain quality customers
                 to save you time. Finally, your property can be visited
                 24/7!
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 text-center">
          <div className="icon-area">
            <div className="circle-icon">
              <i className="fas fa-book text-night"></i>
            </div>
            <br />
            <h5 className="text-dark font-weight-bold mt-2">
            Presence in the real estate catalog
            </h5>
            <div className="mt-1">
              <p className="mx-3 grey-text">
          By trusting us, your property will appear in
                 our real estate catalog distributed among the professions
                 liberals in your neighborhood, as well as in the shops of
                 proximity. Thus, your property always gains more visibility
                 and in both physical and digital presence.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 text-center mb-4">
          <div className="icon-area">
            <div className="circle-icon">
              <i className="fas fa-user text-night"></i>
            </div>
            <br />
            <h5 className="text-dark font-weight-bold mt-2">
            Personalized follow-up
            </h5>
            <div className="mt-1">
              <p className="mx-3 grey-text">
              Our team supports you in your real estate project. You
                 will have only one and only interlocutor throughout the duration
                 sales. We are committed to providing you with a report
                 weekly with statistics and to inform you in real time
                 of market developments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="lift py-3 ml-3 globalBtn topMarged"
          onClick={handleDisplay}
        >
         See the properties of the agency
        </button>
      </div>
    </section>
  );
};

export default Features;
