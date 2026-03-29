import '../index.css';
import { useState, useEffect } from 'react';
import { load as parseYaml } from 'js-yaml';
import rawData from '../data/cv.yaml?raw';
import { downloadCVPdf } from './cv-dynamic-pdf';

type Bullet = { text: string; tags: string[] };
type Entry = {
  type: 'company' | 'oss' | 'project';
  name: string;
  url?: string;
  role: string;
  description?: string;
  start: number;
  end: number | null;
  bullets: Bullet[];
};
type SkillGroup = { label: string; items: string[]; tags: string[] };
type Category = { label: string; tags: string[] };
type CVData = {
  profile: { name: string; title: string; intro: string };
  categories: Category[];
  skills: SkillGroup[];
  entries: Entry[];
};

const cvData = parseYaml(rawData) as CVData;

const allTags = Array.from(
  new Set(cvData.entries.flatMap(e => e.bullets.flatMap(b => b.tags)))
).sort();

const TAG_LABELS: Record<string, string> = {
  'a-b-testing': 'A/B Testing',
  'api': 'API',
  'aws': 'AWS',
  'css': 'CSS',
  'cto': 'CTO',
  'graphql': 'GraphQL',
  'micro-frontends': 'Micro-frontends',
  'module-federation': 'Module Federation',
  'nextjs': 'Next.js',
  'open-source': 'Open Source',
  'tdd': 'TDD',
  'typescript': 'TypeScript',
};

const PERSONAS = [
  { label: 'Frontend Engineer', tags: ['react', 'typescript', 'next.js', 'micro-frontends', 'module-federation', 'webpack', 'performance', 'a-b-testing'] },
  { label: 'Full-Stack', tags: ['react', 'typescript', 'node', 'graphql', 'postgres', 'REST API design', 'tdd', 'aws'] },
  { label: 'Tech Lead / CTO', tags: ['cto', 'leadership', 'mentoring', 'architecture', 'Technical roadmap ownership', 'agile'] },
  { label: 'Backend Engineer', tags: ['node', 'nestjs', 'graphql', 'postgres', 'redis', 'api', 'tdd', 'REST API design'] },
];

const formatTag = (tag: string) =>
  TAG_LABELS[tag] ?? tag.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

const formatPeriod = (start: number, end: number | null) =>
  `${start} \u2013 ${end ?? 'Present'}`;

