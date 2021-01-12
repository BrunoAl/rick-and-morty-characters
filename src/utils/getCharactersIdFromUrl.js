function getStringAfterLastSlash(url) {
  const index = url.lastIndexOf('/');
  return url.substr(index + 1);
}

export default function getCharacterIdFromUrls(urls) {
  if (!Array.isArray(urls)) {
    throw new Error(`Expected an array but received ${typeof urls}`);
  }
  return urls.map(url => getStringAfterLastSlash(url));
}
