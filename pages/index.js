import Head from 'next/head';
import { Link } from 'utils/i18n';
import NextLink from 'next/link'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Homepage</title>
            </Head>
            <p>
                <Link href="/another"><a>i18nLink: Go Another</a></Link>
            </p>
            <p>
                <NextLink href="/another"><a>NextLink: Go Another</a></NextLink>
            </p>
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: { title: 'Homepage' }
    }
}
