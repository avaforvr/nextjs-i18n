import Head from 'next/head';
import { Link } from 'utils/i18n';

export default function Home({ title }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Link href="/another">Go Another</Link>
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: { title: 'Homepage' }
    }
}
