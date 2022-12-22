import React from "react";
import Link from "next/link";
import { Card } from "primereact/card";

const PropertyCard = ({ properties }) => {
  const generateAboutText = (text) => {
    if (text.length > 200) {
      return `${text.substring(0, 200)}...`;
    }
    return text;
  };

  return (
    <div className="grid align-items-end ">
      {properties.map((property) => {
        return (
          <div className="col-12 sm:col-12 md:col-6 lg:col-4 mb-4 cursor-pointer">
            <Link
              href="/property/[id]"
              as={`/property/${property.id}`}
              passHref
            >
              <Card
                header={
                  <div className="portrait">
                    <img
                      className=""
                      src={property.images[0]}
                      alt={property.name}
                    />
                  </div>
                }
              >
                <div className="font-bold text-xl mt-2 mb-2">
                  {property.name}{" "}
                  <span style={{ color: "green" }}>
                    {property.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </div>
                <p className="m-0" style={{ lineHeight: "1.5" }}>
                  {generateAboutText(property.about)}
                </p>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyCard;
