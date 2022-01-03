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
  head: ({ meta }) => (
    <>
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: '→',
  titleSuffix: null,
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: 'https://github.com/shuding/nextra',
      name: 'Nextra',
    },
  ],
};
