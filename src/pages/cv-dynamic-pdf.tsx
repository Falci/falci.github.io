import {
  Document,
  Page,
  View,
  Text,
  Image,
  Link,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer';

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
          <Text style={s.location}>Costa Rica</Text>

          <View style={s.sidebarSection}>
            <Text style={s.sidebarSectionTitle}>Contact</Text>
            <View style={s.contactRow}>
              <Link src="https://falci.me" style={s.contactLink}>
                falci.me
              </Link>
            </View>
            <View style={s.contactRow}>
              <Link src="https://linkedin.com/in/falci" style={s.contactLink}>
                linkedin.com/in/falci
              </Link>
            </View>
            <View style={s.contactRow}>
              <Link src="https://github.com/Falci" style={s.contactLink}>
                github.com/Falci
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
            <Text style={s.mainTitle}>
              Full-Stack Engineer · 15+ years experience
            </Text>
          </View>

          <Text style={s.sectionTitle}>Experience</Text>

          {entries.map((entry, i) => (
            <View key={entry.name} style={i === 0 ? [s.entry, s.entryFirst] : s.entry} wrap={false}>
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
                  <Text style={s.bulletText}>{b.text}</Text>
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
