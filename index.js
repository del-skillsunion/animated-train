module.exports.handler = async (event) => {
  const respose = {
    "timestamp": Date.now().toString(),
    "status_code": 200,
    "body": "body"
  }
  console.log(respose)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: respose,
      },
      null,
      2
    ),
  };
};

module.exports.error = async (event) => {
  const respose = {
    "timestamp": Date.now().toString(),
    "status_code": 400,
    "body": "body error"
  }

  const err = new Error(respose)
  
  return {
    statusCode: 400,
    body: JSON.stringify(
      {
        message: "error",
        input: err.message.body,
      },
      null,
      2
    ),
  };
};
