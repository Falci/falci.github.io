import {
  Document,
  Page,
  View,
  Text,
  Image,
  Link,
  Svg,
  Path,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer';

const ICONS = {
  phone: {
    path: 'M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z',
    viewBox: '0 0 512 512',
  },
  envelope: {
    path: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
    viewBox: '0 0 512 512',
  },
  link: {
    path: 'M326.6 185.4c59.7 59.8 58.9 155.7.4 214.6l-.4.4-67.2 67.2c-59.3 59.3-155.7 59.3-214.9 0-59.3-59.3-59.3-155.7 0-215l37.1-37.1c9.8-9.8 26.8-3.3 27.3 10.6.6 17.7 3.8 35.5 9.7 52.7 2 5.8.6 12.3-3.8 16.6l-13.1 13.1c-28 28-28.9 73.7-1.2 102 28 28.6 74.1 28.7 102.3.5l67.2-67.2c28.2-28.2 28.1-73.8 0-101.8-3.7-3.7-7.4-6.6-10.3-8.6a16 16 0 0 1-6.9-12.6c-.4-10.6 3.3-21.5 11.7-29.8l21.1-21.1c5.5-5.5 14.2-6.2 20.6-1.7a152.5 152.5 0 0 1 20.5 17.2zM467.5 44.4c-59.3-59.3-155.7-59.3-215 0l-67.2 67.2-.4.4c-58.6 58.9-59.4 154.8.4 214.6a152.5 152.5 0 0 0 20.5 17.2c6.4 4.5 15.1 3.8 20.6-1.7l21.1-21.1c8.4-8.4 12.1-19.2 11.7-29.8a16 16 0 0 0-6.9-12.6c-2.9-2-6.6-4.9-10.3-8.6-28.1-28.1-28.2-73.7 0-101.8l67.2-67.2c28.2-28.2 74.3-28.1 102.3.5 27.8 28.3 26.9 73.9-1.2 102l-13.1 13.1c-4.4 4.4-5.8 10.8-3.8 16.6 5.9 17.2 9 35 9.7 52.7.5 13.9 17.5 20.4 27.3 10.6l37.1-37.1c59.3-59.3 59.3-155.7 0-215z',
    viewBox: '0 0 512 512',
  },
  mapPin: {
    path: 'M172.3 501.7C26.97 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.4 0z',
    viewBox: '0 0 384 512',
  },
  linkedin: {
    path: 'M100.3 448H7.4V149h92.9zM53.8 108C24.1 108 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.2-53.8 54.2zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V149h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z',
    viewBox: '0 0 448 512',
  },
  github: {
    path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.5 8 244.8 8z',
    viewBox: '0 0 496 512',
  },
} as const;

const SidebarIcon = ({ icon }: { icon: keyof typeof ICONS }) => (
  <Svg
    viewBox={ICONS[icon].viewBox}
    style={{ width: 8, height: 8, marginRight: 6, marginTop: 1 }}
  >
    <Path d={ICONS[icon].path} fill={skyAccent} />
  </Svg>
);

// Navy palette matching the existing CV
const navy = '#0f2644';
const navyLight = '#1a3a60';
const skyAccent = '#38bdf8';
const skyDark = '#0369a1';
const white = '#ffffff';
const gray50 = '#f8fafc';
const gray200 = '#e2e8f0';
const gray500 = '#64748b';
const gray700 = '#334155';
const gray900 = '#0f172a';

const s = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    flexDirection: 'row',
    backgroundColor: white,
  },
  sidebarBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 185,
    backgroundColor: navy,
  },
  sidebar: {
    width: 185,
    padding: 24,
    flexDirection: 'column',
    flexShrink: 0,
  },
  photoRing: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: skyAccent,
    marginBottom: 12,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoClip: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  photo: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    objectPosition: '50% 35%',
  },
  name: {
    color: white,
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 2,
  },
  title: {
    color: skyAccent,
    fontSize: 8,
    textAlign: 'center',
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  location: {
    color: '#94a3b8',
    fontSize: 7.5,
    textAlign: 'center',
    marginBottom: 20,
  },
  sidebarSection: {
    marginBottom: 16,
  },
  sidebarSectionTitle: {
    color: skyAccent,
    fontSize: 7,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: navyLight,
    paddingBottom: 4,
    marginBottom: 8,
  },
  tagPill: {
    backgroundColor: navyLight,
    color: '#bae6fd',
    fontSize: 7.5,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 4,
    marginRight: 4,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 5,
  },
  contactText: {
    color: '#cbd5e1',
    fontSize: 7.5,
  },
  contactLink: {
    color: '#cbd5e1',
    fontSize: 7.5,
    textDecoration: 'none',
  },
  main: {
    flex: 1,
    backgroundColor: gray50,
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 28,
    flexDirection: 'column',
  },
  mainHeader: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: gray200,
  },
  mainName: {
    color: gray900,
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 2,
  },
  mainTitle: {
    color: skyDark,
    fontSize: 9,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  intro: {
    color: gray500,
    fontSize: 8,
    lineHeight: 1.5,
  },
  sectionTitle: {
    color: gray900,
    fontSize: 7.5,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: gray200,
    paddingBottom: 4,
    marginBottom: 10,
  },
  entry: {
    marginTop: 14,
  },
  entryFirst: {
    marginTop: 0,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  entryName: {
    color: gray900,
    fontSize: 9.5,
    fontWeight: 700,
  },
  entryRole: {
    color: skyDark,
    fontSize: 8,
    marginTop: 1,
  },
  entryPeriod: {
    color: gray500,
    fontSize: 7.5,
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 8,
  },
  bulletDot: {
    color: skyDark,
    fontSize: 8,
    marginRight: 5,
    marginTop: 1,
  },
  bulletText: {
    color: gray700,
    fontSize: 8,
    lineHeight: 1.45,
    flex: 1,
  },
  inlineTag: {
    color: skyDark,
    fontSize: 6.5,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: gray200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#94a3b8',
    fontSize: 7,
  },
});

