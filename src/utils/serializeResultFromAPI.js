/**
 * Serialize api's results to always be in a array.
 * @param {(array|number)} results - API results
 * @return {array} - serialized results
 */
export default function serializeResults(results) {
  if (!Array.isArray(results)) {
    return [results];
  }
  return results;
}
