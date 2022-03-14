import Head from "next/head"

function SEO({ title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
    </div>
  );
}

export default SEO;
