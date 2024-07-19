export async function GET(req: Request, res: Response) {
  try {
    return Response.json(
      { message: "Hello World" },
      {
        status: 200,
        headers: { "content-type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error(error.message);
    return Response.json(
      { error: error },
      {
        status: 400,
      }
    );
  }
}
