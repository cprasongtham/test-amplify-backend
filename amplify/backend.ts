import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { HelloWorldLambdaStack } from './custom-functions/resources';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  auth,
  data,
});

new HelloWorldLambdaStack(
  backend.createStack('HelloWorldLambdaStack'),
  'helloWorldLambdaResource',
  {}
);