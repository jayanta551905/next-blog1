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
      console.log("user exists");
      return NextResponse.json(
        {
          err: "User already exists",
        },
        {
          status: 409,
        }
      );
    } else {
      await new User({
        name,
        email,
        password,
      }).save();
      return NextResponse.json({
        success: "User created successfully",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: "Server error an ocorded",
      },
      {
        status: 500,
      }
    );
  }
}
