import Entries from '../components/Entries';
import data from '../data.json';
import Company from '../icons/Company';
import About from '../sections/About';
import Footer from '../sections/Footer';
import Info from '../sections/Info';
import Profile from '../sections/Profile';
import Skills from '../sections/Skills';

import '../index.css';

export const Page = () => (
  <div className="h-screen p-2 md:p-5 md:pb-2 print:p-0 bg-gray-200 overflow-scroll flex flex-col justify-between print:h-fit">
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row space-y-4 print:space-y-0 lg:space-y-0 lg:space-x-4 min-w-[250px]">
      <div className="flex flex-col space-y-4 lg:min-w-[280px] md:flex-row md:space-y-0 md:space-x-4 lg:flex-col lg:space-y-4 lg:space-x-0 print:flex-row print:space-y-0">
        <Profile className="print:border-r md:grow lg:grow-0" />

        <div className="flex flex-col grow space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-4 lg:flex-col print:flex-row print:divide-x print:space-y-0">
          <Info data={data.info} />
          <Skills data={data.skills} />
        </div>
      </div>

      <div className="flex flex-col space-y-4 print:space-y-2">
        <About />
        <Entries
          title="Experience"
          data={data.experience}
          Icon={Company}
          linkedinUrl="https://www.linkedin.com/in/fernandofalci/details/experience/?locale=en_US"
        />
        <Entries
          title="Education"
          data={data.education}
          Icon={Company}
          linkedinUrl="https://www.linkedin.com/in/fernandofalci/details/education/?locale=en_US"
        />
        <div className="hidden print:flex print:pt-[6rem] justify-between items-start gap-4">
          <div className="shrink-0">
            <Profile />
          </div>
          <div className="flex flex-col gap-2 items-end">
            <img src="/images/qr.avif" height={150} width={150} />
            <div className="text-sm text-gray-500 text-right">
              Visit <span className="underline">falci.me/cv</span> for the most
              updated version.
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);
