import React from "react";
import BackButton from "../components/BackButton";

const Post = ({ news }) => {
  //   const { heading, description, image } = news;
  return (
    <>
      <div>
        <main className="pt-4 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert dark:text-white">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Best practices for successful prototypes
                </h1>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Happy
                  </a>
                </div>
              </header>
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classNamees from Tailwind CSS. It also
                includes interactive elements such as dropdowns, modals,
                datepickers.
              </p>

              <figure className=" mb-4 mt-4">
                <img
                  src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                  alt=""
                />
                <figcaption>{"Digital art by Anonymous"}</figcaption>
              </figure>
              <h2>Getting started with Flowbite</h2>
              <p>
                First of all you need to understand how Flowbite works. This
                library is not another framework. Rather, it is a set of
                components based on Tailwind CSS that you can just copy-paste
                from the documentation.
              </p>
              <BackButton name="Back" />
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default Post;
