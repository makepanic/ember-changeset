// @flow

import setNestedProperty from 'ember-changeset/utils/set-nested-property';

const { keys } = Object;

/**
 * Given an array of objects, merge their keys into a new object and
 * return the new object.
 *
 * This function merges using `setNestedProperty`.
 */
export default function mergeNested /*:: <T> */ (
  ...objects /*: Array<{ [string]: T }> */
) /*: { [string]: T } */ {
  let finalObj = {};

  objects.forEach(obj =>
    keys(obj).forEach(key =>
      setNestedProperty(finalObj, key, obj[key])
    )
  );

  return finalObj;
}
