"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { useEffect, useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import {Web3} from "web3";

const Feature = () => {
  const web3 = new Web3("https://node.ghostnet.etherlink.com");
  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const initialState = { accounts: [] } 
  const [wallet, setWallet] = useState(initialState) 
  const [targetType, setTargetType] = useState("")
  const [target, setTarget] = useState("")
  const [name, setName] = useState("")
  const [properties, setProperties] = useState("")


  var placeholder = "text here";



const handleTypeSubmit = async () => {
  console.log(targetType)
}

const handleTargetSubmit = async () => {
  console.log(target)
}

const handleNewTypeSubmit = async () => {
  console.log(name)
  console.log(properties)
}




  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))
    }
    getProvider()
  }, [])

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

          
          <div className="mt-10">
          <p className="mt-5 text-black dark:text-white">
                  Get details of asset type
                </p>
                
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={targetType}
                      onChange={(e) => setTargetType(e.target.value)}
                      type="text"
                      placeholder="Enter assettype address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      onClick={handleTypeSubmit}
                      aria-label="button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Submit
                    </button>
                  </div>
                

                <p className="mt-5 text-black dark:text-white">
                  {placeholder}
                </p>
              </div>


              <div className="mt-10">
          <p className="mt-5 text-black dark:text-white">
                  Get details of specific asset
                </p>
                
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      type="text"
                      placeholder="Enter asset address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      onClick={handleTargetSubmit}
                      aria-label="button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Submit
                    </button>
                  </div>
                

                <p className="mt-5 text-black dark:text-white">
                  Text here
                </p>
              </div>


              <div className="mt-10">
          <p className="mt-5 text-black dark:text-white">
                  Create new asset type
                </p>
                
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name, e.g: house"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <input
                      value={properties}
                      onChange={(e) => setProperties(e.target.value)}
                      type="text"
                      placeholder="Properties, e.g: beds,baths"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      onClick={handleNewTypeSubmit}
                      aria-label="button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Submit
                    </button>
                  </div>
                

                <p className="mt-5 text-black dark:text-white">
                  Text here
                </p>
              </div>


              


        </div>      

      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
