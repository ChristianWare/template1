import Head from "next/head"
// import PropTypes from 'prop-types'

function SEO({ title, description, keywords, image }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta itemProp='name' content={title} />
        <meta itemProp='description' content={description} />
        <meta itemProp='image' content={image} />
      </Head>
    </div>
  );
}

export default SEO;
