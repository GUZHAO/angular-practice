import { ArtModule } from './art.module';

describe('ArtModule', () => {
  let artModule: ArtModule;

  beforeEach(() => {
    artModule = new ArtModule();
  });

  it('should create an instance', () => {
    expect(artModule).toBeTruthy();
  });
});
