/*
 * Ommej case study. All copy is verbatim from the original Claude Design export.
 * Layout and styling come from the shared case-study components; the Figma-generated
 * illustrations live in ./artwork.
 */
import Button from '../../components/ui/Button';
import Artwork from '../../components/media/Artwork';
import Figure from '../../components/media/Figure';
import ImageGrid from '../../components/media/ImageGrid';
import { ArrowDownIcon, PlayIcon, MagnifierIcon, EyeIcon, CompassIcon, PencilIcon, MobileIcon, BrainIcon } from '../../components/ui/icons';
import { scrollToSection } from '../../hooks/useSectionNavigation';
import {
  CaseStudyLayout,
  CaseHero,
  CaseSection,
  BackLink,
  PhaseBadge,
  ProjectIntro,
  ProductTabs,
  Split,
  MetaList,
  ColumnGrid,
  InfoCard,
  ResultCard,
  SectionTitle,
  Eyebrow,
  Paragraph,
  Highlight,
  BulletList,
  Callout,
  TextBlock,
  Stack,
} from '../../components/case-study';

import HeroPhones from './artwork/HeroPhones';
import ProcessDiagram from './artwork/ProcessDiagram';
import TargetAudienceAvatar from './artwork/TargetAudienceAvatar';
import OriginalFlow from './artwork/OriginalFlow';
import MessageSimplification from './artwork/MessageSimplification';
import InspirationBoard from './artwork/InspirationBoard';
import FigmaMakeScreenshot from './artwork/FigmaMakeScreenshot';
import ResultValuePhones from './artwork/ResultValuePhones';
import ResultInfoPhones from './artwork/ResultInfoPhones';
import ResultSafetyPhones from './artwork/ResultSafetyPhones';
import OmmejLogomark from './artwork/OmmejLogomark';

import sketch1 from '../../assets/images/18ddb15ade0bba5ee748b7d38d7707df86e171ca.png';
import sketch2 from '../../assets/images/8d3fa33c83fab07dd58cf9fc0044b0d1212adb80.png';
import sketch3 from '../../assets/images/3c5800d2d16d5223ee0dee58fceff1461513e116.png';
import sketch4 from '../../assets/images/ab08f2d0495e529fe8c2522ab0a45bca24e9a1d4.png';
import manualIterations from '../../assets/images/e8220b40f602340d78f08a470de93c68a233e4b9.png';
import prototypeStrip from '../../assets/images/ebc613f7e72de3a6d8a06ef9ce75560d9b49bf67.png';
import aiPrompts from '../../assets/images/cb3215c9e56a0dd28547d69aa55e6277148a989d.png';

import styles from './CaseStudy.module.css';

const theme = { accent: '#c8caff', highlight: '#4956ca' };

const PROTOTYPE_URL =
  'https://www.figma.com/proto/GA3TQBUNOVyipfeKLdptyN/Ommej--min-fil-?page-id=130%3A3663&node-id=130-9762&viewport=433%2C-213%2C0.08&t=hxHm97seZ0REUxLO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=130%3A9704&show-proto-sidebar=1';

const RESULT_GRADIENT_FIRST =
  'linear-gradient(107.302deg, rgb(122, 130, 207) 0.56511%, rgb(158, 164, 226) 23.512%, rgb(158, 164, 226) 68.928%, rgb(94, 101, 175) 100%)';
const RESULT_GRADIENT =
  'linear-gradient(107.219deg, rgb(122, 130, 207) 0.56511%, rgb(158, 164, 226) 23.512%, rgb(158, 164, 226) 68.928%, rgb(94, 101, 175) 100%)';

function Logo() {
  return (
    <span className={styles.logo} aria-hidden="true">
      <svg viewBox="0 0 64 64" className={styles.logoCircle}>
        <circle cx="32" cy="32" r="32" fill="#4956CA" />
      </svg>
      <OmmejLogomark />
    </span>
  );
}

