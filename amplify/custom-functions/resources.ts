import { CfnOutput, Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class HelloWorldLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const helloWorldFunction = new lambda.Function(this, 'HelloWorldFunction', {
      runtime: lambda.Runtime.PYTHON_3_9, // Specify the runtime
      handler: 'index.handler',           // Specify the handler function
      code: lambda.Code.fromAsset('./amplify/custom-functions/helloworld'),
      functionName: 'HelloWorldFunction',
      description: 'This is my custom Lambda function created using CDK',
      timeout: Duration.seconds(30),
      memorySize: 128,
      environment: {
        TEST: 'test',
      },
    });

    // Output the Lambda function ARN
    new CfnOutput(this, 'HellowWorldFunctionArn', {
      value: helloWorldFunction.functionArn,
      exportName: 'HelloWorldFunctionArn',
    });
  }
}