import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server";
import toast from "react-hot-toast";
import { z } from "zod";

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success)
        return (
            NextResponse.json(validation.error.errors, { status: 400 })
            // toast.error("Title must be 1 to 255 chars and description cannot be empty")
        )

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    });

    return (
        NextResponse.json(newIssue, { status: 201 })
        // toast.success("New issue added.")
    )
};