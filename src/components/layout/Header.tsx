import React, { useEffect, useState } from "react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-black py-2  ">
      <div className="container mx-auto flex items-center justify-center px-8">
        <span className="text-center text-sm font-medium tracking-wide text-white">
          Free shipping on orders over $15.00 X FREE RETURNS
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY;
    };

    


    setPrevScrollY(window.scrollY);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="w-full transform transition-all duration-300 ease-in-out">
        <AnnouncementBar></AnnouncementBar>
      </div>
    </header>
  );
};

export default Header;