export const Page = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tags = params.get('tags');
    if (tags) setSelectedTags(tags.split(',').filter(t => allTags.includes(t)));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const url = new URL(window.location.href);
    if (selectedTags.length) {
      url.searchParams.set('tags', selectedTags.join(','));
    } else {
      url.searchParams.delete('tags');
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedTags, mounted]);

  const toggleTag = (tag: string) =>
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );

  const suggestions = cvData.categories
    .map(cat => ({
      ...cat,
      tags: cat.tags.filter(t =>
        allTags.includes(t) &&
        !selectedTags.includes(t) &&
        (!query || formatTag(t).toLowerCase().includes(query.toLowerCase()))
      ),
    }))
    .filter(cat => cat.tags.length > 0);

  const filteredEntries = mounted && selectedTags.length
    ? cvData.entries
        .map(entry => ({
          ...entry,
          bullets: entry.bullets.filter(b => b.tags.some(t => selectedTags.includes(t))),
        }))
        .filter(entry => entry.bullets.length > 0)
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 print:bg-white print:py-8">
      <div className="w-full max-w-2xl mx-auto">

        {/* Identity */}
        <div className="flex items-center gap-5 mb-10">
          <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden ring-4 ring-sky-200">
            <img
              src="https://falci.me/images/me.avif"
              alt="Fernando Falci"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Fernando Falci</h1>
            <p className="text-sky-700 text-sm mt-0.5">Software Engineer, 15+ years experience</p>
            <p className="text-gray-400 text-xs mt-1">Costa Rica</p>
          </div>
        </div>

        {/* Prompt */}
        <p className="text-sm text-gray-600 leading-relaxed mb-1">
          {cvData.profile.intro}
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Pick the topics that matter to you and I will show only the relevant parts.{' '}
          <a href="/download/cv.pdf" className="underline hover:text-gray-600 transition-colors">
            There is also a one-page resume.
          </a>
        </p>

        {/* Autocomplete */}
        <div className="relative print:hidden">
          <input
            type="text"
            placeholder="e.g. React, Leadership, AWS..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setTimeout(() => setIsOpen(false), 150)}
            className="w-full px-5 py-4 text-base rounded-2xl border-2 border-gray-200 focus:border-sky-400 focus:outline-none shadow-sm transition-colors bg-white placeholder:text-gray-300"
          />

          {isOpen && (
            <div
              onMouseDown={e => e.preventDefault()}
              className="absolute top-full mt-1 w-full bg-white rounded-xl border border-gray-200 shadow-xl z-10 max-h-72 overflow-y-auto"
            >
              {suggestions.length === 0 ? (
                <div className="px-4 py-3 text-sm text-gray-400">No matches</div>
              ) : suggestions.map((cat, i) => (
                <div key={cat.label}>
                  {i > 0 && <div className="border-t border-gray-100" />}
                  <div className="px-4 pt-2.5 pb-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400 sticky top-0 bg-white">
                    {cat.label}
                  </div>
                  {cat.tags.map(tag => (
                    <button
                      key={tag}
                      onMouseDown={() => { toggleTag(tag); setQuery(''); }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-800 transition-colors"
                    >
                      {formatTag(tag)}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Persona presets */}
        {selectedTags.length === 0 && !query && (
          <div className="mt-4 print:hidden">
            <p className="text-xs text-gray-400 mb-2">Or start with a role:</p>
            <div className="flex flex-wrap gap-2">
              {PERSONAS.map(p => (
                <button
                  key={p.label}
                  onClick={() => setSelectedTags(p.tags.filter(t => allTags.includes(t)))}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected tag pills */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 print:hidden">
            {selectedTags.map(tag => (
              <span
                key={tag}
                className="flex items-center gap-1.5 bg-sky-100 text-sky-800 text-sm px-3 py-1 rounded-full"
              >
                {formatTag(tag)}
                <button
                  onClick={() => toggleTag(tag)}
                  className="text-sky-400 hover:text-sky-900 leading-none transition-colors"
                  aria-label={`Remove ${formatTag(tag)}`}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Download PDF */}
        {filteredEntries.length > 0 && (
          <div className="mt-6 flex justify-end print:hidden">
            <button
              onClick={async () => {
                setDownloading(true);
                await downloadCVPdf(selectedTags, filteredEntries, cvData.skills, formatTag, cvData.profile.intro);
                setDownloading(false);
              }}
              disabled={downloading}
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-60 transition-colors"
            >
              {downloading ? 'Generating...' : 'Download PDF'}
            </button>
          </div>
        )}

        {/* Filtered CV content */}
        {filteredEntries.length > 0 && (
          <div className="mt-10 flex flex-col gap-8">
            <p className="text-xs text-gray-400 -mb-4">
              {filteredEntries.length} {filteredEntries.length === 1 ? 'entry' : 'entries'} matched
            </p>
            {filteredEntries.map(entry => (
              <div key={entry.name}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {entry.url ? (
                        <a href={entry.url} className="hover:text-sky-700 transition-colors">
                          {entry.name}
                        </a>
                      ) : entry.name}
                    </div>
                    <div className="text-sm text-sky-700">{entry.role}</div>
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap ml-4 mt-0.5">
                    {formatPeriod(entry.start, entry.end)}
                  </div>
                </div>
                {entry.description && (
                  <p className="text-xs text-gray-400 italic mb-2">{entry.description}</p>
                )}
                <ul className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100">
                  {entry.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed">
                      {b.text}
                      {b.tags.filter(t => selectedTags.includes(t)).map(tag => (
                        <span
                          key={tag}
                          className="inline-block ml-1.5 px-1.5 py-px text-[10px] font-medium bg-sky-100 text-sky-700 rounded align-middle leading-tight"
                        >
                          {formatTag(tag)}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
