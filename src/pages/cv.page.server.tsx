import '../index.css';
import { FaEnvelope, FaGithub, FaLink, FaLinkedin, FaMapPin, FaPhone } from 'react-icons/fa';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b border-sky-700 uppercase font-semibold tracking-wider text-xs mb-3 print:mb-1 pb-1">
    {children}
  </div>
);

const MainSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b-2 border-sky-900 uppercase text-sky-950 font-bold tracking-wider text-xs mb-4 print:mb-1.5 pb-1">
    {children}
  </div>
);

const SkillGroup = ({ label, skills }: { label: string; skills: string[] }) => (
  <div className="mb-2 print:mb-0.5">
    <div className="text-xs text-sky-300 uppercase tracking-wider mb-1 print:mb-0.5">{label}</div>
    <div className="flex flex-wrap gap-1">
      {skills.map((s) => (
        <span key={s} className="bg-sky-800 text-sky-100 text-xs px-2 py-0.5 print:py-0 print:px-1.5 rounded-full">
          {s}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({
  company,
  role,
  period,
  bullets,
}: {
  company: React.ReactNode;
  role: string;
  period: string;
  bullets: React.ReactNode[];
}) => (
  <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-sky-900 before:rounded-full before:content-['']">
    <div className="flex justify-between items-start mb-1 print:mb-0">
      <div>
        <div className="font-semibold text-gray-900">{company}</div>
        <div className="text-sm print:text-xs text-sky-800">{role}</div>
      </div>
      <div className="text-xs text-gray-500 whitespace-nowrap ml-4 mt-1 print:text-gray-700">{period}</div>
    </div>
    <ul className="text-sm print:text-[11px] text-gray-600 print:text-gray-800 flex flex-col gap-1.5 print:gap-0.5 mt-1 print:mt-0.5 pl-3 border-l border-gray-200 print:leading-[1.35]">
      {bullets.map((b, i) => (
        <li key={i} className="text-justify">{b}</li>
      ))}
    </ul>
  </li>
);

export const Page = () => (
  <div className="bg-gray-100 print:bg-white print:overflow-hidden print:h-screen">
    <div className="mx-auto max-w-5xl flex shadow-xl min-h-screen print:min-h-0 print:h-full print:shadow-none print:max-w-none border border-gray-200 print:border-none">

      {/* Sidebar */}
      <div className="bg-sky-900 text-gray-200 w-64 shrink-0 print:w-[200px] flex flex-col print:h-full">

        {/* Photo */}
        <div className="flex flex-col items-center py-8 print:py-3 bg-sky-950">
          <div className="w-28 h-28 print:w-16 print:h-16 rounded-full overflow-hidden ring-4 ring-sky-700 ring-offset-2 ring-offset-sky-950">
            <img
              src="https://falci.me/images/me.avif"
              alt="Fernando Falci"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="mt-3 print:mt-1 text-center">
            <div className="font-bold text-lg print:text-sm leading-tight">Fernando Falci</div>
            <div className="text-sky-400 text-sm print:text-xs">Software Engineer</div>
          </div>
        </div>

        <div className="px-5 py-6 print:px-3 print:py-2 flex flex-col gap-6 print:gap-2 flex-1">

          {/* Contact */}
          <section>
            <SectionTitle>Contact</SectionTitle>
            <ul className="flex flex-col gap-2 print:gap-0.5 text-sm print:text-[11px]">
              <li className="flex gap-2 items-center">
                <FaPhone className="text-sky-400 shrink-0" size={12} />
                <span>+1 (302) 687 3667</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaEnvelope className="text-sky-400 shrink-0" size={12} />
                <a href="mailto:fernando@falci.me" className="hover:text-white transition-colors">fernando@falci.me</a>
              </li>
              <li className="flex gap-2 items-center">
                <FaLink className="text-sky-400 shrink-0" size={12} />
                <a href="https://falci.me" className="hover:text-white transition-colors">falci.me</a>
              </li>
              <li className="flex gap-2 items-center">
                <FaMapPin className="text-sky-400 shrink-0" size={12} />
                <span>Costa Rica</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaLinkedin className="text-sky-400 shrink-0" size={12} />
                <a href="https://linkedin.com/in/fernandofalci" className="hover:text-white transition-colors">fernandofalci</a>
              </li>
              <li className="flex gap-2 items-center">
                <FaGithub className="text-sky-400 shrink-0" size={12} />
                <a href="https://github.com/falci" className="hover:text-white transition-colors">falci</a>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section>
            <SectionTitle>Skills</SectionTitle>
            <SkillGroup label="Frontend" skills={['React', 'TypeScript', 'Next.js', 'HTML/CSS']} />
            <SkillGroup label="Backend" skills={['Node.js', 'GraphQL', 'Java']} />
            <SkillGroup label="Infrastructure" skills={['AWS', 'Vercel', 'Module Federation']} />
            <SkillGroup label="Blockchain" skills={['Bitcoin', 'Lightning Network', 'Handshake', 'Web3']} />
            <SkillGroup label="Leadership" skills={['Agile / Scrum', 'TDD', 'Code Reviews', 'Mentoring']} />
          </section>

          {/* Languages */}
          <section>
            <SectionTitle>Languages</SectionTitle>
            <ul className="flex flex-col gap-1 print:gap-0.5 text-sm print:text-[11px]">
              {[
                { lang: 'Portuguese', level: 'Native' },
                { lang: 'English', level: 'Fluent' },
                { lang: 'Spanish', level: 'Advanced' },
              ].map(({ lang, level }) => (
                <li key={lang} className="flex justify-between">
                  <span>{lang}</span>
                  <span className="text-sky-400 text-xs mt-0.5">{level}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <SectionTitle>Education</SectionTitle>
            <ul className="flex flex-col gap-3 print:gap-1 text-sm print:text-[11px]">
              <li>
                <div className="font-semibold">UniCesumar</div>
                <div className="text-xs print:text-[10px] text-sky-300">OO Development in Java</div>
                <div className="text-xs print:text-[10px] text-sky-500">2012 – 2013*</div>
              </li>
              <li>
                <div className="font-semibold">UNIPAR</div>
                <div className="text-xs print:text-[10px] text-sky-300">Analysis &amp; Software Development</div>
                <div className="text-xs print:text-[10px] text-sky-500">2007 – 2009</div>
              </li>
            </ul>
          </section>

        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-8 py-8 print:px-5 print:py-3 text-gray-700 flex flex-col gap-8 print:gap-2">

        {/* Print header with QR */}
        <div className="hidden print:flex justify-between items-start">
          <div className="uppercase">
            <div className="text-xl font-bold text-gray-900 leading-tight">Fernando Falci</div>
            <div className="text-sky-800 text-xs tracking-widest">Software Engineer</div>
            <div className="border-b-4 border-sky-900 w-10 mt-1"></div>
          </div>
          <div className="flex flex-col items-end">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Ffalci.me%2Fcv%3Fqr&size=180x180&margin=0"
              alt="QR code"
              className="w-12 h-12"
            />
            <div className="text-[10px] text-gray-400 mt-0.5">falci.me/cv</div>
          </div>
        </div>

        {/* Profile */}
        <section>
          <MainSectionTitle>Profile</MainSectionTitle>
          <div className="text-sm print:text-[11px] leading-relaxed print:leading-[1.4] text-gray-600 print:text-gray-800 flex flex-col gap-2 print:gap-1">
            <p>
              Full-stack software engineer with 15+ years of professional experience across startups
              and enterprise environments, specializing in React frontends, Node.js backends, and
              technical leadership. Hands-on by nature and equally comfortable setting technical
              direction, running hiring processes, and presenting to stakeholders.
            </p>
            <p>
              Career highlights include leading the Backbone-to-React migration at eDreams (10k+ DAU,
              zero downtime), architecting a micro-frontend platform at Adevinta (one of Europe's
              largest marketplace groups), and most recently serving as CTO of Namebase.io, the largest
              platform in the Handshake blockchain ecosystem.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section>
          <MainSectionTitle>Work Experience</MainSectionTitle>
          <ul className="flex flex-col gap-6 print:gap-1.5">

            <ExperienceItem
              company={
                <a href="https://www.namebase.io" className="hover:text-sky-800 transition-colors">
                  Namebase.io
                </a>
              }
              role="Sr. Software Engineer / CTO"
              period="2022 – 2026"
              bullets={[
                'Owned the full technology roadmap for namebase.io and hns.id, the primary Handshake domain marketplace and resolution platform, leading a cross-functional remote team of smart contract engineers, backend developers, and UX designers.',
                'Coordinated engineers contributing to the Handshake open-source protocol repository, bridging platform requirements with core protocol development.',
                'Reduced AWS infrastructure costs by 40% through targeted architectural changes and resource rightsizing; built observability from scratch with unified metrics, dashboards, and alerting, cutting incident response times significantly.',
                'Implemented EPP (Extensible Provisioning Protocol) integrations, expanding platform compatibility with global domain registries and opening new partnership opportunities.',
              ]}
            />

            <ExperienceItem
              company="Adevinta"
              role="Sr. Software Engineer"
              period="Feb 2020 – Feb 2023"
              bullets={[
                "At Adevinta, one of Europe's largest digital marketplace groups (Leboncoin, Milanuncios, Willhaben; 3B+ annual revenue): architected a Module Federation-based refactor of the internal backoffice, enabling 4+ teams to deploy independently and cutting conflicts by 45%.",
                "Contributed to the company's Federated GraphQL layer, standardizing data-access patterns and improving query performance; championed test automation, CI/CD pipelines, and code review culture adopted across the frontend guild.",
              ]}
            />

            <ExperienceItem
              company="eDreams Odigeo"
              role="Sr. Software Engineer"
              period="Jun 2017 – Feb 2020"
              bullets={[
                "Led the full migration of eDreams' primary booking interface from Backbone.js to React (10,000+ daily active users, zero downtime), delivering 30% faster load times and a 40% reduction in codebase size.",
                'Designed and ran a systematic A/B testing programme alongside product and design, increasing feature adoption rates by 20%.',
              ]}
            />

            <ExperienceItem
              company="Mobile-DI"
              role="Development Analyst"
              period="2015 – Mar 2018"
              bullets={[
                'Managed a distributed team delivering Angular applications for enterprise clients, owning architectural decisions, establishing coding standards, and mentoring junior developers through structured code reviews.',
                'Served as primary technical contact for stakeholders, translating business requirements into engineering plans and delivery timelines.',
              ]}
            />

          </ul>
        </section>

        {/* Open Source */}
        <section>
          <MainSectionTitle>Open Source</MainSectionTitle>
          <ul className="flex flex-col gap-6 print:gap-1.5">
            <ExperienceItem
              company={
                <a href="https://hns.dev/HIPs/" className="hover:text-sky-800 transition-colors">
                  Handshake Improvement Proposals (HIPs)
                </a>
              }
              role="Principal Coordinator"
              period="2020 – Present"
              bullets={[
                'Principal coordinator of the HIPs repository, the formal process for proposing and ratifying changes to the Handshake protocol, analogous to Bitcoin\'s BIPs.',
                'Authored HIP2, which was adopted by multiple ecosystem projects including BobWallet.',
                'Also maintain hns.dev, an open-source resource hub for the Handshake ecosystem.',
              ]}
            />
          </ul>
        </section>

        {/* References */}
        <section>
          <MainSectionTitle>References</MainSectionTitle>
          <div className="flex flex-col sm:flex-row gap-6 print:gap-8 text-sm print:text-[11px]">
            <div className="border-l-2 border-sky-200 pl-3">
              <div className="font-semibold text-gray-900">Daniel Fernández</div>
              <div className="text-sky-800 text-xs print:text-[10px] mb-1 print:mb-0">Qdrant, Staff Software Engineer</div>
              <a href="mailto:contact@danifdz.dev" className="text-gray-500 hover:text-sky-800 underline transition-colors">
                contact@danifdz.dev
              </a>
            </div>
            <div className="border-l-2 border-sky-200 pl-3">
              <div className="font-semibold text-gray-900">Aaron Oxborrow</div>
              <div className="text-sky-800 text-xs print:text-[10px] mb-1 print:mb-0">Aftermarket.com, CTO</div>
              <a href="mailto:aaron@oxborrow.com" className="text-gray-500 hover:text-sky-800 underline transition-colors">
                aaron@oxborrow.com
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>

    <div className="text-xs text-center py-3 print:hidden text-gray-400">
      <a href="/download/cv.pdf" className="underline hover:text-gray-600 transition-colors">
        Download PDF version
      </a>
    </div>

  </div>
);
