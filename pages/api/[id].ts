// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { DateTime } from "luxon";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await prisma.todos.findMany({
      orderBy: { id: "desc" },
    });
    res.status(200).json(todos);
  } else if (req.method === "PUT") {
    const id = req.query.id;
    const updateTodo = await prisma.todos.update({
      where: {
        id: String(id),
      },
      data: {
        status: true,
        updated_at: DateTime.now().toString(),
      },
    });
    res.status(201).json(updateTodo);
  } else if (req.method === "DELETE") {
    const id = req.query.id;
    const deleteTodo = await prisma.todos.delete({
      where: {
        id: String(id),
      },
    });
    res.json(deleteTodo);
  } else {
    res.status(405).end();
  }
}
