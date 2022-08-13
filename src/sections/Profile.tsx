import Download from '../icons/Download';
import GitHub from '../icons/GitHub';
import Linkedin from '../icons/Linkedin';
import Telegram from '../icons/Telegram';

interface Props {
  className?: string;
}
export default ({ className }: Props) => (
  <section
    className={`bg-white rounded-xl shadow-lg print:rounded-none print:shadow-none overflow-hidden w-full md:w-1/3 md:min-w-[320px] lg:min-w-fit lg:w-full print:w-[300px] ${className}`}
  >
    <div
      className="h-32 bg-cover bg-center print:hidden"
      style={{
        backgroundImage: "url('/images/nature.avif')",
      }}
    ></div>

    <div className="w-full px-4 pt-2 flex -mt-16 print:mt-0 items-end justify-between">
      <div className="rounded-lg shadow w-fit overflow-hidden p-1 bg-white">
        <img
          src="/images/me.avif"
          className="w-24 print:w-40 h-24 rounded-lg"
          alt="Fernando Falci's profile picture"
          width={96}
          height={96}
        />
      </div>
      <div className="flex flex-wrap-reverse justify-start items-center space-x-2 print:space-x-0">
        <a className="flex" href="https://github.com/falci">
          <GitHub className="w-8 h-8 print:w-8 print:h-5 lg:w-5 lg:h-5 mb-2" />
          <span className="hidden print:block">/falci</span>
        </a>
        <a
          className="flex"
          href="https://www.linkedin.com/in/fernandofalci/?locale=en_US"
        >
          <Linkedin className="w-8 h-8 print:w-8 print:h-5 lg:w-5 lg:h-5 mb-2" />
          <span className="hidden print:block">fernandofalci</span>
        </a>
        <a className="flex" href="https://t.me/falci">
          <Telegram className="w-8 h-8 print:w-8 print:h-5 lg:w-5 lg:h-5 mb-2" />
          <span className="hidden print:block">@falci</span>
        </a>
        <div
          className="mb-2 bg-green-200 px-2 py-1 text-xs rounded-2xl shadow font-bold text-green-800 print:hidden"
          title="Open to work"
        >
          OPEN
        </div>
      </div>
    </div>
    <div className="p-4 bg-white flex flex-wrap justify-between">
      <div className="mb-2 mr-2">
        <div className="text-lg font-bold">Fernando Falci</div>
        <div className="text-sm text-gray-500 print:text-black">
          Senior Developer
        </div>
        <div className="text-sm hidden print:block">print@falci.me</div>
      </div>
      <a
        href="/download/cv.pdf"
        className="flex print:hidden bg-purple-700 hover:bg-purple-600 transition duration-300 rounded-lg text-white font-bold justify-center divide-x divide-purple-500 items-center"
      >
        <span className="p-2 pl-4 whitespace-nowrap">Download CV</span>
        <div className="p-2 pr-4">
          <Download className="h-6 w-6" />
        </div>
      </a>
    </div>
  </section>
);
