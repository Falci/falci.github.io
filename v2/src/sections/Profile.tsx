import Download from '../icons/Download';
import GitHub from '../icons/GitHub';
import Linkedin from '../icons/Linkedin';
import Telegram from '../icons/Telegram';

export default () => (
  <section className="bg-white rounded-xl shadow-lg overflow-hidden w-full md:w-3/5 lg:w-full">
    <div
      className="h-32 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://placeimg.com/640/480/nature')",
      }}
    ></div>

    <div className="w-full px-4 pt-2 flex -mt-16 items-end justify-between">
      <div className="rounded-lg shadow w-fit overflow-hidden p-1 bg-white">
        <div
          style={{
            backgroundImage: "url('https://falci.me/images/me.jpeg')",
          }}
          className="w-24 h-24 bg-cover bg-[center_-2rem] rounded-lg"
        ></div>
      </div>
      <div className="flex flex-wrap-reverse justify-end items-center space-x-2">
        <a href="https://github.com/falci">
          <GitHub className="w-8 h-8 lg:w-5 lg:h-5 mb-2" />
        </a>
        <a href="https://www.linkedin.com/in/fernandofalci/?locale=en_US">
          <Linkedin className="w-8 h-8 lg:w-5 lg:h-5 mb-2" />
        </a>
        <a href="https://t.me/falci">
          <Telegram className="w-8 h-8 lg:w-5 lg:h-5 mb-2" />
        </a>
        <div
          className="mb-2 bg-green-200 px-2 py-1 text-xs rounded-2xl shadow font-bold text-green-800"
          title="Open to work"
        >
          OPEN
        </div>
      </div>
    </div>
    <div className="p-4 bg-white flex flex-wrap justify-between">
      <div className="mb-2 mr-2">
        <div className="text-lg font-bold">Fernando Falci</div>
        <div className="text-sm text-gray-500">Senior Developer</div>
      </div>
      <a
        href="?download"
        className="flex bg-purple-700 hover:bg-purple-600 transition duration-300 rounded-lg text-white font-bold justify-center divide-x divide-purple-500 items-center"
      >
        <span className="p-2 pl-4 whitespace-nowrap">Download CV</span>
        <div className="p-2 pr-4">
          <Download className="h-6 w-6" />
        </div>
      </a>
    </div>
  </section>
);