type Bullet = { text: string; tags: string[] };
type Entry = {
  name: string;
  url?: string;
  role: string;
  start: number;
  end: number | null;
  bullets: Bullet[];
};

type SkillGroup = { label: string; items: string[]; tags: string[] };

type Props = {
  selectedTags: string[];
  entries: Entry[];
  skills: SkillGroup[];
  formatTag: (tag: string) => string;
  profileIntro: string;
};

const formatPeriod = (start: number, end: number | null) =>
  `${start} \u2013 ${end ?? 'Present'}`;

const CVDocument = ({
  selectedTags,
  entries,
  skills,
  formatTag,
  profileIntro,
}: Props) => {
  const relevantSkills = skills
    .map((g) => ({
      ...g,
      items: g.items.filter((item) =>
        selectedTags.some((t) => item.toLowerCase() === t.toLowerCase())
      ),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <Document title="Fernando Falci - CV" author="Fernando Falci">
      <Page size="A4" style={s.page}>
        {/* Fixed navy background for sidebar — repeats on every page */}
        <View fixed style={s.sidebarBg} />

        {/* Sidebar */}
        <View style={s.sidebar}>
          <View style={s.photoRing}>
            <View style={s.photoClip}>
              <Image src="/images/me.jpeg" style={s.photo} />
            </View>
          </View>
          <Text style={s.name}>Fernando Falci</Text>
          <Text style={s.title}>Software Engineer</Text>
          <Text style={s.location}>EMEA</Text>

          <View style={s.sidebarSection}>
            <Text style={s.sidebarSectionTitle}>Contact</Text>
            <View style={s.contactRow}>
              <SidebarIcon icon="phone" />
              <Text style={s.contactText}>+1 (302) 687 3667</Text>
            </View>
            <View style={s.contactRow}>
              <SidebarIcon icon="envelope" />
              <Link src="mailto:fernando@falci.me" style={s.contactLink}>
                fernando@falci.me
              </Link>
            </View>
            <View style={s.contactRow}>
              <SidebarIcon icon="link" />
              <Link src="https://falci.me" style={s.contactLink}>
                falci.me
              </Link>
            </View>
            <View style={s.contactRow}>
              <SidebarIcon icon="mapPin" />
              <Text style={s.contactText}>EMEA</Text>
            </View>
            <View style={s.contactRow}>
              <SidebarIcon icon="linkedin" />
              <Link
                src="https://linkedin.com/in/fernandofalci"
                style={s.contactLink}
              >
                fernandofalci
              </Link>
            </View>
            <View style={s.contactRow}>
              <SidebarIcon icon="github" />
              <Link src="https://github.com/Falci" style={s.contactLink}>
                falci
              </Link>
            </View>
          </View>

          <View style={s.sidebarSection}>
            <Text style={s.sidebarSectionTitle}>Focus areas</Text>
            <View style={s.tagsRow}>
              {selectedTags.map((tag) => (
                <Text key={tag} style={s.tagPill}>
                  {formatTag(tag)}
                </Text>
              ))}
            </View>
          </View>

          <View style={s.sidebarSection}>
            <Text style={s.sidebarSectionTitle}>References</Text>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  color: white,
                  fontSize: 8,
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Daniel Fernandez
              </Text>
              <Text style={{ color: skyAccent, fontSize: 7, marginBottom: 2 }}>
                Qdrant, Staff Software Engineer
              </Text>
              <Link src="mailto:contact@danifdz.dev" style={s.contactLink}>
                contact@danifdz.dev
              </Link>
            </View>
            <View>
              <Text
                style={{
                  color: white,
                  fontSize: 8,
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Aaron Oxborrow
              </Text>
              <Text style={{ color: skyAccent, fontSize: 7, marginBottom: 2 }}>
                Aftermarket.com, CTO
              </Text>
              <Link src="mailto:aaron@oxborrow.com" style={s.contactLink}>
                aaron@oxborrow.com
              </Link>
            </View>
          </View>

          {/* QR code */}
          <View style={{ marginTop: 16, alignItems: 'center' }}>
            <Text style={s.sidebarSectionTitle}>View online</Text>
            <Image
              src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(`https://falci.me/cv-dynamic?tags=${selectedTags.join(',')}`)}&size=220x220&margin=0&color=38bdf8&bgcolor=0f2644`}
              style={{ width: 100, height: 100, marginTop: 6 }}
            />
          </View>
        </View>

        {/* Main content */}
        <View style={s.main}>
          <View style={s.mainHeader}>
            <Text style={s.mainName}>Fernando Falci</Text>
            <Text style={s.mainTitle}>Software Engineer</Text>
          </View>

          <Text style={s.sectionTitle}>Experience</Text>

          {entries.map((entry, i) => (
            <View
              key={entry.name}
              style={i === 0 ? [s.entry, s.entryFirst] : s.entry}
              wrap={false}
            >
              <View style={s.entryHeader}>
                <View>
                  <Text style={s.entryName}>{entry.name}</Text>
                  <Text style={s.entryRole}>{entry.role}</Text>
                </View>
                <Text style={s.entryPeriod}>
                  {formatPeriod(entry.start, entry.end)}
                </Text>
              </View>
              {entry.bullets.map((b, i) => (
                <View key={i} style={s.bullet}>
                  <Text style={s.bulletDot}>•</Text>
                  <Text style={s.bulletText}>
                    {b.text}
                    {b.tags
                      .filter((t) => selectedTags.includes(t))
                      .map((tag, i) => (
                        <Text key={tag} style={s.inlineTag}>
                          {i === 0 ? '  |  ' : ',  '}
                          {formatTag(tag)}
                        </Text>
                      ))}
                  </Text>
                </View>
              ))}
            </View>
          ))}

          <View style={s.footer}>
            <Text style={s.footerText}>falci.me/cv-dynamic</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export const downloadCVPdf = async (
  selectedTags: string[],
  entries: Entry[],
  skills: SkillGroup[],
  formatTag: (tag: string) => string,
  profileIntro: string
) => {
  const blob = await pdf(
    <CVDocument
      selectedTags={selectedTags}
      entries={entries}
      skills={skills}
      formatTag={formatTag}
      profileIntro={profileIntro}
    />
  ).toBlob();

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Fernando_Falci_CV_${selectedTags.slice(0, 3).join('-')}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
};
