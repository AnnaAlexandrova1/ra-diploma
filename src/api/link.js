// const link = 'http://localhost:7070/'

// export default link;

const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7070';
}

if (url.hostname === 'annaalexandrova1.github.io') {
  url.hostname = 'diplom-ra.herokuapp.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const link = {
  root: root.origin,
  api: new URL('api', url.href).href,
};

export default link;