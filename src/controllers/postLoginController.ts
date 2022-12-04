import { Request, Response } from "express";

import handleException from "../error/handleException";

interface PostLoginControllerProps {
  adminPassword: string;
}

interface PostLoginControllerRequestBody {
  password: string;
}

type PostLoginControllerResponseBody =
  | {
      success: boolean;
    }
  | ReturnType<typeof handleException>;

type PostLoginControllerRequest = Request<
  never,
  never,
  PostLoginControllerRequestBody,
  never,
  never
>;
type PostLoginControllerResponse = Response<PostLoginControllerResponseBody>;

function postLoginController({ adminPassword }: PostLoginControllerProps) {
  return async function postLoginControllerClosure(
    request: PostLoginControllerRequest,
    response: PostLoginControllerResponse
  ) {
    const { password } = request.body;

    if (password !== adminPassword) {
      return response
        .status(401)
        .json(
          handleException(
            "PLC-1",
            "Incorrect password",
            new Error("Incorrect password given in the HTTP POST request.")
          )
        );
    }

    return response.status(200).json({ success: true });
  };
}

export default postLoginController;
