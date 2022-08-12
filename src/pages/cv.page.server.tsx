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
  <div className="h-screen p-2 md:p-5 md:pb-2 bg-gray-200 overflow-scroll flex flex-col justify-between">
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 min-w-[250px]">
      <div className="flex flex-col space-y-4 lg:min-w-[280px] md:flex-row md:space-y-0 md:space-x-4 lg:flex-col lg:space-y-4 lg:space-x-0">
        <Profile />

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-4 lg:flex-col">
          <Info data={data.info} />
          <Skills data={data.skills} />
        </div>
      </div>

      <div className="flex flex-col space-y-4">
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
      </div>
    </div>

    <Footer />
  </div>
);