function OnboardingDesign() {
  return (
    <>
      <CaseHero
        title="Onboarding"
        titleAs="h2"
        subtitle="Redesigning the onboarding to increase trust, reduce friction, and help more children start participating."
        gradient="linear-gradient(103.978deg, rgb(94, 101, 175) 0.56511%, rgb(158, 164, 226) 31.639%, rgb(158, 164, 226) 77.055%, rgb(122, 130, 207) 100%)"
        artwork={<HeroPhones />}
        artworkWidth={520}
        artworkLabel="Three screens from the redesigned Ommej onboarding: welcome, avatar builder and confirmation"
        layout={{ left: 128, gap: 100, textWidth: 416, textGap: 24, height: 773 }}
        action={
          <Button
            variant="soft"
            icon={<ArrowDownIcon />}
            onClick={() => scrollToSection('result')}
          >
            Result
          </Button>
        }
      />

      <CaseSection labelledBy="ommej-challenge">
        <Split
          mainWidth={564}
          asideWidth={302}
          main={
            <Stack gap={24}>
              <SectionTitle id="ommej-challenge">Challenge</SectionTitle>
              <Stack gap={32}>
                <Paragraph>
                  The success of the service depends on children not only accepting an invitation, but also creating an account and actively
                  answering questions. Without participation, professionals such as social workers and healthcare providers receive little or
                  no information to support their work.
                </Paragraph>
                <Stack gap={16}>
                  <Paragraph>This created a critical business challenge:</Paragraph>
                  <BulletList
                    gap={16}
                    items={[
                      'Many invited children never completed onboarding or created an account.',
                      'Low engagement reduced the amount of information available to professionals.',
                      'Reduced value for professionals risked lower adoption of the service.',
                    ]}
                  />
                </Stack>
              </Stack>
            </Stack>
          }
          aside={
            <div className={styles.challengeAside}>
              <MetaList
                tags={['UX/UI Design', 'Copy', 'Hi-fi']}
                items={[
                  { label: 'YEAR', value: '2025 (improved 2026)' },
                  { label: 'TIME', value: '1 month back and forth' },
                ]}
              />
              <Callout eyebrow="business driver" compact>
                Ommej&apos;s value depends on children creating an account and answering questions.
              </Callout>
            </div>
          }
        />
      </CaseSection>

      <CaseSection variant="panel" gap={100} labelledBy="ommej-process">
        <Stack gap={24} width={620}>
          <SectionTitle id="ommej-process">Design Process</SectionTitle>
          <Paragraph>
            The process was not linear, but broadly followed the stages below. Early work was done manually, while{' '}
            <Highlight>AI was later used</Highlight> to accelerate iteration and prototyping.
          </Paragraph>
        </Stack>
        <Artwork width={1055} label="Design process: Understand, Evaluate, Explore, Prototype, Testing and AI Iteration, with iteration loops back to Explore and Prototype">
          <ProcessDiagram />
        </Artwork>
      </CaseSection>

      <CaseSection gap={48} labelledBy="ommej-understand">
        <PhaseBadge id="ommej-understand" icon={MagnifierIcon}>
          Understand
        </PhaseBadge>
        <div className={styles.understand}>
          <InfoCard
            icon={
              <Artwork label="Illustrated child avatar">
                <TargetAudienceAvatar />
              </Artwork>
            }
            title="Target audience"
          >
            <BulletList
              items={['Children aged 8 - 16', 'May be going through difficult situations in life.', 'Short atension span. ']}
            />
          </InfoCard>
          <Stack gap={40} width={530}>
            <TextBlock eyebrow="Research">
              Research from Nielsen Norman Group and other UX studies shows that many users tend to skip traditional onboarding flows, but users
              needed enough context and trust before answering personal questions. This created a challenge.
            </TextBlock>
            <TextBlock eyebrow="Design goal">
              Take users to the first important step: creating an account and beginning to answer questions.
            </TextBlock>
          </Stack>
        </div>
      </CaseSection>

      <CaseSection variant="panel" labelledBy="ommej-evaluate">
        <PhaseBadge id="ommej-evaluate" icon={EyeIcon}>
          Evaluate
        </PhaseBadge>
        <Stack gap={38.6}>
          <Eyebrow>Original flow</Eyebrow>
          <Artwork label="The original onboarding flow, annotated with critique and proposed solutions">
            <OriginalFlow />
          </Artwork>
        </Stack>
        <Stack gap={40}>
          <Eyebrow>Simplifying the Message</Eyebrow>
          <Artwork width={1064} label="Copy processing: the original description of Ommej, a processed version, and the resulting core message">
            <MessageSimplification />
          </Artwork>
        </Stack>
      </CaseSection>

      <CaseSection variant="panel" padding="80px 109px" background="transparent" labelledBy="ommej-explore">
        <PhaseBadge id="ommej-explore" icon={CompassIcon}>
          Explore
        </PhaseBadge>
        <Stack gap={32}>
          <TextBlock eyebrow="Sketching" gap={16} width={628}>
            I first brainstorming different options for the flow in a divergent way.
          </TextBlock>
          <ImageGrid
            gap={8.277}
            label="Flow sketches"
            images={[
              { src: sketch1, alt: 'Hand-drawn sketch of onboarding flow options', width: 259.895, height: 360.009, radius: 4.138 },
              { src: sketch2, alt: 'Hand-drawn sketch of onboarding flow options', width: 259.86, height: 359.959, radius: 4.138 },
              { src: sketch3, alt: 'Hand-drawn sketch of onboarding flow options', width: 259.675, height: 359.703, radius: 4.138 },
              {
                src: sketch4,
                alt: 'Hand-drawn sketch of onboarding flow options',
                width: 259.74,
                height: 359.506,
                radius: 4.138,
                crop: { width: 116.18, height: 116.27, left: 0.11, top: -4.4 },
              },
            ]}
          />
        </Stack>
        <Stack gap={32}>
          <TextBlock eyebrow="Inspiration & competative analysis" gap={16} width={628}>
            Then I investigated how other child friendly services have made their onboardings.
          </TextBlock>
          <Artwork width={1064} label="Competitive analysis board with onboarding screenshots from child-friendly apps and review comments">
            <InspirationBoard />
          </Artwork>
        </Stack>
        <ColumnGrid
          title="Key insihgts"
          titleStyle="subheading"
          columns={[
            {
              title: 'Very Small First Task',
              intro: 'All of the app starts with quick first success:',
              list: ['How are you feeling today?', 'Take a deep breath.', 'Choose a goal.', 'Answer a question.'],
            },
            {
              title: 'Immediate Feedback',
              intro: 'After every response, the user receives:',
              list: ['Validation', 'Reflection', 'Encouragement', 'A next step'],
            },
            {
              title: 'Stress Reducing Design',
              intro: 'Common patterns:',
              list: ['Soft colors', 'Plenty of white space', 'Few choices at a time', 'Limited amount of information'],
            },
          ]}
        />
      </CaseSection>

      <CaseSection variant="panel" padding="80px 109px" background="#f9f9f9" labelledBy="ommej-prototype">
        <PhaseBadge id="ommej-prototype" icon={PencilIcon}>
          Prototype
        </PhaseBadge>
        <Stack gap={32}>
          <TextBlock eyebrow="Manual iterations" gap={16} width={628}>
            I explored many directions manually before converging on a testable solution. This were time consuming and something I would have sped
            up through AI exploration from the very start if I would redo this today.
          </TextBlock>
          <Figure src={manualIterations} alt="Figma canvas showing the many manual iterations of the onboarding flow" width={2896} height={1248} radius={16} />
        </Stack>
        <Stack gap={32}>
          <TextBlock eyebrow="Interactive prototype" gap={16} width={628}>
            The resulting concept was brought together into an interactive prototype that could be tested.
          </TextBlock>
          <div className={styles.prototypeRow}>
            <div className={styles.prototypeStrip}>
              <Figure src={prototypeStrip} alt="Overview of all screens in the interactive prototype" width={908} height={94.924} />
            </div>
            <Button href={PROTOTYPE_URL} size="sm" color="#4956ca" icon={<PlayIcon size={20} />} iconPosition="start">
              Test here
            </Button>
          </div>
        </Stack>
      </CaseSection>

      <CaseSection padding="80px 0 64px" labelledBy="ommej-testing">
        <Stack gap={80} width={636}>
          <PhaseBadge id="ommej-testing" icon={MobileIcon}>
            Testing
          </PhaseBadge>
          <Paragraph>
            I tested the flow internally with colleagues and a small group of people in my network. The feedback revealed critical issues related to
            cognitive load, interuption and motivation. This ultimately challanged my inisial idea and led to a complete redesign of the flow.
          </Paragraph>
        </Stack>
        <ColumnGrid
          title="Insights"
          titleStyle="subheading"
          columns={[
            {
              title: 'Cognetiv Overload',
              body: 'The onboarding tried to accomplish too many goals at once, creating unnecessary mental effort.',
            },
            {
              title: 'Too Much Explanation',
              body: 'Users preferred learning through interaction rather than reading long informational messages.',
            },
            { title: 'Excessive Friction', body: 'Too many steps and interruptions reduced motivation to continue.' },
          ]}
        />
      </CaseSection>

      <CaseSection variant="panel" padding="80px 109px" labelledBy="ommej-ai">
        <PhaseBadge id="ommej-ai" icon={BrainIcon}>
          AI Iteration
        </PhaseBadge>
        <TextBlock eyebrow="Ai assisted ideation" gap={32} width={628}>
          In this iteration AI was used as a design critique and ideation tool. I used ChatGPT, Figma Make and Claude Design to evaluate flows,
          generate alternative concepts, and identify UX patterns.
        </TextBlock>
        <Stack gap={24}>
          <Figure
            src={aiPrompts}
            alt="Four rounds of prompts in Figma Make with the generated onboarding screens"
            width={1062}
            height={1040.153}
            radius={16}
          />
          <Artwork width={1062} label="Claude Design session iterating on the onboarding welcome screen">
            <FigmaMakeScreenshot />
          </Artwork>
        </Stack>
      </CaseSection>

      <CaseSection id="result" variant="wide" gap={40} labelledBy="ommej-result">
        <div className={styles.resultHeader}>
          <SectionTitle id="ommej-result">Result</SectionTitle>
          {/* The original design has no destination for this button yet. */}
          <Button color="#4956ca">Test prorotype</Button>
        </div>
        <ResultCard
          gradient={RESULT_GRADIENT_FIRST}
          textWidth={408}
          paddingBlock={88}
          blocks={[
            {
              title: 'Challange',
              body: "Ommej's value depends on children creating an account and answering questions. Without participation, professionals receive limited insight and cannot fully benefit from the service.",
            },
            {
              title: 'Solution',
              body: 'The onboarding was redesigned to communicate value quickly, establish trust, and guide users into answering their first questions with minimal friction.',
            },
          ]}
          artwork={<ResultValuePhones />}
          artworkLabel="Final screens illustrating value communication, trust-building and early engagement"
        />
        <ResultCard
          gradient={RESULT_GRADIENT}
          textWidth={378}
          paddingBlock={60}
          minHeight={590}
          blocks={[
            {
              title: 'Challange',
              body: 'The original onboarding relied heavily on explanatory text, creating unnecessary cognitive load for younger users.',
            },
            {
              title: 'Solution',
              body: 'Information was simplified and embedded into the experience itself. Instead of asking users to read long explanations, key concepts were introduced through interaction. Additional information was made available through an optional video and contextual help.',
            },
          ]}
          artwork={<ResultInfoPhones />}
          artworkLabel="Final screens showing the optional video and help in a tooltip"
        />
        <ResultCard
          gradient={RESULT_GRADIENT}
          textWidth={378}
          paddingBlock={60}
          minHeight={590}
          blocks={[
            {
              title: 'Challange',
              body: 'Many Ommej users may be experiencing difficult situations, making trust and emotional safety essential to the experience.',
            },
            {
              title: 'Solution',
              body: 'While till keeping to Ommejs brand colors, a softer peach accent , age-appropriate language and familiar emojis helped create a safer experience.',
            },
          ]}
          artwork={<ResultSafetyPhones />}
          artworkLabel="Final screens showing soft colors and familiar emojis"
        />
      </CaseSection>

      <CaseSection variant="panel" background="#fafafa" padding="100px 109px 80px" labelledBy="ommej-learnings">
        <SectionTitle id="ommej-learnings" className={styles.compactTitle}>
          Learnings
        </SectionTitle>
        <ColumnGrid
          columns={[
            {
              title: 'Kill your darlings',
              body: 'I committed too early to a concept that attempted to communicate too much at once. Letting go of those ideas was difficult, but reduced cognetive load and friction in the flow.',
            },
            {
              title: 'LESS IS MORE',
              body: 'I spent a lot of time refining Ommej’s messaging, but learned that clear and short communication is more important than detailed content.',
            },
            {
              title: 'reduce MANUAL PROTOTYPING',
              body: 'Building the initial prototype manually was time-consuming. Looking back, I would use AI earlier to speed up interactive prototyping.',
            },
          ]}
        />
      </CaseSection>
    </>
  );
}

