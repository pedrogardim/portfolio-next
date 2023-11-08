import { NextResponse } from "next/server";
import db from "@/db/mongo";

export async function GET() {
  const projects = await db
    .collection("projects")
    .find({})
    .project({ title: 1 })
    .toArray();
  return NextResponse.json(projects);
}
