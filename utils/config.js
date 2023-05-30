export const productionConfig = {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    userPoolId: 'us-east-1_apCdkad4c',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    identityPoolId: 'us-east-1:0c09a4ec-8817-496f-b37d-3deef005f08b',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: '68fhh8dv6cmjdprd4uf37cp9r6',
  },
  API: {
    aws_appsync_graphqlEndpoint:
      'https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql',
    aws_appsync_region: 'us-east-1',
    aws_appsync_authenticationType: 'AWS_IAM',
  },
};

export default { productionConfig };