export default function OmmejCaseStudy() {
  return (
    <CaseStudyLayout theme={theme}>
      <div className={styles.backRow}>
        <BackLink />
      </div>

      <CaseSection padding="0" label="Ommej">
        <ProjectIntro
          logo={<Logo />}
          title="Ommej"
          description="Ommej is a BTG company working with prevention of mental health challenges among children and young in the municipalities. The service consists of two connected products: the app, where children answer dynamic, adaptive questions about their life, health, and wellbeing. And the administrative system That helps professionals gain an overview and analyze responses to better understand needs and risks of the children."
          link={{ label: 'View Ommej' }}
          overview={{
            title: 'Overview',
            body: "During the final year of my Bachelor’s degree in Interaction Design, I joined Ommej and worked alongside my studies. As Lead Designer, I launched new features, expanded Ommej's design system, and led UX and UI design across the platform. I also contributed with print and graphic design. My work has been centered around reducing information overload, designing for varying levels of digital literacy, and improving accessibility in line with WCAG guidelines.",
          }}
          meta={[
            { label: 'ROLE', value: 'Lead UX/UI Designer' },
            { label: 'TIME', value: '2024 - ongoing' },
            { label: 'IMPACT', value: 'Contributing to expansion from 8 to 13 municipalities' },
          ]}
        />
      </CaseSection>

      <ProductTabs
        title="Selected Products"
        tabs={[
          { label: 'Onboarding Design', content: <OnboardingDesign /> },
          { label: 'Design Systems' },
          { label: 'Cognitive Load Reduction' },
        ]}
      />
    </CaseStudyLayout>
  );
}
