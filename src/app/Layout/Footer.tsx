function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto grid grid-cols-12 items-center gap-4 ">
        <div className="col-span-12 md:col-span-8 text-center md:text-left text-[14px]  ">
          All rights reserved © 2024 |  Drukland.de
        </div>

        <div className="col-span-12 md:col-span-4 text-end md:text-left text-[14px]  ">
          <div className="flex justify-between">
            <button> Terms of Use </button>
            <button> Sitemap </button>
            <button> Company information </button>
            <button> Cookie settings </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
