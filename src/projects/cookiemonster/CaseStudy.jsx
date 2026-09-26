/*
 * CookieMonster case study. All copy is verbatim from the original Claude Design export.
 * Layout and styling come from the shared case-study components; the Figma-generated
 * illustrations live in ./artwork.
 */
import { useSectionNavigation } from '../../hooks/useSectionNavigation';
import { anchors } from '../../content/site';
import Button from '../../components/ui/Button';
import Artwork from '../../components/media/Artwork';
import {
  CaseStudyLayout,
  CaseHero,
  CaseSection,
  BackLink,
  PhaseBadge,
  Split,
  MetaList,
  ColumnGrid,
  HighlightCard,
  PersonaCard,
  CtaBlock,
  Bleed,
  SectionTitle,
  Eyebrow,
  SubHeading,
  Paragraph,
  BulletList,
  Callout,
  TextBlock,
  Stack,
} from '../../components/case-study';

import HeroMacbook from './artwork/HeroMacbook';
import ProcessDiagram from './artwork/ProcessDiagram';
import UserJourneys from './artwork/UserJourneys';
import PhysicalSketches from './artwork/PhysicalSketches';
import DigitalSketches from './artwork/DigitalSketches';
import Wireflow from './artwork/Wireflow';
import Mockups from './artwork/Mockups';
import PersonaAvatar from './PersonaAvatar';
import RequirementList from './RequirementList';
import styles from './CaseStudy.module.css';

const theme = { accent: '#99c8ff', highlight: '#5d97db' };

function Discovery() {
  return (
    <CaseSection gap={64} labelledBy="cm-discovery">
      <PhaseBadge id="cm-discovery">Discvoery</PhaseBadge>
      <Split
        mainWidth={636}
        asideWidth={341}
        main={
          <Stack gap={80}>
            <Stack gap={24}>
              <Eyebrow>TECHNICAL UNDERSTANDING</Eyebrow>
              <Paragraph>
                To design a cookie management system, I first needed to grasp the basics of cookies. Which types should be declined/accepted? What
                cookies are important for the browsing experience?
              </Paragraph>
              <Stack gap={8}>
                <SubHeading>Potentially Positive</SubHeading>
                <BulletList
                  gap={0}
                  items={[
                    'Session Cookies: Ends after closing the browser, and can be important for e.g. remembering a shopping cart.',
                    'Persistent Cookies: Could be important for remembering preferences and settings.',
                    'First-party Cookies: Are set by the current website visiting and usually better than:',
                  ]}
                />
              </Stack>
              <Stack gap={8}>
                <SubHeading>Potentially Harmful</SubHeading>
                <BulletList
                  gap={0}
                  items={[
                    'Third-party Cookies: Are set by e.g. external advertisers and could track users behaviour around the web.',
                    'Zombie, Super, and Ever-cookies: Are hard to detect and delete, and often a threat to privacy.',
                  ]}
                />
              </Stack>
            </Stack>
            <Stack gap={24}>
              <Eyebrow>COMPETITIVE ANALYSIS</Eyebrow>
              <Paragraph>
                I conducted a competitive analysis to familiarize myself with the cookie management tools on the market. Some findings inspired me,
                some findings I wanted to avoid.
              </Paragraph>
              <Stack gap={8}>
                <SubHeading>To bring</SubHeading>
                <BulletList gap={0} items={['User friendly, not-too-techy labels for the system', 'The UI for Google’s settings']} />
              </Stack>
              <Stack gap={8}>
                <SubHeading>To avoid</SubHeading>
                <BulletList
                  gap={0}
                  items={['Too much techy information', 'Poor hierarchy', 'Taking up too much space of browsing window']}
                />
              </Stack>
            </Stack>
          </Stack>
        }
        aside={
          <Callout>
            While pop-ups disrupt the browsing experience, they are crucial for data privacy. Could I design a system that respects both aspects?
          </Callout>
        }
      />
    </CaseSection>
  );
}

