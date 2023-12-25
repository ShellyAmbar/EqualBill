import { Group } from '@equalbill/stores/user/interfaces';

enum StepType {
  DATA,
  MEDIA,
  PARTICIPENTS,
  COMPLETE,
}
type UseGroupGeneratorProps = {
  groupToUpdate?: Group;
};
export { StepType, UseGroupGeneratorProps };
