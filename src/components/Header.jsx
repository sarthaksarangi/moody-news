import newsLogo from "../assets/newsLogo.svg";
const Header = () => {
  return (
    <>
      <section class="text-blueGray-700 bg-white mt-5 ml-10">
        <div class="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">
          <div class="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font">
              {" "}
              Your Digital Mood Ring for News & Updates!{" "}
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600">
              {" "}
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.{" "}
            </p>
            <div class="flex flex-col w-full gap-2 md:justify-start md:flex-row">
              <input
                class="flex-grow w-full px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg  duration-650 lg:w-auto bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                placeholder="Your Email"
                type="email"
              />
              <button class="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-button rounded-lg  hover:bg-secondary focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                {" "}
                Subscribe{" "}
              </button>
            </div>
            {/* <p class="w-full mt-2 mb-8 text-sm text-left text-blueGray-600">
              {" "}
              I got 99 problems and blocks ain't one.{" "}
            </p> */}
          </div>
          <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              class="object-cover object-center rounded-lg"
              alt="hero"
              src={newsLogo}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
