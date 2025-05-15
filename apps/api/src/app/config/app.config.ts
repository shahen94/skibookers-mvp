export const config = () => ({
  auth: {
    secret: process.env.AUTH_SECRET,
    expiresIn: process.env.AUTH_EXPIRES_IN
  },
  services: {
    recommendationEngineUrl: process.env.RECOMMENDATION_ENGINE_URL,
  }
});
