let Responder = {
  sendResponse: (
    response,
    statusCode,
    status,
    data,
    message,
    pagination = {}
  ) => {
    response.status(statusCode).json({
      status: status,
      data: data,
      message: message,
      pagination,
    });
  },
  thirdPartyErrorResponse: (error, base) => {
    if (
      error.response &&
      error.response.status == 401 &&
      error.response.statusText == "Unauthorized"
    ) {
      throw new Error(error.response.statusText);
    } else if (
      error.response &&
      error.response.data &&
      !error.response.data.success &&
      (error.response.data.message || error.response.data.c)
    ) {
      throw new Error(
        `${base} : ${error.response.data.message || error.response.data.c}`
      );
    } else if (
      error.response &&
      error.response.data &&
      !error.response.data.success &&
      error.response.data.errors.length > 0
    ) {
      throw new Error(
        `${base} : ${error.response.data.errors
          .map((x) => JSON.stringify(x))
          .join("\n")}`
      );
    } else if (
      error.response &&
      error.response.data &&
      error.response.data.errors.length > 0
    ) {
      throw new Error(
        `${base} : ${error.response.data.message
        } : ${error.response.data.errors.join("\n")}`
      );
    } else {
      throw new Error(error);
    }
  },
};

export default Responder;
