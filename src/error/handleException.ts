const handleException = (
  errorCode: string,
  message: string,
  detail?: Error
) => ({
  errorCode,
  message,
  detail,
});

export default handleException;
