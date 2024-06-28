import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server";
import toast from "react-hot-toast";
import { z } from "zod";

const createIssueSchema = z.object({
    title: z.string().min(1, "Title of at least 3 characters is required.").max(255),
    description: z.string().min(1, "Description is required.")
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    if (!validation.success) {
        // toast.error("Validation error. Title must be 1 to 255 chars. \nDescription cannot be empty.")
        return (
            NextResponse.json(validation.error.format(), { status: 400 })
        )
    }

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    });

    // toast.success("New issue added.")
    return (
        NextResponse.json(newIssue, { status: 201 })
    )
};