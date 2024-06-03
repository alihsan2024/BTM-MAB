"use client";

import { env } from "process";
import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationModal from "./LocationModal";

interface Location {
  latitude: number;
  longitude: number;
}

const GeoLocation: React.FC = () => {
  const [location, setLocation] = useState<Location>(null);
  const [error, setError] = useState<String | null>(null);
  const [country, setCountry] = useState<String | null>("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);

          // Fetch country information using Google Maps Geocoding API
          const fetchCountry = async () => {
            try {
              const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`
              );
              const results = response.data.results;
              console.log(results);

              if (results.length > 0) {
                const addressComponents = results[0].address_components;
                const countryComponent = addressComponents.find(
                  (component: any) => component.types.includes("country")
                );
                if (countryComponent) {
                  setCountry(countryComponent.long_name);
                }
              }
            } catch (err: string | any) {
              setError(err.message);
            }
          };

          fetchCountry();
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h1>Geolocation Finder</h1>

      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Country: {country}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default GeoLocation;
