function getStringAfterLastSlash(url) {
  const index = url.lastIndexOf('/');
  return url.substr(index + 1);
}

/**
 * Gets the characters id from each url.
 * @param {array} urls - array of urls
 * @return {array} - array of characters id
 */
export default function getCharactersIdFromUrls(urls) {
  if (!Array.isArray(urls)) {
    throw new Error(`Expected an array but received ${typeof urls}`);
  }
  return urls.map(url => getStringAfterLastSlash(url));
}
