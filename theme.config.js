const year = new Date().getFullYear();
const age = new Date().getYear() - new Date('Sunday, January 5, 2005').getYear();

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <abbr
        title="This site and all its content are licensed under a MIT License."
        style={{ cursor: 'help' }}
      >
        made w/ ♥
      </abbr>{' '}
      by Aiden Bai.
      <a className="email" href="mailto:aiden.bai05@gmail.com">
        ඞ
      </a>
    </small>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:title" content="Aiden Bai" />
      <meta
        name="og:description"
        content={`${age} y/o student from Washington State interested in research and open source.`}
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  ),
  readMore: '→',
  titleSuffix: null,
  postFooter: null,
};
