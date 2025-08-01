import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { navlinks } from "@/lib/constants";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-dark px-6 py-12 text-light">
      <div className="mx-auto max-w-7xl">
        {/* Main content with horizontal line */}
        <div className="stroke-3 grid w-full grid-cols-1 gap-y-8 border-b border-secondary pb-8 pr-5 sm:grid-cols-2 lg:grid-cols-[35%_20%_30%_15%]">
          {/* Logo */}
          <div className="pr-10">
            <h2 className="ft-subtitle mb-5">Event Organizers</h2>
            <Image
              className="mb-5 object-contain pr-8"
              src="/images/aicode_logo_HD.png"
              alt="AICODE Logo"
              width={282}
              height={55}
            />
            <Image
              className="mb-5 object-contain pr-8"
              src="https://squadrone.com.au/wp-content/uploads/2024/11/squadrone-logo-01-scaled.webp"
              alt="Squadrone Logo"
              width={160}
              height={56}
            />
          </div>

          {/* Pages */}
          <div className="pr-10">
            <h3 className="ft-subtitle mb-3">Quick Links</h3>
            <ul className="ft-content mb-2 space-y-4">
              {navlinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      router.pathname === link.href
                        ? "nav-link-active"
                        : "nav-link-footer"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="pr-10">
            <h3 className="ft-subtitle mb-3">Contact Info</h3>
            <p className="ft-content mb-2 text-light">
              Email:
              <br />
              <a
                href="mailto:info@aicodeaustralia.com.au"
                className="ft-content break-all underline hover:text-primary"
              >
                info@aicodeaustralia.com.au
              </a>
            </p>
            {
              <p className="ft-content mb-2">
                64 Mill Point Rd
                <br />
                South Perth WA 6151
              </p>
            }
          </div>

          {/* Socials */}
          <div className="pr-5">
            <h3 className="ft-subtitle mb-5">Follow Us</h3>
            <div className="mb-5 flex gap-4">
              <a
                href="https://www.facebook.com/AicodeAustralia/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition hover:border-primary hover:text-primary"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/aicodeaustralia/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition hover:border-primary hover:text-primary"
              >
                <FaInstagram size={18} />
              </a>
            </div>
            <p className="ft-content text-sm text-light">
              Stay updated with the latest news and highlights from the
              tournament
            </p>
          </div>
        </div>

        {/* Centered copyright below the line */}
        <p className="ft-content pt-2 text-center text-sm text-light">
          Copyright © 2025 Australia Youth Drone Tournament. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