function Empathize() {
  return (
    <CaseSection variant="panel" gap={98} labelledBy="cm-empathize">
      <PhaseBadge id="cm-empathize">Empathesize</PhaseBadge>
      <Split
        mainWidth={637}
        asideWidth={327}
        main={
          <Stack gap={80}>
            <TextBlock eyebrow="USERS">
              The emphasize phase is all about understanding the users, requiring the designer to step into their shoes. Therefore an focus group
              discussion with 3 participants from different tech levels was held to give me an idea of their individual needs and pain points.
              {'  '}Of course, 3 people can’t cover every issue, but it was a compromise to work within my time constraints.
            </TextBlock>
            <TextBlock eyebrow="PERSONAS">
              The focus group discussion became a perfect bridge into persona creation. As I was lacking real data, I made validated assumptions
              based on the focus group discussion, research on the web and by basically just asking suitable people in my surrounding. I wanted to
              create a multi-user system for 3 different personas, but time limited me to mainly focus on Ylva and Paula.
            </TextBlock>
            <TextBlock eyebrow="COMMON UNDERLYING NEED">
              It was important to me to discover the underlying need the personas had in common, as it’s vital to creating useful and successful
              design for the users. This need was a faithful companion through the entire design journey: One desires to feel safe, updated, and in
              control, while avoiding the feeling of being surveilled and manipulated.
            </TextBlock>
          </Stack>
        }
        aside={
          <Callout className={styles.empathizeCallout}>
            The user desires to feel safe, updated, and in control, while avoiding the feeling of being surveilled and manipulated.
          </Callout>
        }
      />
      <Stack gap={24}>
        <Eyebrow>Main personas</Eyebrow>
        <ul className={styles.personas}>
          <li>
            <PersonaCard
              icon={<PersonaAvatar persona="ylva" size={56.188} />}
              tagline="Untechnical and annoyed"
              name="Ylva, 20 yrs"
              description="Ylva is not interested in tech at all, but is super annoyed by the constant pop-ups on every single site. Therefore she is looking for a service that provides automated cookie management on new sites, default settings minimal disruption during the configuration process."
              painPoint="Annoying pop-ups and disturbed browsing experience."
            />
          </li>
          <li>
            <PersonaCard
              icon={<PersonaAvatar persona="paula" size={55.309} />}
              tagline="Anxious privacy-conscious woman"
              name="Paula, 35 yrs"
              description="Paula, with moderate technical knowledge, is anxious about online privacy. She seeks a service balancing cookie customization and browsing efficiency. She prefers a user-friendly interface respecting her browsing experience."
              painPoint="Privacy concerns and lack of control."
            />
          </li>
          <li>
            <PersonaCard
              icon={<PersonaAvatar persona="eric" size={55.309} />}
              headerMuted
              tagline="Tech-savvy man who wants more"
              name="Eric, 40 yrs"
              description="Eric, a software developer, is knowledgeable about privacy management, and prefers clear, detailed information about cookie types and duration. He want the ability to configure preferences for each site individually."
              descriptionFont="display"
              painPoint="Lack of system control and feeling dictated by the system."
            />
          </li>
        </ul>
      </Stack>
      <Stack gap={120}>
        <TextBlock eyebrow="USER JOURNEYS" width={636}>
          Considering the different personas, I tailored 3 user journeys to better suit their individual needs and pain points. I also adjusted the
          scope of the journeys to align with the time frame of the project.
        </TextBlock>
        <Artwork width={1060} label="User journeys for onboarding, settings and overview, branching by persona">
          <UserJourneys />
        </Artwork>
      </Stack>
    </CaseSection>
  );
}

