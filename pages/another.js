import Head from 'next/head';
import { Link } from 'utils/i18n';
import NextLink from 'next/link'

export default function Another() {
    return (
        <div>
            <Head>
                <title>Another</title>
            </Head>
            <p>
                <Link href="/"><a>i18nLink: Go Index</a></Link>
            </p>
            <p>
                <NextLink href="/"><a>NextLink: Go Index</a></NextLink>
            </p>
        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: { title: 'Another' }
    }
}
