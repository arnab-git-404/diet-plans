"use client";

export default function AnnouncementBar() {
  return (
    <div className=" h-[33px] announcement-bar bg-white text-[#0b4c49] py-3">
      <div className="announcement-bar--inner overflow-hidden relative">
        <div className=" h-[13px] flex animate-marquee whitespace-nowrap">
          <div className="announcement-bar--item inline-block px-8">
            FSSAI Approved | ISO 22000 certified | GMP certified | HACCP certified | NABL Tested
          </div>
          <div className="announcement-bar--item inline-block px-8">
            FSSAI Approved | ISO 22000 certified | GMP certified | HACCP certified | NABL Tested
          </div>
          <div className="announcement-bar--item inline-block px-8">
            FSSAI Approved | ISO 22000 certified | GMP certified | HACCP certified | NABL Tested
          </div>
          <div className="announcement-bar--item inline-block px-8">
            FSSAI Approved | ISO 22000 certified | GMP certified | HACCP certified | NABL Tested
          </div>
        </div>
      </div>
    </div>
  );
}