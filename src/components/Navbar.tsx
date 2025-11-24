"use client";

import { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import  Link  from "next/link"; 

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#02807f] text-white">
      <div className=" mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-20  ">
          {/* Logo */}

          <div className="flex items-center gap-10">

            <Link href="/" className="flex items-center">
              <img
              src="https://shoppurezen.com/cdn/shop/files/Purezen_Final_Logo_01_12ca1db0-e411-4573-a8fe-8a6962b17d58.webp"
                alt="Purezen Logo"
                className="h-7 w-auto"
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
              <div className="relative group  ">

                <button className="flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  <a href="https://shoppurezen.com/collections/">Shop All</a>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  Health Bundles
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  <a href="https://shoppurezen.com/pages/learn">Learn</a>

                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <a
                href="https://shoppurezen.com/pages/about-us"
                // className="hover:underline"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Our Story
              </a>

              <div className="relative group">
                <button className="flex items-center gap-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  <a href="https://shoppurezen.com">Refer and Earn</a>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
            //   variant="ghost"
            //   size="icon"
              className="text-white"
            >
              <Link href="/admin/login">
                <User className="w-6 h-6" />
              </Link>
            </button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white "
            >
              <a href="https://shoppurezen.com/search">
                <Search className="w-6 h-6" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white relative"
            >
              <a href="https://shoppurezen.com/cart">
                <ShoppingCart className="w-6 h-6" />

                <span className="absolute -top-1 -right-1 bg-white text-teal-600 text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center justify-between hover:opacity-80">
                Shop All
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between hover:opacity-80">
                Health Bundles
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between hover:opacity-80">
                Learn
                <ChevronDown className="w-4 h-4" />
              </button>
              <a href="/our-story" className="hover:opacity-80">
                Our Story
              </a>
              <button className="flex items-center justify-between hover:opacity-80">
                Refer and Earn
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        )} */}


        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-y-0 right-0 w-64 bg-[#02807f] shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-white/20">
                <span className="font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <div className="flex flex-col space-y-4 p-4">
                <button className="flex items-center justify-between hover:opacity-80 text-left">
                  <a href="https://shoppurezen.com/collections/">Shop All</a>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between hover:opacity-80 text-left">
                  Health Bundles
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-between hover:opacity-80 text-left">
                  <a href="https://shoppurezen.com/pages/learn">Learn</a>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <a href="https://shoppurezen.com/pages/about-us" className="hover:opacity-80">
                  Our Story
                </a>
                <button className="flex items-center justify-between hover:opacity-80 text-left">
                  <a href="https://shoppurezen.com">Refer and Earn</a>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
