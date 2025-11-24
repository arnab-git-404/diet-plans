"use client";

import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#02807f] text-white">
      <div className="mx-auto px-12 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Shop All
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refer and Earn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FSSAI Grievance Connect
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Know our Ingredients
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Licences and Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">POLICIES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return and Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Get the latest Health News and Offers in your inbox
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                // className="bg-transparent border-white text-white placeholder:text-white/70"
                className="border px-3 py-3 border-amber-300 bg-transparent  hover:cursor-pointer relative w-full"
              />
                <button className="border px-3 py-3 border-amber-300 bg-transparent  hover:cursor-pointer">
                  →
                </button>
              
            </div>
          </div>
        </div>

        <div className="font-semibold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ">
          <div>
            <p className="text-m mb-4 font-semibold ">
              Join our Purezen community
            </p>
            <div className="flex gap-2">
              <button className="border px-3 py-3 border-amber-300 bg-transparent  hover:cursor-pointer">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="border px-3 py-3 border-amber-300 bg-transparent  hover:cursor-pointer">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="border px-3 py-3 border-amber-300 bg-transparent  hover:cursor-pointer">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* <div className="my-8 md:my-0">
            <p className="text-m mb-4">CIN: U21000MH2024PTC428351</p>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-3_ca816917-03ee-42d0-91c8-96509589754d.webp"
                  alt="GMP"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-4_8d33874d-5a9b-4583-83cd-4cbedb150816.webp"
                  alt="HACCP"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-1_53164c85-8e95-4eda-ba3d-2b4d79704d71.webp"
                  alt="ISO"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-2_1fb8b786-2f8d-453f-a78e-c101576dba2d.webp"
                  alt="USDA"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-5_3c83c29e-b704-4e20-a966-16c405521820.webp"
                  alt="FSSAI"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div> */}

   {/* Certifications */}
          <div>
            <p className="text-xs md:text-sm mb-3 md:mb-4">CIN: U21000MH2024PTC428351</p>

            <div className="flex items-center gap-2 md:gap-4  pb-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-3_ca816917-03ee-42d0-91c8-96509589754d.webp"
                  alt="GMP"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-4_8d33874d-5a9b-4583-83cd-4cbedb150816.webp"
                  alt="HACCP"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-1_53164c85-8e95-4eda-ba3d-2b4d79704d71.webp"
                  alt="ISO"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-2_1fb8b786-2f8d-453f-a78e-c101576dba2d.webp"
                  alt="USDA"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0886/6532/5865/files/certification-icon-5_3c83c29e-b704-4e20-a966-16c405521820.webp"
                  alt="FSSAI"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Copyright */}
      <div className=" py-4 relative border-t h-16">
        <div className=" mx-auto px-8 text-center">
          <p className="text-sm opacity-50 mt-2 ">Copyright © 2025 Purezen</p>
        </div>
        <Button
          size="icon"
          onClick={scrollToTop}
          className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full bg-white text-teal-600 hover:bg-white/90"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </footer>
  );
}