function Requirements() {
  return (
    <CaseSection gap={56} labelledBy="cm-requirements">
      <Split
        mainWidth={636}
        asideWidth={327}
        main={
          <Stack gap={56}>
            <Stack gap={80}>
              <PhaseBadge id="cm-requirements">Requirements</PhaseBadge>
              <Paragraph>
                Throughout all the phases of the design process I extracted requirements, filtered them through the personas and then prioritised
                them to align with the project timeline. Here are a few examples of the results:
              </Paragraph>
            </Stack>
            <RequirementList
              items={[
                { text: 'Total automation of cookie management', personas: ['ylva'] },
                { text: 'Clear all cookies option easily available', personas: ['ylva', 'paula'] },
                { text: 'Customised onboarding experience', personas: ['ylva', 'eric'] },
                { text: 'Visualization of protection status', personas: ['paula', 'eric'] },
                { text: 'See number of cookies', personas: ['paula', 'eric'] },
                { text: 'Whitelist option for exceptions', personas: ['paula', 'eric'] },
                { text: 'See user profile based on gathered data', personas: ['paula'], dropped: true },
                { text: 'Other browsing data cleanup op§tions', personas: ['eric'], dropped: true, tone: '#828282' },
                { text: 'Cache cleanup options', personas: ['eric'], dropped: true, tone: '#828282' },
              ]}
            />
          </Stack>
        }
        aside={<Callout className={styles.requirementsCallout}>Requirements was extracted and filtered through the personas. </Callout>}
      />
    </CaseSection>
  );
}

