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
  const [target, setTarget] = useState("")




const handleSubmit = async () => {

}

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))
    }
    getProvider()
  }, [])
  window.ethereum?.on("chainChanged", (chainId) => 
  window.location.reload());

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
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      type="text"
                      placeholder="Enter assettype address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Submit request
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Text here
                </p>
              </div>

              <div className="mt-10">
          <p className="mt-5 text-black dark:text-white">
                  Get details of specific asset
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={target}
                      onChange={(e) => setTarget(e.target.value)}
                      type="text"
                      placeholder="Enter asset address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Submit request
                    </button>
                  </div>
                </form>

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
