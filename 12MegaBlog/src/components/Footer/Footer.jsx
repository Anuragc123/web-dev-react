import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="py-10 bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap mx-4">
          <div className="w-full md:w-1/2 lg:w-3/12 px-4">
            <div className="mb-6">
              <Logo width="100px" />
            </div>
            <p className="text-sm">
              &copy; Copyright 2024. All Rights Reserved by Anurag.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4">
            <h3 className="text-sm font-semibold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4">
            <h3 className="text-sm font-semibold mb-4 uppercase">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-4">
            <h3 className="text-sm font-semibold mb-4 uppercase">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
