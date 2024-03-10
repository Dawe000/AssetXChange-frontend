"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  var chainid;
  try{
    chainid=window.ethereum?.chainId;
  }
  catch{
    chainid="0x1"
  }

  return (

    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "AssetXchange - Streamlining asset management",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          
          <h1> buttons below here \n</h1>
          <p>{chainid != "0x1" ? chainid:""}</p>
          
        </div>      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
