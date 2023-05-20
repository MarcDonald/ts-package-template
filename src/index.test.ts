import { helloWorld } from './index';

test('Hello World', async () => {
	expect(helloWorld()).to.equal(123);
});
