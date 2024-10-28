// server/controllers/helloController.ts
import { getHelloService, postHelloService } from '~/server/services/helloService';
import { NextRequest, NextResponse } from "next/server";

export const helloController = async (req: NextRequest) => {
  try {
    if (req.method === 'GET') {
      const data = await getHelloService();
      return NextResponse.json(data, { status: 200 });
    }

    if (req.method === 'POST') {
      const input = await req.json();
      const data = await postHelloService(input.message);
      return NextResponse.json(data, { status: 201 });
    }

    // call NextResponse.error to return a 405 Method Not Allowed error
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
  }
};