export default function CookieMonsterCaseStudy() {
  const goToSection = useSectionNavigation();
  return (
    <CaseStudyLayout theme={theme}>
      <CaseHero
        title="CookieMonster"
        subtitle={
          <>
            <span className={styles.line}>Say goodbye to cookie </span>
            <span className={styles.line}>pop-ups and take back your privacy. </span>
          </>
        }
        gradient="linear-gradient(-76.6493deg, rgb(153, 200, 255) 35.279%, rgb(93, 151, 219) 98.095%)"
        artwork={<HeroMacbook />}
        artworkWidth={627}
        artworkLabel="CookieMonster's welcome dialog shown on a laptop over a shopping website"
        layout={{ left: 48, gap: 99, textWidth: 356, textGap: 40, height: 772, offsetY: 1.87 }}
        topLeft={<BackLink variant="overlay" />}
      />

      <CaseSection labelledBy="cm-task">
        <Stack gap={24}>
          <SectionTitle id="cm-task">Task</SectionTitle>
          <Split
            mainWidth={626}
            asideWidth={302}
            main={
              <Paragraph>
                Cookies are vital for website functionalities, and even user experience, but can also pose privacy risks. This is why GDPR was
                implemented, leading to cookie consent pop-ups on nearly every website today. While these pop-ups can disrupt the browsing experience,
                they are crucial for protecting data privacy. The task in this university project was to design a plugin that reveals and manages
                cookies on websites to raise awareness about users&apos; online tracking, while ensuring a smooth browsing experience and reduced
                interruptions.
              </Paragraph>
            }
            aside={
              <MetaList
                tags={['UX Design']}
                items={[
                  { label: 'ROLE', value: 'Design, Report writing' },
                  { label: 'TYPE', value: 'Individual University Project' },
                  { label: 'TIME', value: 'Nov. - Dec. 2024 (6 weeks)' },
                ]}
              />
            }
          />
        </Stack>
      </CaseSection>

      <CaseSection variant="panel" gap={120} labelledBy="cm-process">
        <Stack gap={24} width={620}>
          <SectionTitle id="cm-process">Design Process</SectionTitle>
          <Paragraph>
            While the process wasn’t linear, it went roughly as outlined below.{'  '}In following sections, the different steps are described more in
            detail.
          </Paragraph>
        </Stack>
        <Artwork width={1055} label="Design process: Discovery, Empathesize, Ideate, Prototype, Test and Iterate, all feeding into Requirements">
          <ProcessDiagram />
        </Artwork>
      </CaseSection>

      <Discovery />
      <Empathize />
      <Requirements />

      <CaseSection padding="0 0 80px" label="Challenge">
        <HighlightCard eyebrow="CHALLENGE">
          Is there a way of keeping the browser experience smooth, while ensuring the users data privacy and safety?{' '}
        </HighlightCard>
      </CaseSection>

      <CaseSection variant="panel" padding="80px 109px" labelledBy="cm-ideate">
        <PhaseBadge id="cm-ideate">Ideate</PhaseBadge>
        <Stack gap={32}>
          <TextBlock eyebrow="PHYSICAL SKETCHING" gap={32} width={625} align="justify">
            During this phase, I used physical sketches for speed and digital sketches for efficient duplication. The challenge above allowed me to stay
            focused on the task while ideating.
          </TextBlock>
          <Artwork width={1061} label="Four pages of physical sketches, each tagged with the personas it addresses">
            <PhysicalSketches />
          </Artwork>
        </Stack>
        <div>
          <h3 className="visually-hidden">Digital sketching</h3>
          <Bleed width={1249}>
            <Artwork label="Digital sketches of the plugin connected by persona-coloured user paths">
              <DigitalSketches />
            </Artwork>
          </Bleed>
        </div>
      </CaseSection>

      <CaseSection padding="80px 0 64px" labelledBy="cm-prototype">
        <PhaseBadge id="cm-prototype">Prototype</PhaseBadge>
        <TextBlock eyebrow="WIREFLOWS" width={625}>
          The sketches was transferred into Figma and the wireframes were connected to prepare for the test phase. Underneath shows an example of how
          I was working with the wireflow for the onboarding process.
        </TextBlock>
        <Artwork label="Wireflow of the onboarding: welcome dialog, user-type choice and the resulting settings screens for each persona">
          <Wireflow />
        </Artwork>
      </CaseSection>

      <CaseSection variant="panel" labelledBy="cm-test">
        <PhaseBadge id="cm-test">Test</PhaseBadge>
        <Split
          mainWidth={637}
          asideWidth={327}
          main={
            <Stack gap={33}>
              <TextBlock eyebrow="THINK OUT LOUD">
                As a designer it’s easy to become blinded by personal preferences. It’s important that the system meets the user’s needs in order to be
                truly useful. Therefore a think out loud evaluation was conducted with multiple (new) users to gather valuable insights for iteration.
              </TextBlock>
              <Stack gap={24}>
                <Eyebrow>INSIGHTS</Eyebrow>
                <BulletList
                  gap={16}
                  items={[
                    'Decrease amount of clicks before user can access detailed overview and settings from small modal window.',
                    'For Ylva, the design is slightly cumbersome and there is an excess of text.',
                    'Account symbol was confusing, as there was no account made in the onboarding process. The users prefer the login to be optional.',
                    'The flows for overview and settings are lacking coherence between the small and tall modal windows.',
                    'The cookie information displayed in small modal window is confusing. What does the numbers mean?',
                  ]}
                />
              </Stack>
            </Stack>
          }
          aside={<Callout>The user test generated valuable insights that were incorporated in the iteration.</Callout>}
        />
      </CaseSection>

      <CaseSection labelledBy="cm-iterate">
        <Stack gap={80} width={624}>
          <PhaseBadge id="cm-iterate">Iterate</PhaseBadge>
          <TextBlock eyebrow="MOCKUPS">
            The focus of this project was to design a system for cookie management, rather than fully develop the UI. To save time, I therefore only
            designed the UI for 3 screens.
          </TextBlock>
        </Stack>
        <Bleed width={1274}>
          <Artwork width={1274} offsetTop={388} label="Final mockups: welcome dialog, cookie settings and the Zara.com overview panel">
            <Mockups />
          </Artwork>
        </Bleed>
        <CtaBlock
          title={
            <>
              Contact me for the
              <br /> full prototype
            </>
          }
          action={
            <Button href={`#${anchors.contact}`} onClick={(e) => { e.preventDefault(); goToSection(anchors.contact); }}>
              Contact me
            </Button>
          }
        />
      </CaseSection>

      <CaseSection variant="panel" padding="100px 109px 80px" labelledBy="cm-takeaways">
        <SectionTitle id="cm-takeaways" className={styles.compactTitle}>
          Project Take-Aways
        </SectionTitle>
        <ColumnGrid
          columns={[
            {
              title: 'TEST EARLIER',
              body: 'I would like to see myself test at en even earlier state in the future, to ensure I’m on the right path.',
            },
            {
              title: 'FIXATING ON DETAILS',
              body: 'I often found myself loosing time on moving pixels, and had to remember to step back and focus on the bigger picture.',
            },
            {
              title: 'Summative evaluation',
              body: 'If I had more time I would like to evaluate the final design with users, to confirm the iteration resulted in an improvement.',
            },
          ]}
        />
      </CaseSection>
    </CaseStudyLayout>
  );
}
