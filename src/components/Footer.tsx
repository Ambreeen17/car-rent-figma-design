import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Vision */}
          <div>
            <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
            <p className="text-sm text-gray-600 mt-2">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
            <ul className="space-y-2">
              {["How it works", "Featured", "Partnership", "Business Relation"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Community</h2>
            <ul className="space-y-2">
              {["Events", "Blog", "Podcast", "Invite a friend"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Socials</h2>
            <ul className="space-y-2">
              {["Discord", "Instagram", "Twitter", "Facebook"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} MORENT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 transition-colors">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
