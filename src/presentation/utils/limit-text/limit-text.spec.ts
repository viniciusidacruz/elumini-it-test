import { limitText } from '.';

describe('limit text', () => {
  it('should be return limit text default', () => {
    const limitedText = limitText('Vinicius Italo');

    expect(limitedText).toBe('Vinicius I');
  });

  it('should be return limit text with params', () => {
    const limitedText = limitText('Vinicius Italo', 8);

    expect(limitedText).toBe('Vinicius');
  });

  it('should be not return without params', () => {
    const limitedText = limitText('');

    expect(limitedText).toBeUndefined();
  });
});
