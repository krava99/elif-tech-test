import { NextResponse } from "next/server";
import { isAxiosError } from "axios";
import { globalApi } from "@/app/api/api";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await globalApi.post("/orders", body);

    return NextResponse.json(res.data, { status: 201 });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        {
          error: error.message,
          details: error.response?.data,
        },
        { status: error.response?.status ?? 500 },
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
