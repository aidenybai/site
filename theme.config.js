const YEAR = new Date().getFullYear();

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <abbr
        title="This site and all its content are licensed under a MIT License."
        style={{ cursor: 'help' }}
      >
        MIT
      </abbr>{' '}
      <time>{YEAR}</time> © Aiden Bai.
      <a href="mailto:aiden.bai05@gmail.com">Contact</a>
      <style jsx>{`
        a {
          float: right;
        }
      `}</style>
    </small>
  ),
};
