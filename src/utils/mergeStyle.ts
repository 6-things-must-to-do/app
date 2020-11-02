import * as R from 'ramda';

type RawStyle<T> = T | Array<T>;
type MergeStyleList<T> = Array<RawStyle<T>>;

const reduceStyleArray = <T>(acc: Array<T>, curr: RawStyle<T>) => {
  const type = typeof curr;
  if (type !== 'object') throw new Error('Unhandled style type.');

  if (!Array.isArray(curr)) return R.append(curr, acc);

  return R.concat(acc, curr);
};

export default function mergeStyle<T extends object>(
  defaultStyle: Array<T>,
  mergeStyleList: MergeStyleList<T>
) {
  const targetStyleArray = R.reduce(
    reduceStyleArray,
    defaultStyle,
    mergeStyleList
  );

  return R.mergeAll(targetStyleArray);
}
