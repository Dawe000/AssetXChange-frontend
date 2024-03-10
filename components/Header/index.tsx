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
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">AssetXchange</h3>

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
  
    
          </div>
        </div>
      </div>
    </header></>
  );
};

// w-full delay-300

export default Header;
