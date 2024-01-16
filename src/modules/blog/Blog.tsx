const Blog = () => {
  return (
    <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <a
            className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700"
            href="#"
          >
            <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
              <img
                className="object-cover w-full h-full transition-all hover:scale-110"
                src="https://i.postimg.cc/9MQr82ZS/pexels-james-wheeler-417074-1.jpg"
                alt=""
              />
              <span className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                Exercise
              </span>
            </div>
            <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
              <div>
                <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                  6th Jun, 2022
                </span>
                <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur
                </h2>
                <p className="text-sm leading-7 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </a>
          <a
            className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700"
            href="#"
          >
            <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
              <img
                className="object-cover w-full h-full transition-all hover:scale-110"
                src="https://i.postimg.cc/fbT9FYhB/pexels-stijn-dijkstra-2583852.jpg"
                alt=""
              />
              <span className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                Exercise
              </span>
            </div>
            <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
              <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                {" "}
                6th Jun, 2022
              </span>
              <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p className="text-sm leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </a>
          <a
            className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700"
            href="#"
          >
            <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
              <img
                className="object-cover w-full h-full transition-all hover:scale-110"
                src="https://i.postimg.cc/sgKBp1ZS/pexels-sam-kolder-2387866.jpg"
                alt=""
              />
              <span className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                Exercise
              </span>
            </div>
            <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
              <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                {" "}
                6th Jun, 2022
              </span>
              <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p className="text-sm leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </a>
          <a
            className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-700"
            href="#"
          >
            <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
              <img
                className="object-cover w-full h-full transition-all hover:scale-110"
                src="https://i.postimg.cc/Y23w2gc1/pexels-ricardo-esquivel-1586298.jpg"
                alt=""
              />
              <span className="absolute px-4 py-2 text-xs text-white bg-blue-500 rounded top-4 left-4">
                Exercise
              </span>
            </div>
            <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
              <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                {" "}
                6th Jun, 2022
              </span>
              <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p className="text-sm leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
