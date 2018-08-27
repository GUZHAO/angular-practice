import { SkillModule } from './skill.module';

describe('SkillModule', () => {
  let artModule: SkillModule;

  beforeEach(() => {
    artModule = new SkillModule();
  });

  it('should create an instance', () => {
    expect(artModule).toBeTruthy();
  });
});
