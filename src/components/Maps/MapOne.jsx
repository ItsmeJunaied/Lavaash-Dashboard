"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "../../js/us-aea-en";

const MapOne = () => {
  useEffect(() => {
    let mapOne;  // Declare mapOne variable to ensure it's in the same scope for cleanup

    try {
      // Initialize mapOne
      mapOne = new jsVectorMap({
        selector: "#mapOne",
        map: "us_aea_en",
        zoomButtons: true,
        regionStyle: {
          initial: {
            fill: "#C8D0D8",
          },
          hover: {
            fillOpacity: 1,
            fill: "#3056D3",
          },
        },
        regionLabelStyle: {
          initial: {
            fontFamily: "Satoshi",
            fontWeight: "semibold",
            fill: "#fff",
          },
          hover: {
            cursor: "pointer",
          },
        },
        labels: {
          regions: {
            render(code) {
              return code.split("-")[1];
            },
          },
        },
      });

      console.log("Map initialized:", mapOne);  // Check if map is initialized correctly

    } catch (error) {
      console.error("Map initialization failed:", error);  // Log if initialization fails
    }

    // Cleanup function: Only call destroy if mapOne was successfully initialized
    return () => {
      if (mapOne) {
        console.log("Destroying map:", mapOne);  // Log before destroying
        try {
          mapOne.destroy();
        } catch (error) {
          console.error("Error during map destruction:", error);  // Catch any error during destroy
        }
      } else {
        console.log("Map not initialized, skipping destroy.");
      }
    };
  }, []); // Empty dependency array to run the effect once on mount and cleanup on unmount

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div className="h-90">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
