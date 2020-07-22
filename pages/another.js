import Head from 'next/head';
import { Link } from '../utils/i18n';

export default function Another({ title }) {
  return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <Link href="/">Go Index</Link>
      </div>
  )
}

export async function getServerSideProps() {
  return {
    props: { title: 'Another' }
  }
}
