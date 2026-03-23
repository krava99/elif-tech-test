import { NextResponse } from "next/server";
import { globalApi } from "../api";

import { isAxiosError } from "axios";

export async function GET() {
  try {
    const res = await globalApi("/shops", {
      method: "GET",
    });
    console.log("Backend Response Error:", res.data);

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.response?.status ?? 500 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
