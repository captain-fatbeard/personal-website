import { Timeline } from '@/app/components/Timeline';
import { UnderlinedTitle } from '../../components/UnderlinedTitle';
import styles from '../../page.module.css';

type Event = {
  present?: boolean;
  year: string;
  title: string;
  text: string;
};

export default function Experince() {
  const events: Event[] = [
    {
      present: true,
      year: '2022 - present',
      title: 'NoA Ignite',
      text: 'Senior developer; typescript, nodeJS, express',
    },
    {
      year: '2020 - 2022',
      title: 'Ambition',
      text: 'Tech Lead; Laravel, javascript, react, GCP, kubernetes',
    },
    {
      year: '2015 - 2020',
      title: 'Netbooster / Artefact',
      text: 'Team lead; PHP, javascript, vuejs',
    },
    {
      year: '2013 - 2015',
      title: 'Designheroes',
      text: 'PHP Frameworks, webshops',
    },
    {
      year: '2012',
      title: 'Rete-Moto / Heroes & Generals',
      text: 'Web-dev & forum maintenance. Started as 2 month internship.',
    },
    {
      year: '2011',
      title: 'AmPd',
      text: 'Freelance Web development, design and programming in HTML5/CSS3.',
    },
  ];

  return (
    <main className={styles.main}>
      <UnderlinedTitle title="Experince" />
      <p>Write somehing about experince here</p>

      <Timeline events={events} />
    </main>
  );
}
