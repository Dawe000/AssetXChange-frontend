"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider'
import { Web3 } from 'web3';
import { useSDK } from '@metamask/sdk-react';
const { ethers }= require("ethers");
import { getSession } from "next-auth/react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const [account, setAccount] = useState<string>();
 
  
  

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const [hasProvider, setHasProvider] = useState<boolean | null>(null)
  const initialState = { accounts: [] } 
  const [wallet, setWallet] = useState(initialState) 

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))
    }
    getProvider()
  }, [])

// Prompt users to connect to MetaMask

  const updateWallet = async (accounts:any) => {
    setWallet({ accounts })
  }  
  
  
  const handleDisconnect = async () => {
    
  }

  const handleConnect = async () => {  
    let accounts = await window.ethereum?.request({  method: "eth_requestAccounts" })  
    updateWallet(accounts)   
    if (window.ethereum?.chainId != "0x1f47b"){
      try {
        await window.ethereum?.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1f47b"' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum?.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x1f47b',
                  chainName: '...',
                  rpcUrls: ['https://...'] /* ... */,
                },
              ],
            });
          } catch (addError) {
            // handle "add" error
          }
        }
        // handle other "switch" errors
      }
    }
    
  }
  
  

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  

  return (
    <><script src='https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'></script><header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""}`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"}`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"}`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"}`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"}`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"}`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"}`}
        >
          

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />



            <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>
      
      { wallet.accounts.length > 0 ?  
        <div>Wallet Account: { wallet.accounts[0] }</div> : <button onClick={handleConnect} >Connect MetaMask</button>
      }
      { wallet.accounts.length > 0 &&  
      <button onClick={handleDisconnect}>Disconnect Metamask</button>
      }
  
    
          </div>
        </div>
      </div>
    </header></>
  );
};

// w-full delay-300

export default Header;
