import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import { bcrypt } from "bcrypt";
import User from "@/models/user";

export async function POST(req) {
  const _req = await req.json();
  await dbConnect();
  try {
    const { name, email, password } = _req;
    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        {
          status: 409,
        }
      );
    } else {
      await new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      }).save();
      return NextResponse.json({
        success: "User created successfully",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "Server error an ocorded",
      },
      {
        status: 500,
      }
    );
  }
}
