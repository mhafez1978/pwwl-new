import Link from "next/link";

const AppPages = [
  { id: 0, href: "/", name: "Home" },
  { id: 1, href: "/services", name: "Services" },
  { id: 2, href: "/reviews", name: "Reviews" },
  { id: 3, href: "/blog", name: "Latest News" },
  { id: 4, href: "/reserve", name: "Reserve" },
  { id: 5, href: "/contact", name: "Contact" },
];

const Navbar = () => {
  return (
    <>
      <div className="mainNav flex flex-row bg-slate-50 justify-between items-center py-4 px-8">
        <div className="w-1/2">
          <div className="brand">
            <h1>PWWL Company</h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-row justify-end items-center">
          <div className="navMenu sm:invisible md:invisible lg:visible xl:visible 2xl:visible">
            <nav>
              {AppPages.map((page) => (
                <Link className="mr-4" key={page.id} href={page.href}>
                  {page.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mobileNavMenu lg:invisible xl:invisible 2xl:invisible">
            {/* drawer */}

            <div id="myDrawer" className="drawer collapse">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-ghost drawer-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-3/4 h-full bg-base-200 text-base-content">
                  {AppPages.map((page) => (
                    <Link className="m-4" key={page.id} href={page.href}>
                      {page.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
