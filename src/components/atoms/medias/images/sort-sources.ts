import { unique } from '@djeka07/utils';
import { SrcSet } from './image.props';
import { media } from '../../../../styles';

const sortSources = <T extends Pick<SrcSet, 'maxBreakPoint'>>(arr: T[] = []): T[] => {
  const sorted = unique(arr, 'maxBreakPoint').sort((a, b) => {
    if (media[a.maxBreakPoint]?.up.value < media[b.maxBreakPoint]?.up?.value) {
      return -1;
    }
    if (media[a.maxBreakPoint]?.up.value > media[b.maxBreakPoint]?.up?.value) return 1;
    return 0;
  });
  return sorted;
};

export default sortSources;
