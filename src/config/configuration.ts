export default () => ({
  port: parseInt(process.env.PORT_APP, 10) || 3000,
});
