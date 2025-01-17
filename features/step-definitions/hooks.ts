import { After, AfterAll, BeforeAll } from '@cucumber/cucumber';
import { server } from '../mocks/server';
import { resetBuildResults } from './helpers';
// Establish API mocking before all tests.
BeforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
After(() => server.resetHandlers());
// reset
After(() => resetBuildResults());
// Clean up after the tests are finished.
AfterAll(() => server.close());
